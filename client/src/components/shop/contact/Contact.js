import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="container mt-5 content">
      <h1 className="mb-4 text-center">Thông tin cửa hàng</h1>
      <div className="row">
        {/* Thông tin liên hệ */}
        <div className="col-md-6 mb-4">
          <h5>Thông tin liên hệ</h5>
          <p>
            <strong>Địa chỉ:</strong> 427 Phạm Văn Đồng, Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, Hà Nội
          </p>
          <p>
            <strong>Điện thoại:</strong> 091 234 5678
          </p>
          <p>
            <strong>Email:</strong> HVNbicycle@gmail.com
          </p>
          <h5 className="mt-4">Vị trí của chúng tôi</h5>
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.633052740364!2d106.68943081532533!3d10.762622292327193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee5db0d1e59%3A0xf54e6e8caa881abc!2zMTIzIMSQxrDhu51uZyBBQkMsIFF14bqjbmcgMSwgVMOibiBCw6xuaCwgVGjhu4sgU8OibiBIxrDhu51uIFBow7osIEjDsmEgTuG7mWk!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Nội dung bổ sung */}
        <div className="col-md-6">
  <h5>Sản phẩm </h5>
  <p>
    Chào mừng đến với cửa hàng xe đạp của chúng tôi – nơi cung cấp những mẫu xe chất lượng, bền bỉ và phù hợp với mọi nhu cầu di chuyển, thể thao hay giải trí!
  </p>
  <ul>
    <li>
      <strong>Chất lượng hàng đầu:</strong> Tất cả sản phẩm đều được nhập khẩu chính hãng và kiểm tra nghiêm ngặt trước khi đến tay khách hàng.
    </li>
    <li>
      <strong>Giá cả cạnh tranh:</strong> Chúng tôi cam kết mang lại giá tốt nhất trên thị trường, phù hợp với mọi nhu cầu.
    </li>
    <li>
      <strong>Dịch vụ hỗ trợ tận tâm:</strong> Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn 24/7 để chọn được sản phẩm phù hợp nhất.
    </li>
  </ul>
  <p>
    Chúng tôi không chỉ bán xe đạp – chúng tôi mang đến cho bạn phong cách sống năng động, bền vững và đầy cảm hứng trên từng vòng quay.
  </p>
  <a
    href="/san-pham"
    className="btn btn-primary mt-3"
  >
    Khám phá ngay
  </a>
</div>

      </div>
    </div>
  );
};

export default Contact;
