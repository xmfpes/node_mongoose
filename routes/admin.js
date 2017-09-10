var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.send('admin app page');
});

router.get('/products', function(req, res){
    res.render('admin/products', 
        {message : "hello, ejs"}    
    );
});

router.get('/products/write', function(req,res){
    res.render( 'admin/form');
});

module.exports = router;