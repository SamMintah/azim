const express = require("express");
const { isSeller } = require("../middleware/auth");
const {
  createCoupoun,
  deleteCoupoun,
  getCoupouns,
} = require("../controller/coupounCode");
const router = express.Router();

router.post("/create-coupon-code", isSeller, catchAsyncErrors(createCoupoun));
router.get("/get-coupon/:id", isSeller, catchAsyncErrors(getCoupouns));
router.delete("/delete-coupon/:id", isSeller, catchAsyncErrors(deleteCoupoun));

module.exports = router;
