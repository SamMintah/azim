
const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const {Login,Logout} = require("./auth");

const router = express.Router();


router.post("/login-user", catchAsyncErrors(Login));
router.get("/logout", catchAsyncErrors(Logout));

module.exports = router;
