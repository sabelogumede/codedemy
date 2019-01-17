const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//import local files "modules"
const secret = require('./config/secret');

// connect to our db - m-lab
mongoose.connect('secret.database', function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));

// router
app.get('/', function(req, res, next){
    res.json('home')
});





// app listerning port
app.listen(secret.port, function(err){
    if(err){
        console.log(err);
    } else {
        console.log('App running on port' + secret.port);
    }
});