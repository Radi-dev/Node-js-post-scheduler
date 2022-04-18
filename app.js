"use strict";
var _a;
//const db = require("./db");
const express = require("express");
const mongoose = require("mongoose");
const posts = require("./routers/posts");
const app = express();
app.use(express.json());
let data = { "name": { a: '55yy radi', b: "hhdjd" }, getTime: () => ({ date: '2022' }) };
const datar = data;
class Post {
    constructor(postTitle, postBody) {
        this.title = postTitle;
        this.body = postBody;
    }
    getPost() {
        return ({ title: this.title, body: this.body });
    }
}
const post1 = new Post("I am post1 title", "I amthe amazing body of post 1");
console.log((_a = post1.getPost()) === null || _a === void 0 ? void 0 : _a.body, "dataaar");
const dataf = (aa) => ({ name: '500tfuytu ', getTime() { return new Date(); } });
mongoose.connect("mongodb://localhost/post-scheduler", {
    useNewUrlParser: true,
});
const con = mongoose.connection;
con.on("open", () => console.log("connected mongoose"));
app.get("/", (req, res) => {
    res.send(data["name"] + res.statusCode + ' ' + dataf().getTime());
    console.log("getted");
});
app.use("/posts", posts);
//console.log(db.con.posts.find("_id"));
app.listen(9000, () => console.log("server running at 9000 using Ts", data));
