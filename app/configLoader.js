const config = require('./config');

module.exports = {
    get: (name) => {
        return process.env[name] || config[name] || '';
    }
}