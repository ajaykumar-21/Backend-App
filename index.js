const express = require("express");
const app = express();
const PORT = 3000;

const items = require("./routes/items");
const birds = require("./routes/birds");

app.use("/api", items);
app.use("/bird", birds);

// app.get("/", (req, res) => {
//   res.json({ Message: "Hello my first backend program" });
// });

// app.post("/items/", (req, res) => {
//   res
//     .status(201)
//     .header({ "content-Type": "application/HTML" })
//     .json({ message: "Request working fine" });
// });

// app.put("/items/:id", (req, res) => {
//   res.sendFile("./index.html", { root: __dirname });
// });

// app.delete("/items/:id", (req, res) => {
//   res.send("Hello, delete Request");
// });

app.listen(PORT, () => {
  console.log(`This application listening on port ${PORT}`);
});
