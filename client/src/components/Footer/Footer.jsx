import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>ABOUT US</h2>
          <Link className="link" to="/contactus">
            <span>Contact us</span>
          </Link>
        </div>
        <div className="item">
          <h2>POLICIES</h2>
          <Link className="link" to="/privacy">
            <span>Privacy Policy</span>
          </Link>
          <Link className="link" to="/shipping">
            <span>Shipping Policy</span>
          </Link>
        </div>
        <div className="item">
          <h2>CONNECT WITH US</h2>
          <span>Disclaimer</span>
          <span>Help/FAQ</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span>
            The Tamilnadu Handloom Weavers Co-operative Society Ltd ©2022 All
            Right Reserved.
          </span>
        </div>
        <div className="right">
          <img src="../img/pay.svg" alt="payment logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
