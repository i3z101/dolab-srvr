const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const DolabProduct= new Schema({
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
        required:true,
        default:"console"
    },
    productType:{
        type:String
    },
    productSeller:{
        type: String,
        default:'dolab'
    },
    productAvailbleQuantity:{
        type:Number,
        required:true
    },
    productAuctionPrice:{
        type:Number
    }
}, {timestamps:true})

module.exports= mongoose.model('dolabproduct', DolabProduct);