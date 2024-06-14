import express from "express";

const router = express.Router();

router.get("/", function (req, res, next) {
  return res.status(200).send("Hello");
});

export default router;
