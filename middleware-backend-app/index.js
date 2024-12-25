const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const route = require("./routes/route");
//Mounting the route
app.use("/", route);

// const auth = (req, res, next) => {
//   console.log("Under the Auth");
//   next();
// };

// const validate = (req, res, next) => {
//   console.log("Under the Validate");
//   res.send("hello, under the validate");
// //   next();
// };

// app.use(auth);
// app.use(validate);

// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("hello");
//     next();
//   },
//   (req, res) => {
//     res.send(
//       `<div>
//                 <h2>Welcome to GeeksforGeeks</h2>
//                 <h5>Tutorial on Middleware</h5>
//             </div>`
//     );
//   }
// );

app.listen(PORT, () => {
  console.log(`This application listening on port ${PORT}`);
});
