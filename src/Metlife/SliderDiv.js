import React, { useState } from "react";
import "../ProfWorld/Slider.css"; // Custom styles with your divs
import './SliderDiv.css';

const SliderDiv = ({ slides }) => {
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
          <div className="slider-divDiv">{slides[currentIndex]}</div>

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
