import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  const blogPosts = [
    {
      title: "Hướng Dẫn Lắp Ráp Xe - Giant Escape 3 Disc",
      author: "HVN",
      date: "19/04/2025",
      image: "/img/list/GiantEscape3.jpg",
      href: "https://www.youtube.com/watch?v=9OEvWOdyi44" 
    },
    
    {
      title: "Hướng Dẫn Lắp Ráp Xe - Giant Talon 3 ",
      author: "HVN",
      date: "22/6/2024",
      image: "/img/list/GiantTalon3.jpg",
      href: "https://www.youtube.com/watch?v=CfmcPJW8VJQ"
    },

    {
      title: "Hướng Dẫn Lắp Ráp Xe - TrinX Life 2.2  ",
      author: "HVN",
      date: "22/6/2024",
      image: "/img/list/TrinxLife.jpg",
      href: "https://www.youtube.com/watch?v=lirfvmDIcKQ"
    },
    {
      title: "Hướng Dẫn Lắp Ráp Xe Đạp Địa Hình XDLIM ",
      author: "HVN",
      date: "22/6/2024",
      image: "/img/list/XDLIM.jpg",
      href: "https://www.youtube.com/watch?v=BYH7T2L4c1o"
    },
  ];

  return (
    <div className="container mt-5 content">
  <h1 style={{ fontSize: '30px', fontWeight: 'bold' }} className="mb-10 text-center">HƯỚNG DẪN LẮP RÁP XE ĐẠP</h1>
  <div className="row">
    {blogPosts.map((post, index) => (
      <div key={index} className="col-md-6 mb-4">
        <a href={post.href} className="text-decoration-none">
          <div className="card h-70 shadow-sm">
            <img src={post.image} className="card-img-top" alt={post.title} />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {post.author} - {post.date}
              </h6>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>

  );
};

export default Blog;
