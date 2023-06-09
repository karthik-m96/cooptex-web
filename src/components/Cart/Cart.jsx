import React from "react";
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-9silkset311sufisidetassels2023-2-21-18-13-331600X2400-285x318.jpg",
      img2: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-9silkset309kavyaback12023-2-21-18-13-41600X2400-285x318.jpg",
      title: "Kancheepuram Pure Zari Silk Sarees",
      isNew: true,
      oldPrice: "20,090",
      price: "17,030",
    },
    {
      id: 2,
      img: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-1silkset311sufisidetassels2023-2-21-18-13-501600X2400-285x318.jpg",
      img2: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-1silkset309kavyaback12023-2-21-18-13-481600X2400-285x318.jpg",
      title: "Kancheepuram Pure Zari Silk Sarees",
      isNew: true,
      oldPrice: "21,028",
      price: "17,834",
    },
  ];

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
