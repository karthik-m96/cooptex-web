import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <>
    <h1 className="cat-title">Categories</h1>
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://cooptex.gov.in/image/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/1/21336_product/thumb1000x1000/3513580530/KPMSILKS-24012023-21B.JPG"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Kancheepuram Silks
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://cooptex.gov.in/image/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/1/21463_product/thumb500x500/2980256496/TBM-09022023-7A.JPG"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Thirubuvanam Silks
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://cooptex.gov.in/image/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/1/21784_product/thumb1000x1000/2744519880/KOTADICHECKS-15052023-2B.JPG"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Arani silks
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://cooptex.gov.in/image/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/0/20817_product/thumb500x500/673536713/TRI3DKPM-23allset0nomofolded62023-4-12-17-18-431600X2400.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Salem silks
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://cooptex.gov.in/image/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/0/20825_product/thumb1000x1000/4235152201/SALEMSILKS-DEC1202022-5B.JPG"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Rasipuram silks
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://cooptex.gov.in/image/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/1/21646_product/thumb1000x1000/3072083456/TRI3Dsclb-705allset0nomofolded72023-5-8-18-37-471600X2400.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              soft silks
            </Link>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Categories;
