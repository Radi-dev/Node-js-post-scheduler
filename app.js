//const db = require("./db");
const express = require("express");
const mongoose = require("mongoose");
const posts = require("./routers/posts");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/post-scheduler", {
  useNewUrlParser: true,
});
const con = mongoose.connection;
con.on("open", () => console.log("connected mongoose"));

app.get("/", (req, res) => {
  res.send("Working with status code " + res.statusCode);
  console.log("getted");
});
app.use("/posts", posts);
//console.log(db.con.posts.find("_id"));
app.listen(9000, () => console.log("server running at 9000"));
