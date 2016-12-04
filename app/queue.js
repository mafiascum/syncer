const config = require('./config');

const kue = require('kue');
module.exports = kue.createQueue({
    redis: {host: config.qdbhost, port: config.qdbport}
});