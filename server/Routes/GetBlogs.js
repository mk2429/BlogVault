const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/getblogs",async (req,res)=>{
    try{
        const blogCollection = await mongoose.connection.db.collection("blogs");
        const data = await blogCollection.find({}).toArray();


    res.send(data)
    }catch(err){
        console.log(err)
        res.send("Server Error Cant find Blogs")
    }
    })
    module.exports=router