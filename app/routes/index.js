const express = require('express');
const redis = require('redis');

const router = express.Router();
const queue = require('../queue');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'MS Syncer'});
});

router.post('/publish/:jobId', function(req, res) {
    queue.create(req.params.jobId, {params: req.params, headers: req.headers, body: req.body})
        .priority('critical')
        .attempts(8)
        .backoff(true)
        .removeOnComplete(false)
        .save(err => {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log(`Event: ${req.params.jobId} received.`);
                res.sendStatus(201);
            }
        });
});

module.exports = router;
