import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/political-navigation-levels.png';

const PoliticalForumNavigationLevels = () => {
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
          py: { 
            xxs: '24px', 
            xs: '48px', 
            sm: '60px', 
            md: '84px', 
            lg: '84px', 
            xl: '84px', 
            xxl: '97px' 
          },
        }}
        id="nav-levels-pf"
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
            justifyContent: 'flexStart',
            alignItems: 'center',
          }}>
            {/* First Column */}
            <Grid item xxs={12} xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
              <Box sx={{
                width: {
                  xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', xxl: '100%'
                },
              }}>
                <Typography sx={{ textAlign: 'left', fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '24px' }} variant='h3'>
                Navigation Levels
                </Typography>
               
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

export default PoliticalForumNavigationLevels;
