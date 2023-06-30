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
            src="./img/Kanchi_category.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/3">
              Kancheepuram Silks
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="./img/Tirubhuvanam_category.jpg"
            alt=""
          />
          <button>
            <Link to="/products/4" className="link">
              Thirubuvanam Silks
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="./img/Arni_category.jpg"
            alt=""
          />
          <button>
            <Link to="/products/5" className="link">
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
                src="./img/Salem_category.jpg"
                alt=""
              />
              <button>
                <Link to="/products/6" className="link">
                  Salem silks
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="./img/Rasipuram_category.jpg"
                alt=""
              />
              <button>
                <Link to="/products/7" className="link">
                  Rasipuram silks
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="./img/Soft_silks_category.jpg"
            alt=""
          />
          <button>
            <Link to="/products/8" className="link">
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
