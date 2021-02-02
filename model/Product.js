const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const Product= new Schema({
    productName:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productImageList:[
        {
            type:String,
            required: true
        }
    ],
    productPrice:{
        type:Number,
        required:true
    },
    productStatus:{
        type:String,
        required:true
    },
    productSection:{
        type:String,
        required:true
    },
    productType:{
        type:String,
        required:true
    },
    productSeller:{
        type: Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    productAvailbleQuantity:{
        type:Number,
        required:true
    },
    productAuctionPrice:{
        type:Number
    }
}, {timestamps:true});

module.exports= mongoose.model('Product', Product);