const express = require("express");
const { upload } = require("../../multer");
const { createUser, acitveUser } = require("../controller/user");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { isAuthenticated } = require("../middleware/auth");

router.post("/create-user", upload.single("file"), createUser);
router.post("/activation", catchAsyncErrors(acitveUser));
router.get("/getuser", isAuthenticated, catchAsyncErrors());


module.exports = router;

