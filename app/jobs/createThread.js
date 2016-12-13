const jobFactory = require('../jobFactory');
const fs = require('fs');

const msdb = require('../msdb');

module.exports = () => {
    jobFactory('createThread', (job, done) => {
        const messageBody = job.data.body;

        if (!('userId' in messageBody)) {
            done(new Error('Error: field "userId" was not provided.'))
        }

        const user = msdb.db.phpbb_users.findById(messageBody.userId)
              .then(result => {
                  done(null, result.toJSON())
              })
              .catch(err => {
                  done(err);
              })
    })
};