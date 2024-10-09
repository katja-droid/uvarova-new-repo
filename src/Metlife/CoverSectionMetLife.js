import React from 'react';
import { Box, Container } from '@mui/material';
import theme from '../theme'; // Import your custom theme
import { ThemeProvider } from '@mui/material/styles';
import cover from '../assets/metlife.png'; // Your cover image

const CoverSectionMetLife = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden', // Ensure image doesn't overflow
          backgroundColor: '#E6F2FD',
          pb: '16px'
        }}
      >

         
          <img
            width="100%"
            src={cover}
            alt="Virtual Nutritionist Cover"
            style={{ objectFit: 'cover', height: 'auto' }} // Maintain the aspect ratio
            // Add the sx property to manage width based on breakpoints
            
          />
      </Box>
    </ThemeProvider>
  );
};

export default CoverSectionMetLife;
