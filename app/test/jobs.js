const sinon = require('sinon');
const ip = require('ip');
const crypto = require('crypto');
const Promise = require('bluebird');

const config = require('../configLoader');
const kue = require('kue');
const queue = require('../queue');
const msdb = require('../msdb');

require('./support/common');

describe('Job Tests', function() {

    before(() => {
        queue.testMode.enter(true);
    });

    afterEach(function() {
        queue.testMode.clear();
    });

    after(function() {
        queue.testMode.exit();
    });
      
    it('should create a db thread when db job is invoked', function() {
        const body = {
            userId: 47,
            forumId: 2,
            subject: 'foo',
            message: '[dice]3d6[/dice]'
        };

        const job = queue.create('createThread', {body});
        job.save();

        return new Promise((resolve, reject) => {
            job.on('complete', function(result){
                resolve(result);
            }).on('failed', function(errorMessage){
                reject(errorMessage);
            });
        })
            .then(id => {
                return Promise.all([
                    msdb.db.phpbb_topics.findById(id),
                    msdb.db.phpbb_posts.findOne({where: {topic_id: id}}),
                    msdb.db.phpbb_users.findById(body.userId)
                ]);
            })
            .then(([topic_rec, post_rec, user_rec]) => {
                const topic = topic_rec.dataValues;
                const post = post_rec.dataValues;
                const user = user_rec.dataValues;

                topic.topic_poster.should.equal(body.userId);
                topic.topic_time.should.be.a('number');
                topic.topic_last_view_time.should.equal(topic.topic_time);
                topic.forum_id.should.equal(body.forumId);
                topic.topic_title.should.equal(body.subject);
                topic.topic_first_poster_name.should.equal(user_rec.username);
                topic.topic_first_poster_colour.should.equal(user_rec.user_colour);
                topic.is_private.should.equal(body.forumId === config.get('privateTopicForumId') ? 1 : 0);
                topic.topic_first_post_id.should.equal(post.post_id);
                topic.topic_last_post_id.should.equal(post.post_id);
                topic.topic_last_poster_id.should.equal(user.user_id);
                topic.topic_last_poster_name.should.equal(user.username);
                topic.topic_last_poster_colour.should.equal(user.user_colour);
                topic.topic_last_post_subject.should.equal(body.subject);

                //posts
                post.topic_id.should.equal(topic.topic_id);
                post.forum_id.should.equal(body.forumId);
                post.poster_id.should.equal(body.userId);
                post.poster_ip.should.equal(ip.address());
                post.post_time.should.be.a('number');
                post.post_username.should.equal(user.username);
                post.post_subject.should.equal(body.subject);
                /^.+$/.test(post.bbcode_bitfield).should.be.true;
                /^.+$/.test(post.bbcode_uid).should.be.true;
                /\[dice:.+\].+\[\/dice:.+\]/.test(post.post_text).should.be.true;
                post.post_text.includes(post.bbcode_uid).should.be.true;
                post.post_checksum.should.equal(crypto.createHash('md5').update(post.post_text).digest('hex'));
            });
    });
});