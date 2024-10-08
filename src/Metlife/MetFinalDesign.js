import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/finaldesignsmet1.png';
import image1 from '../assets/finaldesignsmet2.png';
import image2 from '../assets/finaldesignsmet3.png';
import image3 from '../assets/finaldesignsmet4.png';
import image4 from '../assets/finaldesignsmet5.png';
import OverlappingImages from './OverlappingImages'; // Import the new component

const MetFinalDesign = () => {
  const verticalOverlapPercentage = 6.17; // Vertical overlap percentage
  const horizontalSpacing = '100px'; // The horizontal spacing between the images

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          overflow: 'visible',
          pb: { 
            xxs: '24px', 
            xs: '48px', 
            sm: '60px', 
            md: '84px', 
            lg: '84px', 
            xl: '84px', 
            xxl: '97px' 
          },
        }}
        id="final-designs-met"
      >
        <Container disableGutters maxWidth={false} sx={{ width: '100%', py: 0 }}>
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              sx={{
                textAlign: 'center',
                pb: '24px',
                width: { xxs: '100%', lg: '100%', xl: '935px', xxl: '935px' }, // Full width for xxs-lg
                maxWidth: { xxs: '100%', lg: '100%', xl: '935px', xxl: '935px' }, // Ensure it doesn't exceed 935px on larger screens
                
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                x: 0
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                  fontFamily: 'Playfair Display Bold',
                  pb: '24px',
                }}
                variant="h3"
              >
                Final Designs
              </Typography>
              <Typography
                sx={{
                  pb: { md: '24px', xxs: '16px' },
                  fontSize: '18px',
                  lineHeight: '26px',
                  fontFamily: 'Calibre Regular',
                  textAlign: { md: 'center', xxs: 'left' },
                }}
              >
                Below is a detailed overview of the updated form.
              </Typography>
              <Box sx={{ width: '100%', overflow: 'visible' }}>
                <img src={img} width="100%" style={{ boxShadow: '0 15px 20px 0 rgba(0, 0, 0, 0.1)' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container disableGutters maxWidth={false} sx={{ width: '100%',   pb: { 
            xxs: '24px', 
            xs: '48px', 
            sm: '60px', 
            md: '84px', 
            lg: '84px', 
            xl: '84px', 
            xxl: '97px' 
          }, display:
          {
            md: 'block',
            xxs: 'none'
          } }}>
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
      {/* Use OverlappingImages Component */}
      <OverlappingImages
        image1Src={image1}
        image2Src={image2}
        verticalOverlapPercentage={verticalOverlapPercentage}
        horizontalSpacing={horizontalSpacing}
      />
      </Grid>
      </Container>
      <Container disableGutters maxWidth={false} sx={{ width: '100%',   pb: { 
            xxs: '24px', 
            xs: '48px', 
            sm: '60px', 
            md: '84px', 
            lg: '84px', 
            xl: '84px', 
            xxl: '97px' 
          }, display:
          {
            md: 'block',
            xxs: 'none'
          } }}>
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
         <OverlappingImages
        image1Src={image3}
        image2Src={image4}
        verticalOverlapPercentage={verticalOverlapPercentage}
        horizontalSpacing={horizontalSpacing}
      />
      </Grid>
      
      </Container>
      <Container disableGutters maxWidth={false} sx={{ width: '100%',   pb: { 
            xxs: '24px', 
            xs: '48px', 
            sm: '60px', 
            md: '84px', 
            lg: '84px', 
            xl: '84px', 
            xxl: '97px' 
          }, display:
          {
            md: 'none',
            xxs: 'block'
          } }}>
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center" sx={{py: '24px'}}>
        <img src={image1} width="100%"></img>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{py: '24px'}}>
        <img src={image2} width="100%"></img>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{py: '24px'}}>
        <img src={image3} width="100%"></img>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{py: '24px'}}>
        <img src={image4} width="100%"></img>
      </Grid>
      </Container>
      
    </ThemeProvider>
  );
};

export default MetFinalDesign;
