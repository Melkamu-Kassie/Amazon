import React from "react";
// 1. IMPORT THE REQUIRED LIBRARY CSS (Crucial for react-responsive-carousel to work)
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { img } from "./img/data";

function HeroCarousel() {
  return (
    <ResponsiveCarousel
      className="custom-carousel-wrapper" // 2. ADDED CLASSNAME FOR YOUR CUSTOM CSS
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
    >
      {img.map((imageItemLink, index) => {
        return (
          <img key={index} src={imageItemLink} alt={`Slide ${index + 1}`} />
        );
      })}
    </ResponsiveCarousel>
  );
}
export default HeroCarousel;
