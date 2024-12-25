// res.sendFile(path.join(__dirname, 'views', 'regular.html'))

// const express = require("express");
// const router = express.Router();

// const auth = (req, res, next) => {
//   console.log("inside the auth");

//   req.user = { userId: 1, role: "admin" };
//   if (req.user) {
//     //if a valid user in req, then procced to the next middleware
//     next();
//   } else {
//     res.json({ success: false, message: "Not a valid user" });
//   }
// };

// const isStudent = (req, res, next) => {
//   console.log("inside the isStudent");
//   if (req.user.role === "student") {
//     next();
//   } else {
//     res.json({
//       success: false,
//       message: "access denied, this route only for students",
//     });
//   }
// };

// const isAdmin = (req, res, next) => {
//   console.log("inside the isAdmin");
//   if (req.user.role === "admin") {
//     next();
//   } else {
//     res.json({
//       success: false,
//       message: "access denied, this route only for Admin",
//     });
//   }
// };

// router.get("/student", auth, isStudent, (req, res) => {
//   console.log("Inside the student route");
//   res.send("Student Page");
// });

// router.get("/admin", auth, isAdmin, (req, res) => {
//   console.log("Inside the Admin route");
//   res.send("Admin Page");
// });

const express = require("express");
const app = express();
const router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Request URL:", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log("Request Type:", req.method);
    next();
  }
);

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get(
  "/user/:id",
  (req, res, next) => {
    // if the user ID is 0, skip to the next router
    if (req.params.id === "0") next("route");
    // otherwise pass control to the next middleware function in this stack
    else next();
  },
  (req, res, next) => {
    // render a regular page
    res.send("regular");
  }
);

// handler for the /user/:id path, which renders a special page
router.get("/user/:id", (req, res, next) => {
  console.log(req.params.id);
  res.send("special");
});

module.exports = router;
