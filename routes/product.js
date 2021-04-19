const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// add Product
router.post("/addproduct", (req, res) => {
  let { name, price, quantity } = req.body;
  price = price + "$";

  const product = new Product({ name, price, quantity });
  product
    .save()
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
});

// get all product
router.get("/allproduct", (req, res) => {
  Product.find()
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
});

//Delete product
router.delete("/deleteproduct/:_id", (req, res) => {
  const _id = req.params._id;

  Product.findOneAndDelete({ _id })
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
});

// edit product
router.put("/editproduct/:_id", (req, res) => {
  let { name, price, quantity } = req.body;
  const _id = req.params._id;
  price = price + "$";

  Product.findOneAndUpdate(
    { _id },
    { $set: { name, price, quantity } },
    { new: true }
  )
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
});

module.exports = router;
