import React from "react";
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => {
        return (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="price">1 x Rs.{item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
        );
      })}
      <div className="total">
        <span>Subtotal</span>
        <span>Rs.17,252</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
