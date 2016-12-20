const Promise = require('bluebird');

const jobFactory = require('../jobFactory');
const msdb = require('../msdb');
const config = require('../configLoader');

module.exports = () => {
    jobFactory('voteCount', (job, done) => {
        const messageBody = job.data.body;

        if (!('topicId' in messageBody)) {
            done(new Error('Error: field "topicId" was not provided.'))
        }

        msdb.db.phpbb_posts.findAll({
            attributes: ['poster_id', 'post_id', 'post_text'],
            where: msdb.Sequelize.and(
                msdb.Sequelize.where(msdb.Sequelize.col('topic_id'), messageBody.topicId),
                msdb.Sequelize.or(
                    msdb.Sequelize.where(
                        msdb.Sequelize.fn('lower', msdb.Sequelize.col('post_text')),
                        {$like: msdb.Sequelize.fn('lower', '%[b:%')}
                    ),
                    msdb.Sequelize.where(
                        msdb.Sequelize.fn('lower', msdb.Sequelize.col('post_text')),
                        {$like: msdb.Sequelize.fn('lower', '%[vote:%')}
                    )
                )
            ),
            order: ['post_id']
        })
            .then(posts => {
                console.log(posts)
            })
    });
}
        