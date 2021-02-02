const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const User= new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userPhone:{
        type:String,
        required:true
    },
    userCity:{
        type:String,
        required:true
    },
    userVerified:{
        type:Boolean,
        required:true
    },
    userSubscriptionType:{
        type:String,
        required:true,
        default:'regular'
    },
    userProducts:[
        {
        type: Schema.Types.ObjectId,
        required:true,
        ref:'Product'
        }
    ],
    completedOrder:[
        {
            type:Schema.Types.ObjectId,
            ref:'Order'
        }
    ],
    userType:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports= mongoose.model('User', User);