var express = require('express');
var router = express.Router();
var itemsSchem = require('../models/database').itemsSchem;

router.get('/',function(req,res,next){
    itemsSchem.find({}, (err, doc) => {
      if (err) {
        return console.log(err);
      }
      else {
        return res.render('shopping', { items: doc, depName:'ALL CATEGORIES'});
      }
    });  
});

router.post('/addToCard',function(req,res,next){
    console.log("here");
});

module.exports = router;
