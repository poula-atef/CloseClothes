var express = require('express');
var router = express.Router();
var itemsSchem = require('../models/database').itemsSchem;


router.get('/', function (req, res, next) {
    itemsSchem.find({ categ: 'women' }, (err, doc) => {
      if (err) {
        return console.log(err);
      }
      else {
        return res.render('shopping', { items: doc, depName:'WOMEN FASHION' });
      }
    });
});

module.exports = router;