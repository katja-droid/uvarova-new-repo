import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/metdesignsystem.png';

const MetDesignSystem = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#fff',
          color: '#0A0A14',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
          <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          

            {/* Image Section */}
            <Grid item xxs={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Box sx={{
                width: {
                  xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', xxl: '100%'
                },
              }} justifyContent='center'>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Full Width Image */}
      <img width="100%" src={image} alt="Design System" />
    </ThemeProvider>
  );
};

export default MetDesignSystem;
