const express = require("express");
const router = express.Router();
const customizeController = require("../controller/customize");
const multer = require("multer");

// Thiết lập lưu trữ ảnh
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/customize");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Lấy danh sách hình ảnh slide.
router.get("/get-slide-image", customizeController.getImages);

// Xóa hình ảnh slide.
router.post("/delete-slide-image", customizeController.deleteSlideImage);

// Upload hình ảnh slide mới.
router.post(
  "/upload-slide-image",
  upload.single("image"),
  customizeController.uploadSlideImage
);

// Lấy dữ liệu cho dashboard
router.post("/dashboard-data", customizeController.getAllData);

module.exports = router;
