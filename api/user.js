const express = require("express");
let router = express.Router();

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

/* GET USER */
router.get("/user", (req, res) => {
  res.send();
});

/* POST USER */
router.post("/user", (req, res) => {
  res.send({ type: "POST", endpoint: "user" });
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
