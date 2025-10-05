import React from "react";
import "./LandingPage.css";
import FeatureSections from "../components/Feature_Sections";

// Image imports for the carousel
import image1 from "../assets/Rava_idli.jpg";
import image2 from "../assets/masala_dosa.jpg";
import image3 from "../assets/puliogare.jpg";
import image4 from "../assets/upma.jpg";
import image5 from "../assets/vada.jpg";
import image6 from "../assets/rice_and_sambar.jpg";
import image7 from "../assets/Gobi_manchurian.jpg";
import image8 from "../assets/Cake.jpg";
import image9 from "../assets/Fried_rice.jpg";
import image10 from "../assets/Burger.jpg";

const images = [
  { src: image1, name: "Rava Idli" },
  { src: image2, name: "Masala Dosa" },
  { src: image3, name: "Puliogare" },
  { src: image4, name: "Upma" },
  { src: image5, name: "Vada" },
  { src: image6, name: "Rice & Sambar" },
  { src: image7, name: "Gobi Manchurian" },
  { src: image8, name: "Cake" },
  { src: image9, name: "Fried Rice" },
  { src: image10, name: "Burger" },
];

const ImageCarousel = ({ images }) => (
  <div className="carousel-wrapper">
    <div className="carousel-container">
      <div className="carousel-images">
        {images.concat(images).map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image.src} alt={image.name} />
            <div className="image-text">{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Carousel Section */}
      <ImageCarousel images={images} />

      {/* Scroll-Based Feature Sections */}
      <FeatureSections />
    </div>
  );
};

export default LandingPage;
