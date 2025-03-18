const express = require("express");
const { getAllPosts, getSinglePost, createPost, updatePost, deletePost } = require("../controllers/postControllers");

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
