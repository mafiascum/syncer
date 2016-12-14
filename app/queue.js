const config = require('./configLoader');

const kue = require('kue');
module.exports = kue.createQueue({
    redis: {host: config.get('qDbHost'), port: config.get('qDbPort')}
});