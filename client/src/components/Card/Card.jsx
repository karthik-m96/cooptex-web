import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <div className="titleText">
          <h2>{item.title}</h2>
          <div className="prices">
            <h3>Rs.{item.oldPrice}</h3>
            <h3>Rs.{item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
