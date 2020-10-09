var mongoose = require('mongoose')

var itemsConnectionString = "mongodb+srv://poula:poula01204562237@cluster0.5vwyr.mongodb.net/items?retryWrites=true&w=majority";
var cardConnectionString = "mongodb+srv://poula:poula01204562237@cluster0.5vwyr.mongodb.net/card?retryWrites=true&w=majority";

var items = mongoose.createConnection(itemsConnectionString,{useNewUrlParser:true,useUnifiedTopology:true});
var card = mongoose.createConnection(cardConnectionString,{useNewUrlParser:true,useUnifiedTopology:true});

var shcema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    sizes:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    },
    buy:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    offer:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    categ:{
        type:String,
        require:true
    },
    three:{
        type:Boolean,
        require:true
    },
    threeHalf:{
        type:Boolean,
        require:true
    },
    four:{
        type:Boolean,
        require:true
    },
    fourHalf:{
        type:Boolean,
        require:true
    },
    five:{
        type:Boolean,
        require:true
    }
});

var itemsSchem = items.model('items', shcema);
var cardSchem = card.model('card', shcema);

module.exports = {itemsSchem,cardSchem}