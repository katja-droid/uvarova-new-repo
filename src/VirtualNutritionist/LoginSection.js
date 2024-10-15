import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import gif from '../assets/1 Registration.gif'; // Import the GIF
import withScrollEffect from '../withScrollEffect.js';

const LoginSection = () => {
  return (
    <div id="login-v">
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
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
          spacing={1}
        >
          <Grid
            container
            sx={{
              justifyContent: {
                xxs: 'center',
                sm: 'center',
                md: 'center',
                lg: 'center',
                xl: 'space-between',
                xxl: 'space-between',
              },
            }}
            
          >
          <Grid
  item
  lg={1} // Size for large screens and above
  justifyContent="center"
  alignItems="center"
  sx={{ 
    display: {
      xxs: 'none',  // Hide on xxs
      sm: 'block',  // Show on sm
      md: 'none',   // Hide on md
      lg: 'block',  // Show on lg and above
    },
  }}
>
</Grid>

            {/* First Column */}
            <Grid
  item
  xxs={12}
  sm={9} // Change to sm=9 to occupy more space
  md={6}
  lg={4}
  justifyContent="center"
  alignItems="center"
  
>
  <Box
    sx={{
      display: 'flex',
      width: {
        xxs: '100%',
        sm: '100%',
        md: '100%',
        lg:  '304px',
      },
      justifyContent: {
        xxs: 'center',  // Center the text on extra small screens
        sm: 'flex-start',  // Align to flex-start on small screens
        md: 'center',  // Center text block on medium screens
      },
      alignItems: 'center',
      height: '100%',
      flexDirection: 'column',
      width: {md: '276px', xxs: '100%', lg: '100%'}
    }}
  >
    <Typography
      sx={{
        textAlign: 'left',
        fontSize: { md: '30px', xxs: '25px' },
        fontFamily: 'Playfair Display Bold',
        pb: '16px',
        width: '100%',
      }}
      variant="h4"
    >
      Log In
    </Typography>
    <Typography
      sx={{
        textAlign: 'left',
        pb: { lg: '24px', xxs: '16px' },
        fontFamily: 'Calibre Regular',
      
      }}
    >
      Log in to the health monitoring application to access personalized features.
    </Typography>
  </Box>
</Grid>
<Grid
              item
              xxs={0}
              xs={0}
              sm={3}
              md={0}
              lg={1}
              justifyContent="center"
              alignItems="center"
              sx={{ display: {
                xxs: 'none',  // Hide on xxs
                sm: 'block',  // Show on sm
                md: 'none',   // Hide on md
                lg: 'block',  // Show on lg and above
              },}}
            ></Grid>
            <Grid item xxs={6} xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
  <Box
    sx={{
      display: 'flex', // Make sure the box itself is flex
      justifyContent: {
        xxs: 'center', // Center on small breakpoints
        md: 'flex-end', // Flex-end on md
        lg: 'flex-start', // Flex-start on lg and larger
      },
      alignItems: 'center',
    }}
  >
    {/* Wrapper Box for the image */}
    <Box
      sx={{
        width: {
          xxs: '100%', 
          sm: '100%',
          lg: '304px',
          xl: '304px',
          xxl: '304px',
        },
        display: 'flex', 
        justifyContent: {
          xxs: 'center'
        },
        alignItems: 'center',
      }}
    >
      <img
        src={gif}
        alt="Registration GIF"
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  </Box>
</Grid>

          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
    </div>
  );
};

export default withScrollEffect (LoginSection);
// paddingLeft: {
                  //   xxs: `calc(8.33% + ${theme.spacing(1)})`,
                  //   sm: `calc(8.33% + ${theme.spacing(1)})`,
                  //   md: `calc(8.33% + ${theme.spacing(1)})`,
                  //   lg: `calc(8.33% + ${theme.spacing(1)})`,
                  //   xl: `calc(8.33% + ${theme.spacing(1)})`,
                  //   xxl: `calc(8.33% + ${theme.spacing(1)})`,
                  // },
                  // paddingRight: {
                  //   xxs: `calc(8.33% + ${theme.spacing(1)})`,
                  //   sm: `calc(8.33% + ${theme.spacing(1)})`,
                  //   md: '0',
                  // },