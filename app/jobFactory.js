const queue = require('./queue');
const trycatch = require('trycatch');

module.exports = (jobId, jobWork) => {   
    console.log(`Registering: ${jobId}`);
    queue.process(jobId, 5, (job, done) => {
        trycatch(() => {
            jobWork(job, done);
        }, err => {
            done(err);
        });
    });
};