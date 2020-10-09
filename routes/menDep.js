var express = require('express');
var router = express.Router();
var itemsSchem = require('../models/database').itemsSchem;

router.get('/',function(req,res,next){
    var categ = 'men';
    console.log(req.params.items);
    itemsSchem.find({ categ }, (err, doc) => {
      if (err) {
        return console.log(err);
      }
      else {
        res.render('shopping', { items: doc,depName:'MEN FASHION'});
      }
    });  
});


module.exports = router;