var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('front page');
});

router.all('/shopping',function(req,res,next){
  console.log('shopping');
  res.redirect('/');
})

module.exports = router;
