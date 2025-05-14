const express = require("express");
const router = express.Router();
const ordersController = require("../controller/orders");

// Lấy danh sách tất cả đơn hàng.
router.get("/get-all-orders", ordersController.getAllOrders);

// Lấy danh sách đơn hàng của một người dùng.
router.post("/order-by-user", ordersController.getOrderByUser);

// Tạo đơn hàng mới.
router.post("/create-order", ordersController.postCreateOrder);

// Cập nhật trạng thái đơn hàng.
router.post("/update-order", ordersController.postUpdateOrder);

// Xóa đơn hàng.
router.post("/delete-order", ordersController.postDeleteOrder);

module.exports = router;
