import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <div className="container" style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
  <div className="row">
    <div className="blog-outer-container">
      <div className="block-title" style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "28px", color: "#333", textTransform: "uppercase", fontWeight: "bold" }}>KIẾN THỨC KINH NGHIỆM</h2>
      </div>
      <div className="blog-inner" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div className="col-lg-6 col-md-6 col-sm-6" style={{ flex: "1", maxWidth: "48%", boxSizing: "border-box" }}>
          <div className="entry-thumb image-hover2" style={{ overflow: "hidden", borderRadius: "10px", marginBottom: "15px", position: "relative" }}>
            <a href="#">
              <img alt="Blog" src="https://api.xedap.vn/banners/CTKM%20T05-2025/ctkm-raptor-pha-kia-n-banner-tin-ta-c-02.jpg" width="50px" height="255.46px" style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.3s ease, opacity 0.3s ease" }} />
            </a>
          </div>
          <div className="blog-preview_info" style={{ backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <h4 className="blog-preview_title">
              <a href="#" style={{ color: "#333", fontSize: "18px", fontWeight: "bold", textDecoration: "none", display: "block", marginBottom: "10px" }}>RINH NGAY RAPTOR - CHỚP VOUCHER "ĐỈNH"</a>
            </h4>
            <ul className="post-meta" style={{ listStyle: "none", padding: "0", margin: "10px 0 15px", display: "flex", flexWrap: "wrap", gap: "10px", color: "#666", fontSize: "14px" }}>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-user" style={{ marginRight: "5px" }}></i>được đăng bởi <a href="#"> Admin</a></li>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-comments" style={{ marginRight: "5px" }}></i><a href="#">8 nhận xét</a></li>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-clock-o" style={{ marginRight: "5px" }}></i><span className="day">24 </span> <span className="tháng"> tháng 3</span></li>
            </ul>
            <div className="blog-preview_desc" style={{ color: "#555", lineHeight: "1.6", fontSize: "14px", marginBottom: "15px" }}>
              Từ ngày 03/05 – 23/05/2025, Raptor tung ưu đãi khủng dành riêng cho tín đồ mê xe: Mua xe Raptor – Rinh ngay voucher mua phụ kiện lên đến 2.000.000 VNĐ. Sắm xe càng chất, quà càng “to”, còn chờ gì mà không “tậu” ngay.
            </div>
            <a className="blog-preview_btn" href="https://xedap.vn/rinh-ngay-raptor-chop-voucher-dinh/" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#ff5722", color: "#fff", textTransform: "uppercase", fontWeight: "bold", borderRadius: "5px", textDecoration: "none" }}>
              ĐỌC THÊM
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6" style={{ flex: "1", maxWidth: "48%", boxSizing: "border-box" }}>
          <div className="entry-thumb image-hover2" style={{ overflow: "hidden", borderRadius: "10px", marginBottom: "15px", position: "relative" }}>
            <a href="#">
              <img alt="Blog" src="https://api.xedap.vn/tmp/cover-blog-xedapvn-copy.jpg" width="550px" height="255.46px" style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.3s ease, opacity 0.3s ease" }} />
            </a>
          </div>
          <div className="blog-preview_info" style={{ backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <h4 className="blog-preview_title">
              <a href="#" style={{ color: "#333", fontSize: "18px", fontWeight: "bold", textDecoration: "none", display: "block", marginBottom: "10px" }}>5 mẫu xe đạp thể thao chất lượng cao cho học sinh bán chạy nhất hiện nay</a>
            </h4>
            <ul className="post-meta" style={{ listStyle: "none", padding: "0", margin: "10px 0 15px", display: "flex", flexWrap: "wrap", gap: "10px", color: "#666", fontSize: "14px" }}>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-user" style={{ marginRight: "5px" }}></i>được đăng bởi <a href="#">Admin</a></li>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-comments" style={{ marginRight: "5px" }}></i><a href="#">4 nhận xét</a></li>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-clock-o" style={{ marginRight: "5px" }}></i><span className="day">13</span> <span className="tháng">Tháng 12</span></li>
            </ul>
            <div className="blog-preview_desc" style={{ color: "#555", lineHeight: "1.6", fontSize: "14px", marginBottom: "15px" }}>
              Xe đạp thể thao không chỉ là phương tiện di chuyển mà còn là công cụ giúp rèn luyện sức khỏe và tạo dựng lối sống năng động. Với học sinh, một chiếc xe đạp phù hợp có thể trở thành người bạn đồng hành tuyệt vời trong cả việc học tập lẫn vui chơi. Nhưng để chọn được mẫu xe đạp ...
            </div>
            <a className="blog-preview_btn" href="https://xedap.vn/5-mau-xe-dap-the-thao-chat-luong-cao-cho-hoc-sinh-ban-chay-nhat-hien-nay" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#ff5722", color: "#fff", textTransform: "uppercase", fontWeight: "bold", borderRadius: "5px", textDecoration: "none" }}>
              ĐỌC THÊM
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6" style={{ flex: "1", maxWidth: "48%", boxSizing: "border-box" }}>
          <div className="entry-thumb image-hover2" style={{ overflow: "hidden", borderRadius: "10px", marginBottom: "15px", position: "relative" }}>
            <a href="#">
              <img alt="Blog" src="https://api.xedap.vn/tmp/a-ae-a-c-da-n-chae-i-xe-a-a-p-a-a-nh-gia-cao-nha-t-na-m.jpg" width="550px" height="255.46px" style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.3s ease, opacity 0.3s ease" }} />
            </a>
          </div>
          <div className="blog-preview_info" style={{ backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <h4 className="blog-preview_title">
              <a href="#" style={{ color: "#333", fontSize: "18px", fontWeight: "bold", textDecoration: "none", display: "block", marginBottom: "10px" }}>Top 5 xe đạp cao cấp trên 12 triệu được dân chơi xe đạp đánh giá cao nhất năm</a>
            </h4>
            <ul className="post-meta" style={{ listStyle: "none", padding: "0", margin: "10px 0 15px", display: "flex", flexWrap: "wrap", gap: "10px", color: "#666", fontSize: "14px" }}>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-user" style={{ marginRight: "5px" }}></i>được đăng bởi <a href="#">Admin</a></li>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-comments" style={{ marginRight: "5px" }}></i><a href="#">4 nhận xét</a></li>
              <li style={{ display: "flex", alignItems: "center" }}><i className="fa fa-clock-o" style={{ marginRight: "5px" }}></i><span className="day">13</span> <span className="tháng">Tháng 12</span></li>
            </ul>
            <div className="blog-preview_desc" style={{ color: "#555", lineHeight: "1.6", fontSize: "14px", marginBottom: "15px" }}>
              Xe đạp không chỉ là phương tiện, mà còn là niềm đam mê, nơi những người yêu thích tốc độ tìm thấy chính mình. Với ngân sách trên 12 triệu, bạn không chỉ mua một chiếc xe mà còn sở hữu cả sự đẳng cấp và hiệu năng vượt trội...
            </div>
            <a className="blog-preview_btn" href="https://xedap.vn/top-5-xe-dap-cao-cap-tren-12-trieu-duoc-dan-choi-xe-dap-danh-gia-cao-nhat-nam" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#ff5722", color: "#fff", textTransform: "uppercase", fontWeight: "bold", borderRadius: "5px", textDecoration: "none" }}>
              ĐỌC THÊM
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}>
        {/* Newsletter Section */}
        <div
          className="newsletter-wrap"
          style={{
            backgroundColor: "#444",
            padding: "20px 0",
            textAlign: "center",
          }}
        >
          <div className="container">
            <h4 style={{ color: "#57E2FF ", marginBottom: "15px" }}>Nhập email để nhận thông tin sớm nhất từ chúng tôi</h4>
            <form>
              <input
                type="text"
                placeholder="Nhập địa chỉ email của bạn"
                style={{
                  padding: "10px",
                  width: "60%",
                  marginRight: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#57E2FF ",
                  border: "none",
                  borderRadius: "5px",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                Xác nhận
              </button>
            </form>
          </div>
        </div>
        {/* Footer Middle Section */}
        <div className="footer-middle" style={{ padding: "30px 0" }}>
          <div className="container">
            <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
              {/* Column */}
              <div className="footer-column" style={{ width: "30%" }}>
                <h4 style={{ color: "#57E2FF " }}>Giới thiệu</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <p>"Cửa hàng xe đạp của chúng tôi là điểm đến lý tưởng cho những ai yêu thích khám phá, rèn luyện sức khỏe và sống xanh – nơi bạn tìm thấy chiếc xe phù hợp nhất cho hành trình của riêng mình."</p>
                </ul>
              </div>
              {/* Other Columns */}
              <div className="footer-column" style={{ width: "20%" }}>
                <h4 style={{ color: "#57E2FF " }}>Lịch làm việc</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <p>Thứ hai: 9h30 - 18h30</p>
                  <p>Thứ ba: 9h30 - 18h30</p>
                  <p>Thứ tư: 9h30 - 18h30</p>
                  <p>Thứ năm: 9h30 - 18h30</p>
                  <p>Thứ sáu: 9h30 - 18h30</p>
                  <p>Thứ bảy: 9h30 - 18h30</p>
                </ul>
              </div>
              <div className="footer-column" style={{ width: "30%" }}>
                <h4 style={{ color: "#57E2FF " }}>Thông tin liên hệ</h4>
                <address style={{ fontStyle: "normal", marginBottom: "10px" }}>
                  427 Phạm Văn Đồng, Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, Hà Nội
                </address>
                <p style={{ margin: "0 0 5px" }}>📞 091 234 5678</p>
                <p style={{ margin: "0" }}>
                  ✉️ <a href="#" style={linkStyle}>HVNbicycle@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div
          className="footer-bottom"
          style={{
            backgroundColor: "#222",
            color: "#ccc",
            padding: "10px 0",
            textAlign: "center",
          }}
        >
          <p style={{ margin: "0" }}>
            &copy; {moment().format("YYYY")} HVN.
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

// Common style for links
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "block",
  margin: "5px 0",
};

export default Footer;
