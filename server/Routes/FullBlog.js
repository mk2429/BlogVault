const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/fullblog", async (req, res) => {
    try {
        const blogCollection = await mongoose.connection.db.collection("blogs");
        const id = new mongoose.Types.ObjectId(req.body.id); 
        const data = await blogCollection.find({ _id:id }).toArray();
      


        res.send(data)
    } catch (err) {
        console.log(err)
        res.send("Server Error Cant find full blog")
    }
})
module.exports = router