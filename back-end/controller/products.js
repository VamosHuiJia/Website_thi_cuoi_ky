const productModel = require("../models/products");
const fs = require("fs");
const path = require("path");

class Product {
  // Hàm tĩnh để xóa ảnh
  static deleteImages(images, mode) {
    var basePath =
      path.resolve(__dirname + "../../") + "/public/uploads/products/";
    console.log(basePath);
    for (var i = 0; i < images.length; i++) {
      let filePath = "";
      if (mode == "file") {
        filePath = basePath + `${images[i].filename}`;
      } else {
        filePath = basePath + `${images[i]}`;
      }
      console.log(filePath);
      if (fs.existsSync(filePath)) {
        console.log("Hình ảnh đã tồn tại");
      }
      fs.unlink(filePath, (err) => {
        if (err) {
          return err;
        }
      });
    }
  }

  // Lấy danh sách tất cả sản phẩm
  async getAllProduct(req, res) {
    try {
      let Products = await productModel
        .find({})
        .populate("pCategory", "_id cName")
        .sort({ _id: -1 });
      if (Products) {
        return res.json({ Products });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Thêm sản phẩm mới
  async postAddProduct(req, res) {
    let { pName, pDescription, pPrice, pQuantity, pCategory, pOffer, pStatus } =
      req.body;
    let images = req.files;
    // Kiểm tra rỗng
    if (
      !pName |
      !pDescription |
      !pPrice |
      !pQuantity |
      !pCategory |
      !pOffer |
      !pStatus
    ) {
      Product.deleteImages(images, "file");
      return res.json({ error: "Tất cả phải được điền đầy đủ" });
    }
    // Kiểm tra độ dài
    else if (pName.length > 255 || pDescription.length > 3000) {
      Product.deleteImages(images, "file");
      return res.json({
        error: "Tên không quá 255 ký tự & Mô tả không được dài quá 3000 ký tự",
      });
    }
    // Kiểm tra ảnh
    else if (images.length !== 2) {
      Product.deleteImages(images, "file");
      return res.json({ error: "Phải cung cấp 2 hình ảnh" });
    } else {
      try {
        let allImages = [];
        for (const img of images) {
          allImages.push(img.filename);
        }
        let newProduct = new productModel({
          pImages: allImages,
          pName,
          pDescription,
          pPrice,
          pQuantity,
          pCategory,
          pOffer,
          pStatus,
        });
        let save = await newProduct.save();
        if (save) {
          return res.json({ success: "Sản phẩm được tạo thành công" });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  // Sửa sản phẩm
  async postEditProduct(req, res) {
    let {
      pId,
      pName,
      pDescription,
      pPrice,
      pQuantity,
      pCategory,
      pOffer,
      pStatus,
      pImages,
    } = req.body;
    let editImages = req.files;

    // Kiểm tra rỗng
    if (
      !pId |
      !pName |
      !pDescription |
      !pPrice |
      !pQuantity |
      !pCategory |
      !pOffer |
      !pStatus
    ) {
      return res.json({ error: "Tất cả phải điền đầy đủ" });
    }
    // Kiểm tra độ dài
    else if (pName.length > 255 || pDescription.length > 3000) {
      return res.json({
        error: "Tên không quá 255 ký tự & Mô tả không được dài quá 3000 ký tự",
      });
    }
    // Kiểm tra ảnh
    else if (editImages && editImages.length == 1) {
      Product.deleteImages(editImages, "file");
      return res.json({ error: "Phải cung cấp 2 hình ảnh" });
    } else {
      let editData = {
        pName,
        pDescription,
        pPrice,
        pQuantity,
        pCategory,
        pOffer,
        pStatus,
      };
      if (editImages.length == 2) {
        let allEditImages = [];
        for (const img of editImages) {
          allEditImages.push(img.filename);
        }
        editData = { ...editData, pImages: allEditImages };
        Product.deleteImages(pImages.split(","), "string");
      }
      try {
        let editProduct = productModel.findByIdAndUpdate(pId, editData);
        editProduct.exec((err) => {
          if (err) console.log(err);
          return res.json({ success: "Sản phẩm được tạo thành công" });
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  // Xóa sản phẩm
  async getDeleteProduct(req, res) {
    let { pId } = req.body;
    if (!pId) {
      return res.json({ error: "Tất cả phải điền đầy đủ" });
    } else {
      try {
        let deleteProductObj = await productModel.findById(pId);
        let deleteProduct = await productModel.findByIdAndDelete(pId);
        if (deleteProduct) {
          Product.deleteImages(deleteProductObj.pImages, "string");
          return res.json({ success: "Xóa sản phẩm thành công" });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  // Lấy thông tin chi tiết một sản phẩm
  async getSingleProduct(req, res) {
    let { pId } = req.body;
    if (!pId) {
      return res.json({ error: "Tất cả phải điền đầy đủ" });
    } else {
      try {
        let singleProduct = await productModel
          .findById(pId)
          .populate("pCategory", "cName")
          .populate("pRatingsReviews.user", "name email userImage");
        if (singleProduct) {
          return res.json({ Product: singleProduct });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  // Lọc sản phẩm theo danh mục
  async getProductByCategory(req, res) {
    let { catId } = req.body;
    if (!catId) {
      return res.json({ error: "Tất cả phải điền đầy đủ" });
    } else {
      try {
        let products = await productModel
          .find({ pCategory: catId })
          .populate("pCategory", "cName");
        if (products) {
          return res.json({ Products: products });
        }
      } catch (err) {
        return res.json({ error: "Lỗi tìm sản phẩm" });
      }
    }
  }

  // Lọc sản phẩm theo giá
  async getProductByPrice(req, res) {
    let { price } = req.body;
    if (!price) {
      return res.json({ error: "Tất cả phải điền đầy đủ" });
    } else {
      try {
        let products = await productModel
          .find({ pPrice: { $lt: price } }) //Price là number
          .populate("pCategory", "cName")
          .sort({ pPrice: -1 });
        if (products) {
          return res.json({ Products: products });
        }
      } catch (err) {
        return res.json({ error: "Lỗi lọc sản phẩm" });
      }
    }
  }

  // Lấy sản phẩm trong danh sách yêu thích
  async getWishProduct(req, res) {
    let { productArray } = req.body;
    if (!productArray) {
      return res.json({ error: "Tất cả phải được điền đầy đủ" });
    } else {
      try {
        let wishProducts = await productModel.find({
          _id: { $in: productArray },
        });
        if (wishProducts) {
          return res.json({ Products: wishProducts });
        }
      } catch (err) {
        return res.json({ error: "Bộ lọc sai" });
      }
    }
  }

  // Lấy sản phẩm trong giỏ hàng
  async getCartProduct(req, res) {
    let { productArray } = req.body;
    if (!productArray) {
      return res.json({ error: "Tất cả phải được điền đầy đủd" });
    } else {
      try {
        let cartProducts = await productModel.find({
          _id: { $in: productArray },
        });
        if (cartProducts) {
          return res.json({ Products: cartProducts });
        }
      } catch (err) {
        return res.json({ error: "Lỗi giỏ hàng" });
      }
    }
  }



  //============================================== Lỗi ============================================== //
  // Lỗi 
  async postAddReview(req, res) {
    let { pId, uId, rating, review } = req.body;
    if (!pId || !rating || !review || !uId) {
      return res.json({ error: "Tất cả phải được điền đầy đủ" });
    } else {
      let checkReviewRatingExists = await productModel.findOne({ _id: pId });
      if (checkReviewRatingExists.pRatingsReviews.length > 0) {
        checkReviewRatingExists.pRatingsReviews.map((item) => {
          if (item.user === uId) {
            return res.json({ error: "Bạn đã đánh giá sản phẩm" });
          } else {
            try {
              let newRatingReview = productModel.findByIdAndUpdate(pId, {
                $push: {
                  pRatingsReviews: {
                    review: review,
                    user: uId,
                    rating: rating,
                  },
                },
              });
              newRatingReview.exec((err, result) => {
                if (err) {
                  console.log(err);
                }
                return res.json({ success: "Cảm ơn đánh giá của bạn" });
              });
            } catch (err) {
              return res.json({ error: "Giỏ hàng lỗi" });
            }
          }
        });
      } else {
        try {
          let newRatingReview = productModel.findByIdAndUpdate(pId, {
            $push: {
              pRatingsReviews: { review: review, user: uId, rating: rating },
            },
          });
          newRatingReview.exec((err, result) => {
            if (err) {
              console.log(err);
            }
            return res.json({ success: "Cảm ơn đánh giá của bạn" });
          });
        } catch (err) {
          return res.json({ error: "Giỏ hàng lỗi" });
        }
      }
    }
  }

  //Lỗi 
  async deleteReview(req, res) {
    let { rId, pId } = req.body;
    if (!rId) {
      return res.json({ message: "Tất cả phải được điền đầy đủ" });
    } else {
      try {
        let reviewDelete = productModel.findByIdAndUpdate(pId, {
          $pull: { pRatingsReviews: { _id: rId } },
        });
        reviewDelete.exec((err, result) => {
          if (err) {
            console.log(err);
          }
          return res.json({ success: "Đã xóa đánh giá" });
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
}


const productController = new Product();
module.exports = productController;
