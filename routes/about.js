var express = require('express');
var router = express();

router.get('/',function(req,res,next){
    console.log("about page!!!!!!");
    res.render('about');
});

module.exports = router;