const Shop = require("../model/shop");
const ErrorHandler = require("../utils/ErrorHandler");
const couponCode = require("../model/couponCode");

// create coupoun code
const createCoupon = async (req, res, next) => {
    try {
        const iscouponCodeExists = await couponCode.find({
            name: req.body.name,
        });

        if (iscouponCodeExists.length !== 0) {
            return next(new ErrorHandler("Coupoun code already exists!", 400));
        }

        const couponCode = await couponCode.create(req.body);

        res.status(201).json({
            success: true,
            couponCode,
        });
    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
};

// get all coupons of a shop
const getCoupons = async (req, res, next) => {
    try {
        const couponCodes = await couponCode.find({ shopId: req.seller.id });
        res.status(201).json({
            success: true,
            couponCodes,
        });
    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
};

// delete coupoun code of a shop
const deleteCoupon = async (req, res, next) => {
    try {
      const couponCode = await couponCode.findByIdAndDelete(req.params.id);

      if (!couponCode) {
        return next(new ErrorHandler("Coupon code dosen't exists!", 400));
      }
      res.status(201).json({
        success: true,
        message: "Coupon code deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
}
  

module.exports = {
    createCoupon,
    getCoupons,
    deleteCoupon,
};
