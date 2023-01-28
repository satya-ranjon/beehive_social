import express from "express";
import { login, register } from "../controllers/auth.js";
import uploadFile from "../middleware/uploadFile.js";

const router = express.Router();

router.post("/register", uploadFile.single("picture"), register);
router.post("/login", login);

export default router;
