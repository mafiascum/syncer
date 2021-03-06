const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const passport = require('passport');
const HeaderAPIKeyStrategy = require('passport-headerapikey').HeaderAPIKeyStrategy;

const config = require('./configLoader');

const routes = require('./routes/index');

const app = express();

const queue = require('./queue');
queue.watchStuckJobs(1000 * 10);

const jobsPath = path.join(__dirname, "jobs");

//set up handlers for all jobs
require("fs").readdirSync(jobsPath).forEach(function(file) {
    if (file.endsWith('.js')) {
        require(`${jobsPath}/${file}`).register();
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

//passport
passport.use(new HeaderAPIKeyStrategy({ header: 'Authorization', prefix: 'Api-Key ' }, false, (apiKey, done) => {
    return done(null, config.get('apiKey') === apiKey);
}));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} else {
    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}


module.exports = app;
