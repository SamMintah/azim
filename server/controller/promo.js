
const Shop = require("../model/shop");
const Promo = require("../model/promo");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");

// create promo
const createPromo = async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop Id is invalid!", 400));
      } else {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);

        const promoData = req.body;
        promoData.images = imageUrls;
        promoData.shop = shop;

        const product = await Promo.create(promoData);

        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }

// get all promos
const getAllPromos = async (req, res, next) => {
  try {
    const promos = await Promo.find();
    res.status(201).json({
      success: true,
      promos,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
}

// get all promos of a shop
const getAllpromoOfShop = async (req, res, next) => {
    try {
        const promos = await Promo.find({ shopId: req.params.id });

        res.status(201).json({
            success: true,
            promos,
        });
    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
};


// delete promo of a shop
const deletePromo = async (req, res, next) => {
    try {
      const productId = req.params.id;

      const promotData = await Promo.findById(productId);

      promotData.images.forEach((imageUrl) => {
        const filename = imageUrl;
        const filePath = `uploads/${filename}`;

        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          }
        });
      });

      const promo = await Promo.findByIdAndDelete(productId);

      if (!promo) {
        return next(new ErrorHandler("promo not found with this id!", 500));
      }

      res.status(201).json({
        success: true,
        message: "promo Deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }

module.exports = {
    createPromo,
    getAllPromos,
    getAllpromoOfShop,
    deletePromo
};
