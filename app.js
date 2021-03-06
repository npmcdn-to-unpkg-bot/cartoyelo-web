/*jslint node: true, nomen: true */
// Source: https://github.com/expressjs/generator/blob/master/templates/js/app.js

'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    /*jslint unparam: true */
    return res.render('index.html');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    /*jslint unparam: true */
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        /*jslint unparam: true */
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    /*jslint unparam: true */
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
