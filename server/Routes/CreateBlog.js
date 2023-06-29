const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  author:String,
  image: {
    data: Buffer,
    contentType: String,
  },
});
const blogModel = mongoose.model("blog", blogSchema);

router.post("/createblog", upload.single("image"), async (req, res) => {
  try {
    const { title, description,author } = req.body;
    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };

    await blogModel.create({
      title,
      description,
      author,
      image,
    });

    res.json({ success: true });
  } catch (err) {
    console.log("Error from CreateBlog", err);
    res.json({ success: false });
  }
});

module.exports = router;
