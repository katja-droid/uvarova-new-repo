import React from 'react';
import './LinkedInReview.css'; // Make sure to create this CSS file for styling
import photoName from '../assets/Photo_name.png';
import quote from '../assets/quotes.svg';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import withScrollEffect from '../withScrollEffect.js';

const LinkedInReview = () => {
  return (
    <Box 
      className="linkedin-review" 
      sx={{
        padding: { lg: '24px', md: '16px', xxs: '24px' }, 
        border: '1px solid #EFEFF8', 
        boxSizing: 'border-box', // Ensures padding doesn't affect width/height
        width: '100%', // Ensures it takes 100% of the container's width
        height: '100%', // Ensures it takes 100% of the container's height
      }}
    >
      <Link to="https://www.linkedin.com/in/oksana-tsybulska-676185177/" style={{ padding: 0, margin: 0, width: '100%' }}>
        <img src={photoName} width="100%" alt="First" className="linkedin-review-image" />
      </Link>

      {/* Wrapper for Quote and Text */}
      <Box
        sx={{
          display: 'flex', // Use flexbox
          flexDirection: 'column', // Stack quote and text vertically
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
          px: { xl: '16px', lg: '0', sm: '16px', xxs: '16px' }, // Padding for the group
          py: { xl: '16px', lg: '16px', sm: '16px', xxs: '16px' }, // Padding for the group
        }}
      >
        {/* Box for Quote Image */}
        <Box 
          sx={{
            width: { xl: '25px', md: '15px', xxs: '24px' }, 
            pb: '16px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src={quote} alt="Quote Icon" className="linkedin-review-image" style={{ padding: 0, margin: 0 }} />
        </Box>

        {/* Typography for the Review Text */}
        <Typography 
          className="linkedin-review-text" 
          sx={{ 
            fontSize: { xl: '18px', md: '14px', xxs: '18px' }, 
            textAlign: 'center', 
            lineHeight: { xl: '26px', lg: 'normal' }, // Line height varies on screen size
            fontFamily: 'Calibre Regular',
            paddingTop: 0, // Ensure no padding on top
          }}
        >
          Thanks to Oli’s mentorship, I not only improved my technical skills, but also gained a clearer understanding of what it means to be a user-centered designer.
        </Typography>
      </Box>
    </Box>
  );
};

export default withScrollEffect(LinkedInReview);
