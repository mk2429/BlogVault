const mongoose = require("mongoose");
const mongodb=async ()=>{
    await mongoose.connect("mongodb+srv://mayank20429:Mayank%4024@cluster0.0zlqvfv.mongodb.net/blog")
    console.log("db Connected")
}
module.exports = mongodb;
