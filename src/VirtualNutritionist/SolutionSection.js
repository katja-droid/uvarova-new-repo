import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nutritionist-solution.png'
import withScrollEffect from '../withScrollEffect.js';
const SolutionSection = () => {
  return (
    <div id ="solution-v">
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#F7F7F6',
          color: '#0A0A14',
          display: 'flex', // Enable flexbox on the container
          justifyContent: 'center', // Center the container horizontally
          alignItems: 'center', // Optional: Center the container vertically
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center content horizontally inside the container
            alignItems: 'center', // Optional: Center content vertically
            textAlign: 'center', // Optional: Center the text inside
          }}
        >
        <Grid container  sx={{
            justifyContent: {
                xs: '100%',      
                sm: '100%',      
                md: 'center',    
                lg: 'center',     
                xl: 'space-between',        
                xxl: 'space-between' }
          }}>
  {/* First Column */}
  <Grid item xxs={12} xs={12} sm={12} md={12} lg={12} xl={3}>
    <Box sx={{
            width: {
                xs: '100%',      
                sm: '100%',      
                md: '100%',    
                lg: '100%',     
                xl: '100%',        
                xxl: '275px' }
          }}>
      <Typography sx={{ textAlign: 'left', fontSize: {md: '30px', xxs: '25px'}, fontFamily: 'Playfair Display Bold', pb: '16px'}} variant='h4'>The Solution</Typography>
      <Typography sx={{ textAlign: 'left', pb: {md: '24px', xxs: '16px'}, fontFamily: 'Calibre Regular' }}>
        Virtual Nutritionist provides an <b>intuitive interface</b> that takes into account the <b>individual user’s</b> needs and facilitates interaction with medical professionals.
        </Typography>
         <Typography sx={{ textAlign: 'left', pb: {md: '24px', xxs: '16px'}, fontFamily: 'Calibre Regular' }} >
        It includes analytical tools for calorie tracking, progress monitoring, and personalized dietary recommendations to ensure a holistic approach to health.
        </Typography>
     
    </Box>
  </Grid>

            <Grid item xxs={12} xs={12} sm={12} md={12} lg={12} xl={8} xxl={8}>
             <Box sx={{
            width: {
                xs: '100%',      
                sm: '100%',      
                md: '100%',    
                lg: '8',     
                xl: '8',        
                xxl: '770px' }
          }} justifyContent='center'> <img width="100%" src={image}/></Box>
            </Grid>
            {/* Additional Columns */}
          </Grid>
          
        </Container>
      </Box>
    </ThemeProvider>
    </div>
  );
};

export default withScrollEffect (SolutionSection);
