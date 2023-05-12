import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left"></div>
        <div className="item">
          <img src="img/eng.png" alt="" />
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <span>INR</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <Link to="/products/1">Women</Link>
        </div>
        <div className="item">
          <Link to="/products/2">Men</Link>
        </div>
        <div className="item">
          <Link to="/products/3">Home Textiles</Link>
        </div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Navbar;
