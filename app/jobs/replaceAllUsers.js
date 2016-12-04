const jobFactory = require('../jobFactory');
const fs = require('fs');

module.exports = () => {
    jobFactory('replaceAllUsers', (job, done) => {
        console.log('replaceAllUsers: starting');
        if (Array.isArray(job.data.body)) {
            console.log(`replaceAllUsers: sending ${job.data.body.length} users to ms automation app`);
            done();
        } else {
            done(new Error('Expecting array, got something else'));
        }
    })
};