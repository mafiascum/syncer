const chai = require('chai');
const Promise = require('bluebird');

const config = require('../configLoader');
const server = require('../app');
const queue = require('../queue');

require('./support/common');

describe('Api Tests', function() {
    describe('Auth', function() {
        it('should 401 when given bad credentials', function() {
            chai.request(server)
                .get('/jobs/1')
                .set('Authorization', 'Api-Key fgsfdf')
                .end((err, res) => {
                    res.should.have.status(401);
                });
        });
    });

    describe('Jobs', function() {
        let jobId;

        it('should 404 nonexistent job type with a POST', function() {
            return chai.request(server)
                .post('/jobs/notarealjob')
                .set('Authorization', `Api-Key ${config.get('apiKey')}`)
                .send({})
                .then(res => {
                    true.should.equal.false;
                })
                .catch(err => {
                    err.should.have.status(404);
                });
        });

        it('should 400 a job with an invalid POST body', function() {
            const payload = {userId: 48, forumId: 2, subject: "foo"}
            return chai.request(server)
                .post('/jobs/createThread')
                .set('Authorization', `Api-Key ${config.get('apiKey')}`)
                .send(payload)
                .then(res => {
                    true.should.equal.false;
                })
                .catch(err => {
                    err.should.have.status(400);
                });
        });

        it('should create a job with a proper POST', function() {
            const payload = {userId: 48, forumId: 2, subject: "foo", message: "[dice]3d6[/dice]"}
            return chai.request(server)
                .post('/jobs/createThread')
                .set('Authorization', `Api-Key ${config.get('apiKey')}`)
                .send(payload)
                .then(res => {
                    res.should.have.status(201);
                    res.body.should.be.an('object');
                    res.body.should.have.key('jobId');
                    res.body.jobId.should.be.a('number');
                    jobId = res.body.jobId;
                });
        });

        it('should 404 a non-existent job with a GET', function() {
            return chai.request(server)
                .get(`/jobs/837737883`)
                .set('Authorization', `Api-Key ${config.get('apiKey')}`)
                .then(res => {
                    true.should.equal.false;
                })
                .catch(err => {
                    err.should.have.status(404);
                });
        });

        it('should get an existing job with a GET', function() {
            return chai.request(server)
                .get(`/jobs/${jobId}`)
                .set('Authorization', `Api-Key ${config.get('apiKey')}`)
                .then(res => {
                    res.should.have.status(200);
                });
        });
    });
});