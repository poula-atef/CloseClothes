var express = require('express');
var router = express.Router();
var itemsSchem = require('../models/database').itemsSchem;


router.get('/', function (req, res, next) {
    itemsSchem.find({ categ: 'baby' }, (err, doc) => {
      if (err) {
        return console.log(err);
      }
      else {
        return res.render('shopping', { items: doc, depName:'BABY FASHION' });
      }
    });
});

module.exports = router;