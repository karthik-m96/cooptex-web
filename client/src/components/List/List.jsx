import React from "react";
import "./List.scss";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";

const List = ({ subCats, maxPrice, sort, catId }) => {
  
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][subcategories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "Loading"
        : data?.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
    </div>
  );
};

export default List;
