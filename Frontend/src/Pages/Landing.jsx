import React from "react";
import LayOut from "./Layout/LayOut";
import HeroCarousel from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
i;
function Landing() {
  return (
    <LayOut>
      <HeroCarousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
