const { toTitleCase, validateEmail } = require("../config/function");
const bcrypt = require("bcryptjs");
const userModel = require("../models/users");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

//Xử lý đăng nhập / đăng ký
class Auth {
  /* Kiểm tra đăng nhập */
  // Kiểm tra role
  async isAdmin(req, res) {
    let { loggedInUserId } = req.body;
    try {
      let loggedInUserRole = await userModel.findById(loggedInUserId);
      res.json({ role: loggedInUserRole.userRole });
    } catch {
      res.status(404);
    }
  }
  // Kiểm tra xem có tài khoản chưa
  async allUser(req, res) {
    try {
      let allUser = await userModel.find({});
      res.json({ users: allUser });
    } catch {
      res.status(404);
    }
  }

  /* Kiểm tra đăng ký tài khoản  */
  async postSignup(req, res) {
    let { name, email, password, cPassword } = req.body;
    let error = {};

    // Không để trống
    if (!name || !email || !password || !cPassword) {
      error = {
        ...error,
        name: "Không được để trống",
        email: "Không được để trống",
        password: "Không được để trống",
        cPassword: "Không được để trống",
      };
      return res.json({ error });
    }

    // Kiểm tra độ dài kí tự + mật khẩu + email 
    if (name.length < 3 || name.length > 25) {
      error = { ...error, name: "Họ tên từ 3-25 ký tự" };
      return res.json({ error });
    } else {
      if (validateEmail(email)) {
        name = toTitleCase(name);
        // Kiểm tra mật khẩu
        if ((password.length > 255) | (password.length < 8)) {
          error = {
            ...error,
            password: "Password phải nhiều hơn 8 ký tự",
            name: "",
            email: "",
          };
          return res.json({ error });
        } else {
          // Kiểm tra email đã tồn tại trong DB chưa:
          try {
            password = bcrypt.hashSync(password, 10);
            const data = await userModel.findOne({ email: email });
            if (data) {
              error = {
                ...error,
                password: "",
                name: "",
                email: "Email đã tồn tại",
              };
              return res.json({ error });
            } else {
              let newUser = new userModel({
                name,
                email,
                password,
                
              });
              newUser
                .save()
                .then((data) => {
                  return res.json({
                    success: "Tạo tài khoản thành công. Bạn hãy đăng nhập",
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          } catch (err) {
            console.log(err);
          }
        }
      } else {
        error = {
          ...error,
          password: "",
          name: "",
          email: "Email không hợp lệ",
        };
        return res.json({ error });
      }
    }
  }

  /* Kiểm tra đăng nhập */
  async postSignin(req, res) {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        error: "Không được để trống",
      });
    }
    try {
      const data = await userModel.findOne({ email: email });
      if (!data) {
        return res.json({
          error: "Email hoặc mật khẩu không hợp lệ",
        });
      } else {
        const login = await bcrypt.compare(password, data.password);
        if (login) {

          const token = jwt.sign(
            { _id: data._id, role: data.userRole },
            JWT_SECRET
          );

          const encode = jwt.verify(token, JWT_SECRET);

          return res.json({
            token: token,
            user: encode,
          });
        } else {
          return res.json({
            error: "Email hoặc mật khẩu không hợp lệ",
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

const authController = new Auth();
module.exports = authController;
