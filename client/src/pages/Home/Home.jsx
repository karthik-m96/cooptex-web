import React from "react";
import "./Home.scss";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="homeAbout">
        <h1>Cooptex Society</h1>
        <p>
          Though the history of weavers’ co-operative dates back to the first
          quarter of 20th century, strictly speaking serious efforts were made
          in the year 1934-35 to bring large number of weavers in TamilNadu
          under the co-operative fold to strengthen entire handloom sector.
        </p>
      </div>
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
