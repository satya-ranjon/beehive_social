import express from "express";
import { verifyToken } from "../middleware/auth";
import {
  createPost,
  getFeedPosts,
  getUserPosts,
  likedPost,
} from "../controllers/posts.js";
import uploadFile from "../middleware/uploadFile";

const router = express.Router();

/** CREATE */
router.post("/", verifyToken, uploadFile("picture"), createPost);

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likedPost);

export default router;
