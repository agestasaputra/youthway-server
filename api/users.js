const express = require("express");
const router = express.Router();
const Users = require("../model/users");

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

/* GET USER */
router.get("/user", (req, res) => {
  res.send({ type: "GET", endpoint: "user" });
});

/* POST USER */
router.post("/user", (req, res) => {
  // let users = new Users(req.body);
  // users.save();
  Users.create(req.body).then(result => res.send(result));
  // res.send({ type: "POST", body: req.body });
});

/* PUT USER */
router.put("/user/:id", (req, res) => {
  res.send({ type: "PUT", endpoint: "user" });
});

/* PATCH USER */
router.patch("/user/:id", (req, res) => {
  res.send({ type: "PATCH", endpoint: "user" });
});

/* DELETE USER */
router.delete("/user/:id", (req, res) => {
  res.send({ type: "DELETE", endpoint: "user" });
});

module.exports = router;
