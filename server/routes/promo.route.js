const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { upload } = require("../multer");
const { createPromo ,deletePromo,getAllPromos, getAllpromoOfShop} = require("../controller/promo");
const { isSeller } = require("../middleware/auth");

const router = express.Router();
router.post(
  "/create-promo",
  upload.array("images"),
  catchAsyncErrors(createPromo)
);
router.delete("/delete-shop-promo/:id", isSeller, catchAsyncErrors(deletePromo));
router.get("/get-all-promos",getAllPromos);
router.get("/get-all-promos/:id", catchAsyncErrors(getAllpromoOfShop));


module.exports = router;