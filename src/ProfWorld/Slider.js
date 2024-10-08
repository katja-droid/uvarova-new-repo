import React, { useState } from "react";
import "./Slider.css"; // Custom styles with your images
import slider1 from '../assets/slider-1.png';
import slider2 from '../assets/slider-2.png';
import slider3 from '../assets/slider-3.png';
import slider4 from '../assets/slider-4.png';
import slider5 from '../assets/slider-5.png';
import slider6 from '../assets/slider-6.png';
import slider7 from '../assets/slider-7.png';
import slider8 from '../assets/slider-8.png';
import slider9 from '../assets/slider-9.png';
import slider10 from '../assets/slider-10.png';
const Slider = () => {
  const images = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="block">
    <div className="slider-container">
      <div className="slider">
        <button className="arrow left-arrow" onClick={goToPrev}></button>

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="slider-image"
        />

        <button className="arrow right-arrow" onClick={goToNext}></button>
      </div>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Slider;
