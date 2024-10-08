import React, { useState, useEffect } from 'react';

const ReadingProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to calculate scroll progress
  const calculateScrollProgress = () => {
    const currentScroll = window.pageYOffset; // The current vertical scroll position
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (currentScroll / totalHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  // Add event listener to track scroll event
  useEffect(() => {
    window.addEventListener('scroll', calculateScrollProgress);
    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${scrollProgress}%`, // Adjust the width dynamically based on scroll
      height: '5px', // Same height as the WordPress plugin bar
      background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)', // Gradient background
      zIndex: 99,
      transition: 'width 0.2s ease-out' // Smooth transition as you scroll
    }} />
  );
};

export default ReadingProgressBar;
