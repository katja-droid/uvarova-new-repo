import React, { useState } from "react";
import "../ProfWorld/Slider.css"; // Custom styles with your divs
import BeforeAfterLayout from "./BeforeAfterLayout";
import before1 from '../assets/before1.png'; 
import after1 from '../assets/after1.png'; 
import before2 from '../assets/before2.png'; 
import after2 from '../assets/after2.png'; 
import before3 from '../assets/before3.png'; 
import after3 from '../assets/after3.png'; 
import './SliderDiv.css';

const SliderDiv = () => {
  // Array of BeforeAfterLayout components, acting like images
  const slides = [
    <BeforeAfterLayout beforeImage={before1} afterImage={after1} />,
    <BeforeAfterLayout beforeImage={before2} afterImage={after2} />,
    <BeforeAfterLayout beforeImage={before3} afterImage={after3} />,
    // Add more BeforeAfterLayout components here if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="blockDiv">
      <div className="slider-containerDiv">
        <div className="sliderDiv">
          {/* Navigation Arrow for Previous */}
          <button className="arrowDiv left-arrowDiv" onClick={goToPrev}></button>

          {/* Render the current slide */}
          <div className="slider-divDiv">
            {slides[currentIndex]}
          </div>

          {/* Navigation Arrow for Next */}
          <button className="arrowDiv right-arrowDiv" onClick={goToNext}></button>
        </div>

        {/* Dots for slide navigation */}
        <div className="dots-containerDiv">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dotDiv ${currentIndex === index ? "activeDiv" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderDiv;
