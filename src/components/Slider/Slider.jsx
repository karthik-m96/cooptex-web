import React from "react";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Slider = () => {
  const data = [
    "../../../public/img/banner1.jpg",
    "../../../public/img/banner2.jpg",
    "../../../public/img/banner3.jpg",
  ];

  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <WestOutlinedIcon />
        </div>
        <div className="icon">
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
