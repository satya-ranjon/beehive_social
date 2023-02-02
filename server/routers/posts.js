import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  createPost,
  getFeedPosts,
  getUserPosts,
  likedPost,
} from "../controllers/posts.js";
import uploadFile from "../middleware/uploadFile.js";

const router = express.Router();

/** CREATE */
router.post("/", verifyToken, uploadFile.single("picture"), createPost);

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likedPost);

export default router;
