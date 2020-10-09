var express = require('express');
var router = express.Router();

var {itemsSchem,cardSchem} = require('../models/database');

router.get('/',function(req,res,next){
    res.send("Hello from API!!");
});

router.post('/insertItem',function(req,res,next){
    var name = req.body.name;
    var sizes = req.body.sizes;
    var rating = req.body.rating;
    var buy = req.body.buy;
    var price = req.body.price;
    var offer = req.body.offer;
    var image = req.body.image;
    var categ = req.body.categ;
    var three = req.body.three;
    var threeHalf = req.body.threeHalf;
    var four = req.body.four;
    var fourHalf = req.body.fourHalf;
    var five = req.body.five;
    var item = new itemsSchem({
        name,sizes,rating,buy
        ,price,offer,image,categ,
        three,threeHalf,four,fourHalf,five
    });

    item.save(function(err,doc){
        if(err){
           return res.send("Error Happened!!");
        }else{
           return res.send("Success");
        }
    })

});

router.post('/insertCard',function(req,res,next){
    var name = req.body.name;
    var sizes = req.body.sizes;
    var rating = req.body.rating;
    var buy = req.body.buy;
    var price = req.body.price;
    var offer = req.body.offer;
    var image = req.body.image;
    var categ = req.body.categ;
    var three = req.body.three;
    var threeHalf = req.body.threeHalf;
    var four = req.body.four;
    var fourHalf = req.body.fourHalf;
    var five = req.body.five;

    var item = new cardSchem({
        name,sizes,rating,buy
        ,price,offer,image,categ,
        three,threeHalf,four,fourHalf,five
    });

    console.log(item);

    item.save(function(err,doc){
        if(err){
            console.log("Error");
            return res.send("Error Happened!!");
        }else{
            console.log("Success");
            return res.send("Success");
        }
    })

});

router.post('/findItemsWithCategory',function(req,res,next){
    var categ = req.body.categ;
    itemsSchem.find({categ},(err,doc)=>{
        if(err){
            return res.send("Error Happened!!");
        }
        else{
            return res.send(doc);
        }
    });
});

router.post('/findAllCard',function(req,res,next){
    cardSchem.find({},(err,doc)=>{
        if(err){
            return res.send("Error Happened!!");
        }
        else{
            return res.send(doc);
        }
    });
});

router.post('/findAllItems',function(req,res,next){
    itemsSchem.find({},(err,doc)=>{
        if(err){
            return res.send("Error Happened!!");
        }
        else{
            return res.send(doc);
        }
    });
});

router.post('/deleteOneCard',function(req,res,next){
    var _id = req.body._id;
    cardSchem.deleteOne({_id},(err)=>{
        if(err){
            console.log("Error");
            return res.send("Error Happened!!");
        }
        else{
            console.log("Success");
            return res.send("Success");
        }
    });
})


module.exports = router;