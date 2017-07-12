const express = require('express');
const redis = require('redis');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const queue = require('../queue');
const kue = require('kue');
const passport = require('passport');

const jobsPath = path.join(__dirname, '..', 'jobs');
const jobsDir = fs.readdirSync(jobsPath);

router.use(passport.authenticate('headerapikey', {session: false}), (req, res, next) => {
    next()
});

router.post('/jobs/:jobType', function(req, res) {
    if (!jobsDir.some(file => file.replace('.js', '') === req.params.jobType)) {
        return res.status(404).end();
    }

    const jobDefinition = require(`../jobs/${req.params.jobType}`);

    if ('validators' in jobDefinition) {
        const missing = Object.keys(jobDefinition.validators).filter(key => {
            return !Object.keys(req.body).includes(key);
        });
        if (missing.length) {
            return res.status(400).json({required: missing});
        }
    }

    const job = queue.create(req.params.jobType, {params: req.params, headers: req.headers, body: req.body})
        .priority('critical')
        .attempts(8)
        .backoff(true)
        .removeOnComplete(false)
        .save(err => {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log(`Event: ${req.params.jobType} received.`);
                res.status(201).json({jobId: job.id});
            }
        });
});

router.get('/jobs/:jobId', function(req, res) {
    kue.Job.get(req.params.jobId, (err, job) => {
        if (err) {
            res.status(404).end();
        } else {
            switch (job._state) {
            case 'failed':
                console.log(job._error);
                res.status(500).send(job._error);
                break;
            case 'complete':
                res.status(200).json({data: job.result});
                break;
            default:
                res.status(200).end();
                break;
            }
        }
    });
});

module.exports = router;
