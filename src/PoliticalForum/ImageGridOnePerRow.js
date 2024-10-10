import React from 'react';
import img1 from '../assets/round1.svg';
import img2 from '../assets/round2.svg';
import img3 from '../assets/round3.svg';
import img4 from '../assets/round4.svg';
import './ImageGridOnePerRow.css';
import withScrollEffect from '../withScrollEffect.js';

const ImageGridOnePerRow = () => {
  const images = [
    { src: img1, title: 'Round 1' },
    { src: img2, title: 'Round 2' },
    { src: img3, title: 'Round 3' },
    { src: img4, title: 'Round 4' },
  ];

  return (
    <div className="image-grid-container-one-row">
      <div className="image-grid-one-row">
        {images.map((image, index) => (
          <div className="image-item-one-row" key={index}>
            <div className="image-wrapper-one-row">
              <h6>{image.title}</h6>
              <img src={image.src} alt={`image-${index}`} className="image-one-row" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withScrollEffect (ImageGridOnePerRow);
