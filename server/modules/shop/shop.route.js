const express = require("express");
const router = express.Router();
const { isAuthenticated, isSeller } = require("../middleware/auth");
const { upload } = require("../../multer");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const {
  createShop,
  activation,
  getSeller,
  logout,
  getShopInfo,
  loginShop
} = require("../controller/shop");

router.post("/create-shop", upload.single("file"), createShop);
router.post("/activation", catchAsyncErrors(activation));
router.get("/getSeller", isSeller, catchAsyncErrors(getSeller));
router.get("/logout", catchAsyncErrors(logout));
router.get("/get-shop-info/:id", catchAsyncErrors(getShopInfo));
router.post("/login-shop", catchAsyncErrors(loginShop));

module.exports = router;
