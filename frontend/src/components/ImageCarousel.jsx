import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.css";

const images = [
    "/assets/dish1.jpg",
    "/assets/dish2.jpg",
    "/assets/dish3.jpg"
  ];
  
const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={3000}
      >
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Dish ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
