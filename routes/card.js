var express = require('express');
var router = express.Router();
var cardSchem = require('../models/database').cardSchem;

router.get('/',function(req,res,next){
    cardSchem.find({},(err,doc)=>{
        if(err){
            return res.send("Error Happened!!");
        }
        else{
            return res.render('card',{items:doc});
        }
    });  
});

module.exports = router;