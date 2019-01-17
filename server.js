var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();

var secret = require('./config/secret');

// connect to our db - m-lab
mongoose.connect(secret.database, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the db");
    }
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));

// import local router files
require('./routes/main')(app);




// app listerning port
app.listen(secret.port, function(err){
    if(err){
        console.log(err);
    } else {
        console.log('App running on port' + secret.port);
    }
});