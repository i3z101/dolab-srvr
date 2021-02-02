const express= require('express');
const app= express();
const mongoose= require('mongoose');

const DB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@nodeapp.mm7yd.mongodb.net/${process.env.MONGO_DATABASE}`;

const connectionDB= async()=>{
    const connectionDB= await mongoose.connect(DB_URL, {useNewUrlParser:true, useUnifiedTopology:true});
    if(!connectionDB){
        console.log("Error in connection");
        return;
    }
    app.listen(8080);
}

connectionDB();

