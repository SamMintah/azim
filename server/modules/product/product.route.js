const express = require("express");
const { isSeller } = require("../middleware/auth");
const {
  getProducts,
  deleteProduct,
  createProduct,
  getProduct,
} = require("../controller/product");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { upload } = require("../../multer");

const router = express.Router();

router.post(
  "/create-product",
  upload.array("images"),
  catchAsyncErrors(createProduct)
);
router.get("/get-all-products", catchAsyncErrors(getProducts));
router.delete(
  "/delete-shop-product/:id",
  isSeller,
  catchAsyncErrors(deleteProduct)
);
router.get("/get-all-products-shop/:id", catchAsyncErrors(getProduct));

module.exports = router;
