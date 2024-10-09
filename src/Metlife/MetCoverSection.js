import React from 'react';
import { Box, Container } from '@mui/material';
import theme from '../theme'; // Import your custom theme
import { ThemeProvider } from '@mui/material/styles';
import cover from '../assets/profworld-cover.png'; // Your cover image

const MetCoverSection = () => {
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
          backgroundColor: '#FAF6C8'
        }}
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
            <Box sx={{
              width: {
                xxs: '100%',    // 100% width for extra small screens
                sm: '459px',    // 459px for small screens
                md: '592px',    // 592px for medium screens
                lg: '855px',    // 855px for large screens
                xl: '1185px',   // 1185px for extra-large screens
                xxl: '1237px',  // 1237px for double extra-large screens
                xxxl: '1280px', // 1280px for triple extra-large screens
              }
            }}>
          <img
            width="100%"
            src={cover}
            alt="Virtual Nutritionist Cover"
            style={{ objectFit: 'cover', height: 'auto' }} // Maintain the aspect ratio
            // Add the sx property to manage width based on breakpoints
            
          />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default MetCoverSection;
