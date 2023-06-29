const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/updateblog", async (req, res) => {
    try {
        const blogCollection = await mongoose.connection.db.collection("blogs");
        const id = new mongoose.Types.ObjectId(req.body.id); 
        const data = await blogCollection.updateOne({ _id:id },{ $set: { description :req.body.description} });
       

        res.json({success:true})
    } catch (err) {
        console.log(err)
        res.send("Server Error Cant update blog")
    }
})
module.exports = router