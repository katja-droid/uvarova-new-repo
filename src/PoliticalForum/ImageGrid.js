import React, { useState, useEffect, useRef } from 'react';
import img1 from '../assets/round1.svg';
import img2 from '../assets/round2.svg';
import img3 from '../assets/round3.svg';
import img4 from '../assets/round4.svg';
import './ImageGrid.css';
import withScrollEffect from '../withScrollEffect.js';

const ImageGrid = () => {
  const [applyOverlap, setApplyOverlap] = useState(false);
  const containerRef = useRef(null);

  const images = [
    { src: img1, title: 'Round 1' },
    { src: img2, title: 'Round 2' },
    { src: img3, title: 'Round 3' },
    { src: img4, title: 'Round 4' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalImageWidth = 258.76 * 4; // Total width of all images
        if (containerWidth < totalImageWidth) {
          setApplyOverlap(true);
        } else {
          setApplyOverlap(false);
        }
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="image-grid-container" ref={containerRef}>
      <div className="image-grid">
        {images.map((image, index) => (
          <div
            className={`image-item ${applyOverlap && index !== 0 ? 'overlap' : ''}`} // No overlap for the first image
            key={index}
            style={{ zIndex: 4 - index }}
          >
            <div className="image-wrapper">
              <h6>{image.title}</h6>
              <img src={image.src} alt={`image-${index}`} className="image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withScrollEffect (ImageGrid);
