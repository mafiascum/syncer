const fs = require('fs');
const ip = require("ip");
const request = require('superagent-bluebird-promise');
const crypto = require('crypto');
const Promise = require('bluebird');

const jobFactory = require('../jobFactory');
const msdb = require('../msdb');
const config = require('../configLoader');

const agent = request.agent({
    keepAliveTimeout: 30000
});

module.exports = () => {
    jobFactory('createThread', (job, done) => {
        const messageBody = job.data.body;

        if (!('userId' in messageBody)) {
            done(new Error('Error: field "userId" was not provided.'))
        }

        if (!('forumId' in messageBody)) {
            done(new Error('Error: field "forumId" was not provided.'))
        }

        if (!('subject' in messageBody)) {
            done(new Error('Error: field "subject" was not provided.'))
        }

        if (!('message' in messageBody)) {
            done(new Error('Error: field "message" was not provided.'))
        }

        const user = msdb.db.phpbb_users.findById(messageBody.userId)
              .then(user => {
                  const currentTime = (new Date()).getTime();

                  return msdb.sequelize.transaction(t => {
                      return Promise.all([
                          msdb.db.phpbb_topics.create({
                              topic_poster: user.user_id,
                              topic_time: currentTime,
                              topic_last_view_time: currentTime,
                              forum_id: messageBody.forumId,
                              topic_title: messageBody.subject,
                              topic_first_poster_name: user.username,
                              topic_first_poster_colour: user.user_colour,
                              is_private: messageBody.forumId === config.get('privateTopicForumId') ? 1 : 0
                          }, {transaction: t}), 
                          agent
                              .post(`${config.get("msUrl")}/render_bbcode.php`)
                              .type('form')
                              .send({message: messageBody.message})])
                          .then(([topic, response]) => {
                              return msdb.db.phpbb_posts.create({
                                  topic_id: topic.topic_id,
                                  forum_id: messageBody.forumId,
                                  poster_id: user.user_id,
                                  poster_ip: ip.address(),
                                  post_time: currentTime,
                                  post_username: user.username,
                                  post_subject: messageBody.subject,
                                  post_text: response.body.message,
                                  post_checksum: crypto.createHash('md5').update(response.body.message).digest('hex'),
                                  bbcode_bitfield: response.body.bitfield,
                                  bbcode_uid: response.body.uid 
                              }, {transaction: t})
                          })
                          .then(post => {
                              return msdb.db.phpbb_topics.update({
                                  topic_first_post_id: post.post_id,
				  topic_last_post_id: post.post_id,
                                  topic_last_post_time: currentTime,
				  topic_last_poster_id:	user.user_id,
				  topic_last_poster_name: user.username,
				  topic_last_poster_colour: user.user_colour,
				  topic_last_post_subject: messageBody.subject
                              }, {where: {topic_id: post.topic_id}, transaction: t})
                                  .then(num => {
                                      done(null, post.topic_id);
                                  })
                          })
                  })
                      .catch(err => {
                          //console.error(err)
                          done(err);
                      });
              })
              .catch(err => {
                  done(err);
              })
    })
};