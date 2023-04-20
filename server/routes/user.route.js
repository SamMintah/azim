const express = require("express");
const { upload } = require("../multer");
const { createUser, acitveUser } = require("../controller/user");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { isAuthenticated } = require("../middleware/auth");

router.post("/create-user", upload.single("file"), createUser);
router.post("/activation", catchAsyncErrors(acitveUser));
router.post("/login-user", catchAsyncErrors());
router.get("/getuser", isAuthenticated, catchAsyncErrors());
router.get("/logout", catchAsyncErrors());


module.exports = router;

