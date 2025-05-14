const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categories");
const multer = require("multer");
const { loginCheck } = require("../middleware/auth");

// Thiết lập lưu trữ ảnh
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/categories");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Lấy danh sách tất cả danh mục.
router.get("/all-category", categoryController.getAllCategory);

// Thêm danh mục mới.
router.post(
  "/add-category",
  loginCheck,
  upload.single("cImage"),
  categoryController.postAddCategory
);

// Sửa danh mục.
router.post("/edit-category", loginCheck, categoryController.postEditCategory);

// Xóa danh mục.
router.post(
  "/delete-category",
  loginCheck,
  categoryController.getDeleteCategory
);

module.exports = router;
