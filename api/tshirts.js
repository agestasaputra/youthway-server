const express = require("express");
let router = express.Router();

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

/* GET TSHIRT */
router.get("/tshirt", (req, res) => {
  res.send({ type: "GET", endpoint: "tshirt" });
});

/* POST TSHIRT */
router.post("/tshirt", (req, res) => {
  res.send({ type: "POST", endpoint: "tshirt" });
});

/* PUT TSHIRT */
router.put("/tshirt/:id", (req, res) => {
  res.send({ type: "PUT", endpoint: "tshirt" });
});

/* PATCH TSHIRT */
router.patch("/tshirt/:id", (req, res) => {
  res.send({ type: "PATCH", endpoint: "tshirt" });
});

/* DELETE TSHIRT */
router.delete("/tshirt/:id", (req, res) => {
  res.send({ type: "DELETE", endpoint: "tshirt" });
});

module.exports = router;
