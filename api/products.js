const express = require("express");
const router = express.Router();
const Products = require("../model/products");

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

/* GET PRODUCT */
router.get("/product", (req, res) => {
  res.send({ type: "GET", endpoint: "product" });
});

/* POST PRODUCT */
router.post("/product", (req, res) => {
  Products.create(req.body).then(result => {
    console.log("cek result:", result);
    res.send(result);
  });
  // res.send({ type: "POST", endpoint: "product" });
});

/* PUT PRODUCT */
router.put("/product/:id", (req, res) => {
  res.send({ type: "PUT", endpoint: "product" });
});

/* PATCH PRODUCT */
router.patch("/product/:id", (req, res) => {
  res.send({ type: "PATCH", endpoint: "product" });
});

/* DELETE PRODUCT */
router.delete("/product/:id", (req, res) => {
  res.send({ type: "DELETE", endpoint: "product" });
});

module.exports = router;
