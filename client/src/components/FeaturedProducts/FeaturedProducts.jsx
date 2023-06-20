import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  
  const data = [
    {
      id: 1,
      img: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-9silkset311sufisidetassels2023-2-21-18-13-331600X2400-285x318.jpg",
      img2: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-9silkset309kavyaback12023-2-21-18-13-41600X2400-285x318.jpg",
      title: "Kancheepuram Pure Zari Silk Sarees",
      isNew: true,
      oldPrice: "20,090",
      price: "17,030",
    },
    {
      id: 2,
      img: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-1silkset311sufisidetassels2023-2-21-18-13-501600X2400-285x318.jpg",
      img2: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-1silkset309kavyaback12023-2-21-18-13-481600X2400-285x318.jpg",
      title: "Kancheepuram Pure Zari Silk Sarees",
      isNew: true,
      oldPrice: "21,028",
      price: "17,834",
    },
    {
      id: 3,
      img: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-5silkset311sufisidetassels2023-2-21-18-13-421600X2400-285x318.jpg",
      img2: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-5silkset309kavyaback12023-2-21-18-13-111600X2400-285x318.jpg",
      title: "Kancheepuram Pure Zari Silk Sarees",
      isNew: true,
      oldPrice: "20,246",
      price: "17,163",
    },
    {
      id: 4,
      img: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-8silkset311sufisidetassels2023-2-21-18-13-311600X2400-285x318.jpg",
      img2: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-8silkset309kavyaback12023-2-21-18-13-51600X2400-285x318.jpg",
      title: "Kancheepuram Pure Zari Silk Sarees",
      isNew: true,
      oldPrice: "23,893",
      price: "20,289",
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          process.env.REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>Cooptex Society</h1>
        <p>
          Though the history of weavers’ co-operative dates back to the first
          quarter of 20th century, strictly speaking serious efforts were made
          in the year 1934-35 to bring large number of weavers in TamilNadu
          under the co-operative fold to strengthen entire handloom sector.
        </p>
        <h1>Featured Products</h1>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
