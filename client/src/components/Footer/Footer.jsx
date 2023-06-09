import React from "react";
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>ABOUT US</h1>
          <span>About Us</span>
          <span>Blog</span>
          <span>Official Website</span>
        </div>
        <div className="item">
          <h1>POLICIES</h1>
          <span>Privacy Policy</span>
          <span>Return & Exchange Policy</span>
          <span>Shipping Policy</span>
        </div>
        <div className="item">
          <h1>CONNECT WITH US</h1>
          <span>Contact us</span>
          <span>Disclaimer</span>
          <span>Help/FAQ</span>
          <span>Store Locator</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span>The Tamilnadu Handloom Weavers Co-operative Society Ltd ©2022 All Right Reserved.</span>
        </div>
        <div className="right">
          <img src="../img/pay.svg" alt="payment logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
