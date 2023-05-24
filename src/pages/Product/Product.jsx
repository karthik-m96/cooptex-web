import React from "react";
import "./Product.scss";

const Product = () => {
  const images = [
    "https://images.pexels.com/photos/15985569/pexels-photo-15985569/free-photo-of-cold-snow-wood-light.jpeg",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src="" alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Product;
