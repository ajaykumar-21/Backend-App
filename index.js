const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello my first backend program");
});

app.post("/items/", (req, res) => {
  res.json({ Post: "Hello, Post Request" });
});

app.put("/items/:id", (req, res) => {
  res.send("Hello, Put Request");
});

app.delete("/items/:id", (req, res) => {
  res.send("Hello, delete Request");
});

app.listen(PORT, () => {
  console.log(`This application listening on port ${PORT}`);
});
