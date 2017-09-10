var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
var logger = require('morgan');
var bodyParser = require('body-parser');

// 확장자가 ejs 로 끈나는 뷰 엔진을 추가한다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){
    console.log("mongodb connection");
});

var connect = mongoose.connect('mongodb://127.0.0.1:27017/kyunam', { useMongoClient: true });
autoIncrement.initialize(connect);

//admin module get
var admin = require('./routes/admin');

app.get('/', function(req, res){
    res.send("zzzz");
});

//routes add
app.use('/admin', admin);
app.listen(port, function(){
    console.log("server start!");
});