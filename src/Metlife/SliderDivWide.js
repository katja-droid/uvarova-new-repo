import React, { useState } from "react";
import "../ProfWorld/Slider.css"; // Custom styles with your divs
import './SliderDivWide.css';
import { Grid, Container } from "@mui/material";
import withScrollEffect from "../withScrollEffect.js";

const SliderDivWide = ({ slides }) => {
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

  return ( <Container disableGutters maxWidth={false} justifyContent="center">
    {/* Title Section */}
    <Grid container justifyContent="center" sx={{  margin: 0 }}>
        <Grid item xxs={12} lg={12} xl={10} className="slider-mui-slider" justifyContent="center">
          {/* Navigation Arrow for Previous */}
          <button
            className="slider-mui-arrow slider-mui-arrow-left"
            onClick={goToPrev}
          ></button>

          {/* Render the current slide */}
          <Grid item xxs={12}  lg={9.6} md={12} className="slider-mui-slide" >
            {slides[currentIndex]}
          </Grid>

          {/* Navigation Arrow for Next */}
          <button
            className="slider-mui-arrow slider-mui-arrow-right"
            onClick={goToNext}
          ></button>
        </Grid>

        {/* Dots for slide navigation */}
        <Grid item xxs={12}  lg={10} className="slider-mui-dots-container" sx={{mt: '32px'}}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`slider-mui-dot ${
                currentIndex === index ? "slider-mui-dot-active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </Grid>
      </Grid>
      </Container>
  );
};

export default withScrollEffect (SliderDivWide);
