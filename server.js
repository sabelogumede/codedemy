const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();
// connect to our db - m-lab
mongoose.connect('mongodb://root:koder19@ds155132.mlab.com:55132/codedemy', function(err){
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

app.get('/', function(req, res, next){
    res.json('home')
});



// app listerning port
app.listen(8080, function(err){
    if(err){
        console.log(err);
    } else {
        console.log('App running on port 8080');
    }
});