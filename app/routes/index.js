const express = require('express');
const redis = require('redis');

const router = express.Router();
const queue = require('../queue');
const kue = require('kue');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'MS Syncer'});
});

router.post('/jobs/:jobType', function(req, res) {
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
                res.status(201).send(job.id.toString());
            }
        });
});

router.get('/jobs/:jobId', function(req, res) {
    kue.Job.get(req.params.jobId, (err, job) => {
        if (err) {
            console.error(err);
            res.status(500).end();
        } else {
            switch (job._state) {
            case 'failed':
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
