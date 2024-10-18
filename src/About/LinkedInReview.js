import React from 'react';
import './LinkedInReview.css'; // Ensure you have this CSS file for additional styling
import photoName from '../assets/Photo_name.png';
import quote from '../assets/quotes.svg';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import withScrollEffect from '../withScrollEffect.js';
import PhotoName from './PhotoName.js';

const LinkedInReview = () => {
  return (
    <Box 
      className="linkedin-review" 
      sx={{
        padding: { xl: '24px', md: '16px', xxs: '24px' }, 
        border: '1px solid #EFEFF8', 
        boxSizing: 'border-box', 
        width: '100%', 
        height: '100%', 
        borderRadius: { xl: '6px', md: '16px', xxs: '24px' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Photo name section */}
      <Box sx={{ height: { xl: '45px', md: '40px', xxs: '45px' }, width: '100%' }}>
        <PhotoName />
      </Box>

      {/* Quote and Text Block - Taking up all remaining space */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center content vertically
          alignItems: 'center', // Center content horizontally
          flexGrow: 1, // Take up all remaining space in the card
          px: { xl: '16px', lg: '0', sm: '16px', xxs: '16px' },
          py: { xl: '16px', lg: '16px', sm: '16px', xxs: '16px' },
        }}
      >
        {/* Quote Image */}
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

        {/* Review Text */}
        <Typography 
          className="linkedin-review-text" 
          sx={{ 
            fontSize: { xl: '18px', md: '14px', xxs: '18px' }, 
            textAlign: 'center', 
            lineHeight: { xl: '26px', lg: 'normal' }, 
            fontFamily: 'Calibre Regular',
            paddingTop: 0,
          }}
        >
          Thanks to Oli’s mentorship, I not only improved my technical skills, but also gained a clearer understanding of what it means to be a user-centered designer.
        </Typography>
      </Box>
    </Box>
  );
};

export default withScrollEffect(LinkedInReview);
