const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const userModel = require("../models/users");

// Kiểm tra xem người dùng đã đăng nhập chưa
exports.loginCheck = (req, res, next) => {
  try {
    let token = req.headers.token;
    token = token.replace("Bearer ", "");
    decode = jwt.verify(token, JWT_SECRET);
    req.userDetails = decode;
    next();
  } catch (err) {
    res.json({
      error: "Bạn phải đăng nhập",
    });
  }
};

// Kiểm tra xem người dùng có được xác thực
exports.isAuth = (req, res, next) => {
  let { loggedInUserId } = req.body;
  if (
    !loggedInUserId ||
    !req.userDetails._id ||
    loggedInUserId != req.userDetails._id
  ) {
    res.status(403).json({ error: "Bạn chưa xác thực" });
  }
  next();
};

// Kiểm tra phân quyền
exports.isAdmin = async (req, res, next) => {
  try {
    let reqUser = await userModel.findById(req.body.loggedInUserId);
    
    if (reqUser.userRole === 0) {
      res.status(403).json({ error: "Quyền truy cập bị từ chối" });
    }
    next();
  } catch {
    res.status(404);
  }
};
