import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {

  const catId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(50000);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Kancheepuram Silks</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Arani Silks</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Thirubuvanam Silks</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="4">Salem Silks</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="5" value={5} />
            <label htmlFor="5">Rasipuram Silks</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="6" value={6} />
            <label htmlFor="6">Soft Silks</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={50000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor="asc">Price low to high</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" />
            <label htmlFor="desc">Price high to low</label>
          </div>
        </div>
      </div>
      <div className="right"></div>
      <img
        className="catImg"
        src="https://scontent.fmaa6-1.fna.fbcdn.net/v/t39.30808-6/319934401_928087895021283_5544152269725366495_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=cUlXnY1qSwYAX_8wPzo&_nc_ht=scontent.fmaa6-1.fna&oh=00_AfD85ZQo8sDmUxFUgcFPZu0bfxEW7U1E9y0v_e7p0scHUg&oe=6471FC77"
        alt="bannerimage"
      />
      <List />
    </div>
  );
};

export default Products;
