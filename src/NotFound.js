import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';
import theme from './theme';  // Your custom theme
import image from './assets/404.png';
import arrow from './assets/maki_arrow.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth={false} sx={{ minHeight: '100vh' }}>
        {/* Navbar */}
        <Grid container>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
        </Grid>

        {/* Main Content */}
        <Grid container justifyContent={'center'} spacing={0} sx={{padding: '104px 0',
        '@media (max-width: 360px)': { marginTop: '16px' },
        '@media (min-width: 360px) and (max-width: 479px)': { marginTop: '16px' },
        '@media (min-width: 480px) and (max-width: 599px)': { marginTop: '24px' },
        '@media (min-width: 600px) and (max-width: 904px)': { marginTop: '46px' },
        '@media (min-width: 905px) and (max-width: 1239px)': { marginTop: '68px' },
        '@media (min-width: 1240px) and (max-width: 1439px)': { marginTop: '86px' },
        '@media (min-width: 1440px) and (max-width: 1599px)': { marginTop: '80px' },
        '@media (min-width: 1600px) and (max-width: 1919px)': { marginTop: '80px' },
      }}>
          {/* Image Container */}
          <Grid
            item
            xxs={12}
            xs={12}
            sm={12}
            md={12}
            lg={2}
            xl={2}
            xxl={2}
            sx={{ display: 'flex', justifyContent: 'center', mb: '32px' }}
          >
            <Box sx={{
                  width: {
                    xxs: '74px',
                    xs: '74px',
                    sm: '194px',
                    md: '194px',
                    lg: '100%',
                    xl: '100%',
                    xxl: '100%',
                  },
                  maxWidth: {
                    lg: '194px', // Ensure image size doesn't exceed set max-width for larger screens
                    xl: '194px',
                    xxl: '194px',
                  },
                  height: 'auto', // Maintain aspect ratio
                }}>
              <img
                src={image}
                alt="404 Error"
                style={{ borderRadius: '8px' }}
                width="100%"
                
              />
            </Box>
          </Grid>

          {/* Text Container */}
          <Grid container justifyContent={'center'} sx={{ mb: '24px' }}>
            <Grid item xxs={12} xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontFamily: 'Calibre Regular',
                  color: '#646470',
                }}
              >
                The page you were looking for could not be found. Please return to the home page or email your question to 
                <Link
                  to="mailto:olga.uvva@gmail.com"
                  style={{
                    color: '#0D99FF',
                    textDecoration: 'none',
                    fontFamily: 'Calibre Regular',
                  }}
                >
                  olga.uvva@gmail.com
                </Link>
              </Typography>
            </Grid>
          </Grid>

          {/* Link with Arrow Container */}
          <Grid container justifyContent={'center'}>
  <Grid item>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center', // Vertically align text and image
        justifyContent: 'center',
        gap: '8px', // Space between text and arrow
      }}
    >
      <Typography
        sx={{
          fontSize: '20px',
          color: '#0A0A14',
          fontFamily: 'Calibre SemiBold',
          display: 'flex',
          alignItems: 'center', // Vertically align the text within its container
          paddingTop: '6px'
        }}
      >
        Go back to home
      </Typography>
      
      {/* Link container with arrow */}
      <Link to="/" style={{ display: 'flex', alignItems: 'flex-start'  }}>
        <Box
          component="img"
          src={arrow}
          alt="Go Back"
        />
      </Link>
    </Box>
  </Grid>
</Grid>

        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default NotFound;
