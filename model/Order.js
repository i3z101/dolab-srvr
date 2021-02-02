const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const Order= new Schema({
    orderedProduct: [{
        type: mongoose.Types.ObjectId,
        ref:'Product',
        required:true
    }],
    ownerOrder: {
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    totalAmount: {
        type: Number,
        required:true
    }
}, {timestamps:true});

module.exports= mongoose.model('Order', Order)