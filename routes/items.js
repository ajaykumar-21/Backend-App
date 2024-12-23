const { default: _default } = require("@emotion/styled");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ Message: "Hello my first backend program" });
});

router.post("/items/", (req, res) => {
  res
    .status(201)
    .header({ "content-Type": "application/HTML" })
    .json({ message: "Request working fine" });
});

router.put("/items/:id", (req, res) => {
  res.json({ message: "Put request" });
});

router.delete("/items/:id", (req, res) => {
  res.send("Hello, delete Request");
});

module.exports = router;
