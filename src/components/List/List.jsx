import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
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
      id: 2,
      img: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-1silkset311sufisidetassels2023-2-21-18-13-501600X2400-285x318.jpg",
      img2: "https://www.cooptex.gov.in/image/cache/data/FEB/SKBSA/SKBSA/TRI3DSKBS-1silkset309kavyaback12023-2-21-18-13-481600X2400-285x318.jpg",
      title: "Kancheepuram Pure Zari Silk Sarees",
      isNew: true,
      oldPrice: "21,028",
      price: "17,834",
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
  return (
    <div className="list">
      {data?.map((item) => {
        return(
        <Card item={item} key={item.id} />
      )})}
    </div>
  );
};

export default List;
