const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/deleteblog", async (req, res) => {
    try {
        const blogCollection = await mongoose.connection.db.collection("blogs");
        const id = new mongoose.Types.ObjectId(req.body.id); 
        const data = await blogCollection.deleteOne({ _id:id })
        res.json({ success: true })
        
    } catch (err) {
        console.log(err)
        res.send("Server Error Cant delete blog")
    }
})
module.exports = router