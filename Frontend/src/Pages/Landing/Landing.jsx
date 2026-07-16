import React from "react";
import LayOut from '../../Components/Layout/LayOut';
import HeroCarousel from '../../Components/Carousel/Carousel';
import Category from '../../Components/Catagory/Category';
import Product from '../../Components/Product/Product'
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
