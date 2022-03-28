const express = require("express");
const posts = require("../models/posts");
const router = express.Router();
const Posts = require("../models/posts");

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const posts = await Posts.findById(req.params.id);
    res.json(posts);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const posts = await Posts.findById(req.params.id);
    posts.title = await req.body.title;
    const data = posts.save();
    res.json(posts);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const posts = await Posts.findById(req.params.id);
    posts.title = await req.body.title;
    const data = posts.remove();
    res.json(posts);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.post("/", async (req, res) => {
  const post = new posts({
    //req.body
    title: req.body.title,
    body: req.body.body,
    published: req.body.published,
    slug: req.body.slug,
  });
  try {
    const data = await post.save();
    res.json(data);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
