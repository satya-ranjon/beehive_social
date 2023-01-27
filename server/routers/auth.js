import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  console.log("auth");
});

export default router;
