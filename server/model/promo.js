const mongoose = require("mongoose");

const promoSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please enter your promo product name!"],
    },
    description:{
        type: String,
        required:[true,"Please enter your promo product description!"],
    },
    category:{
        type: String,
        required:[true,"Please enter your promo product category!"],
    },
    start_Date: {
        type: Date,
        required: true,
      },
      Finish_Date: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        default: "Running",
      },
    tags:{
        type: String,
    },
    originalPrice:{
        type: Number,
    },
    discountPrice:{
        type: Number,
        required: [true,"Please enter your promo product price!"],
    },
    stock:{
        type: Number,
        required: [true,"Please enter your promo product stock!"],
    },
    images:[
        {
            type: String,
        },
    ],
    shopId:{
        type: String,
        required: true,
    },
    shop:{
        type: Object,
        required: true,
    },
    sold_out:{
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Promo", promoSchema);