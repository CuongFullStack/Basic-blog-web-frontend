import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://hinhanhdephd.com/wp-content/uploads/2019/05/hinh-anh-dep-lam-hinh-nen-dep-3.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Tạo dự án ReactJS với Webpack và Babel</h2>
        <p className="info">
          <span className="author">CuongFullstack</span>
          <time>2023-01-02 16:45</time>
        </p>
        <p className="summary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          eaque deserunt iusto nostrum ipsam molestiae veritatis consectetur
          repellendus, similique impedit voluptatibus quam suscipit, rem sed,
          accusamus laudantium at nam perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default Post;
