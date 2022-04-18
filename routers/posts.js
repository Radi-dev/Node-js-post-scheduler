"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const posts = require("../models/posts");
const router = express.Router();
const Posts = require("../models/posts");
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Posts.find();
        res.json(posts);
    }
    catch (err) {
        res.send("Error " + err);
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Posts.findById(req.params.id);
        res.json(posts);
    }
    catch (err) {
        res.send("Error " + err);
    }
}));
router.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Posts.findById(req.params.id);
        posts.title = yield req.body.title;
        const data = posts.save();
        res.json(posts);
    }
    catch (err) {
        res.send("Error " + err);
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Posts.findById(req.params.id);
        posts.title = yield req.body.title;
        const data = posts.remove();
        res.json(posts);
    }
    catch (err) {
        res.send("Error " + err);
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = new posts({
        //req.body
        title: req.body.title,
        body: req.body.body,
        published: req.body.published,
        slug: req.body.slug,
    });
    try {
        const data = yield post.save();
        res.json(data);
    }
    catch (err) {
        res.send("Error " + err);
    }
}));
module.exports = router;
