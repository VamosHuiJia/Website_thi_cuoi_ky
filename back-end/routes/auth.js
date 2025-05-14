const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const { loginCheck, isAuth, isAdmin } = require("../middleware/auth");

//Kiểm tra role
router.post("/isadmin", authController.isAdmin);

//Kiểm tra đăng ký
router.post("/signup", authController.postSignup);

//Kiểm tra đăng nhập
router.post("/signin", authController.postSignin);

//Lấy danh sách user
router.post("/user", loginCheck, isAuth, isAdmin, authController.allUser);

module.exports = router;
