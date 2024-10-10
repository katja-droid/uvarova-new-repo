import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/prof-design-system.png';
import withScrollEffect from '../withScrollEffect.js';

const DesignSystemSectionProf = () => {
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
          pt: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' },
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
            {/* First Column */}
            <Grid item xxs={12} xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
              <Box sx={{
                width: {
                  xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', xxl: '100%'
                },
              }}>
                <Typography sx={{ textAlign: 'center', fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '24px' }} variant='h3'>
                  Design System
                </Typography>
                <Typography
                  sx={{
                    textAlign: {md: 'center', xxs: 'left'},
                    fontSize: '18px',
                    lineHeight: '26px',
                    fontFamily: 'Calibre Regular',
                    pb: { lg: '24px', xxs: '16px' },
                  }}
                >   The project developed a set of rules, components, and tools to facilitate the rapid creation of new products and maintenance of existing products while ensuring product quality.  </Typography>
              </Box>
            </Grid>

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
       <Box sx={{pb: { 
            xxs: '24px', 
            xs: '48px', 
            sm: '60px', 
            md: '84px', 
            lg: '84px', 
            xl: '84px', 
            xxl: '97px' 
          }}}>
      {/* Full Width Image */}
      <img width="100%" src={image} alt="Design System" />
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect (DesignSystemSectionProf);
