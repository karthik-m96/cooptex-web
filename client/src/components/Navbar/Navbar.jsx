import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";


const Navbar = () => {

  const products = useSelector((state) => state.cart.products);

  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="https://www.cooptex.gov.in/index.php?route=information/knt_scheme"
            >
              CMSS (Chit Scheme)
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="images">
            <Link className="link" to="/">
              <img src="/img/cooptex.png" alt="cooptex-logo" />
            </Link>
            <img src="/img/TN.png" alt="Tamil Nadu Govt emblem" />
          </div>

          <div className="gov-text">
            <span>A Government of Tamil Nadu Undertaking</span>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="https://cooptex.gov.in/index.php?route=information/store"
            >
              Stores
            </Link>
          </div>
          <div className="icons">
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
