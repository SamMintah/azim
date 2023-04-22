const Shop = require("../model/shop");
const ErrorHandler = require("../utils/ErrorHandler");
const CoupounCode = require("../model/coupounCode");

// create coupoun code
const createCoupoun = async (req, res, next) => {
    try {
        const isCoupounCodeExists = await CoupounCode.find({
            name: req.body.name,
        });

        if (isCoupounCodeExists.length !== 0) {
            return next(new ErrorHandler("Coupoun code already exists!", 400));
        }

        const coupounCode = await CoupounCode.create(req.body);

        res.status(201).json({
            success: true,
            coupounCode,
        });
    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
};

// get all coupons of a shop
const getCoupouns = async (req, res, next) => {
    try {
        const couponCodes = await CoupounCode.find({ shopId: req.seller.id });
        res.status(201).json({
            success: true,
            couponCodes,
        });
    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
};

// delete coupoun code of a shop
const deleteCoupoun = async (req, res, next) => {
    try {
      const couponCode = await CoupounCode.findByIdAndDelete(req.params.id);

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
    createCoupoun,
    getCoupouns,
    deleteCoupoun,
};
