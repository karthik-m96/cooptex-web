import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [sort, setSort] = useState(null);

  const { data, loading, error } = useFetch(
    `/subcategories?[filters][subcategories][id][$eq]=${catId}`
  );
console.log(data)
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={50000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price low to high</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price high to low</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="catImg" src="/img/product.jpg " alt="bannerimage" />
          <List catId={catId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </div>
  );
};

export default Products;
