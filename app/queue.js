const config = require('./configLoader');

const kue = require('kue');
module.exports = kue.createQueue({
    redis: {host: config.get('qdbhost'), port: config.get('qdbport')}
});