const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "Title",
  },
  slug: {
    type: String,
  },
  body: {
    type: String,
    required: true,
    default: "Body",
  },
  published: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Posts", postSchema);
