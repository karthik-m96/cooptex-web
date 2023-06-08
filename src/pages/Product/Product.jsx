import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const images = ["/img/product1.jpg", "/img/product2.jpg", "/img/product3.jpg"];

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const [count, setCount] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt="product1"
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            src={images[1]}
            alt="product2"
            onClick={(e) => setSelectedImg(1)}
          />
          <img
            src={images[2]}
            alt="product3"
            onClick={(e) => setSelectedImg(2)}
          />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="mainImage" />
        </div>
      </div>
      <div className="right">
        <h1>Kancheepuram Pure Zari Silk Sarees</h1>
        <span>Rs.20,090</span>
        <span>Rs.17,030</span>
        <p>
          Kanchipuram sarees are hand woven from pure mulberry silk. The skilled
          artisans weave them on handlooms, creating a unique hand-made work of
          art in each saree. If the pallu has to be woven in a different shade,
          it is first separately woven and then delicately joined to the saree
          using age-old Korvai method (a technique to interlock the border and
          pallu with the body). The joint is woven so strongly that even if the
          saree tears, the border would not detach.
        </p>
        <div className="quantity">
          <button
            onClick={(e) => (count === 1 ? setCount(1) : setCount(count - 1))}
          >
            -
          </button>
          <span>{count}</span>
          <button onClick={(e) => setCount(count + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <button>
              <FavoriteBorderIcon /> Add to wishlist
            </button>
          </div>
          <div className="item">
            <button>
              <BalanceIcon /> Add to compare
            </button>
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
