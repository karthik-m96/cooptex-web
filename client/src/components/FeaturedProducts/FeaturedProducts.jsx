import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Cooptex Society</h1>
        <p>
          Though the history of weavers’ co-operative dates back to the first
          quarter of 20th century, strictly speaking serious efforts were made
          in the year 1934-35 to bring large number of weavers in TamilNadu
          under the co-operative fold to strengthen entire handloom sector.
        </p>
        <h1>Featured Products</h1>
      </div>
      <div className="bottom">
      {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
