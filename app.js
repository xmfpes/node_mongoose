var express = require('express');
var path = require('path');
var app = express();
var port = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
//admin module get
var admin = require('./routes/admin');
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){
    console.log("mongodb connection");
});

var connect = mongoose.connect('mongodb://127.0.0.1:27017/kyunam', { useMongoClient: true });
autoIncrement.initialize(connect);

app.get('/', function(req, res){
    res.send("zzzz");
});

//routes add
app.use('/admin', admin);
app.listen(port, function(){
    console.log("server start!");
});