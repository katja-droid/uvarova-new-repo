import React from 'react';
import { Box, Typography, Container, Grid, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import largeImage from '../assets/nutritionist-activity.png'; // Default image for md and above
import smallImage from '../assets/nutritionist-activity-md.png'; // Image for below md
import withScrollEffect from '../withScrollEffect.js';

const ActivitySection = () => {
  // Detect screen size below md
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div id="activity-v">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#fff',
            py: { xl: '80px', sm: '60px', xxs: '48px' },
          }}
        >
          <Container maxWidth={false}>
            <Grid
              container
              spacing={1}
              alignItems="center"
              sx={{ justifyContent: {
                xxs: 'center',
                sm: 'center',
                md: 'center',
                lg: 'center',
                xl: 'space-between',
                xxl: 'space-between',
              },}}
              direction={{ xs: 'column', md: 'row' }} // Stack on xxs-sm, side-by-side on md and above
            >
              {/* Text Column (order it before the image on small screens) */}
              <Grid item xs={12} lg={4} md={6} order={{ xxs: 1, md: 3 }}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: 'left',
                      fontSize: { md: '30px', xxs: '25px' },
                      fontFamily: 'Playfair Display Bold',
                      pb: '16px',
                    }}
                  >
                    Activity
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'left',
                      fontSize: '18px',
                      lineHeight: '26px',
                      fontFamily: 'Calibre Regular',
                      pb: { lg: '24px', xxs: '16px' },
                    }}
                  >
                    The «Activities» section will focus on how users can achieve the best weight loss results by combining cardio and strength training.
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'left',
                      fontSize: '18px',
                      lineHeight: '26px',
                      fontFamily: 'Calibre Regular',
                      pb: { lg: '24px', xxs: '16px' },
                    }}
                  >
                    Basic exercises will strengthen muscles, reduce excess bulk, increase endurance, and ultimately allow users to reach their fitness goals more quickly.
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                lg={1} // Size for large screens and above
                justifyContent="center"
                alignItems="center"
                order={2}
                sx={{
                  display: {
                    xxs: 'none',  // Hide on xxs
                    sm: 'block',  // Show on sm
                    md: 'none',   // Hide on md
                    lg: 'block',  // Show on lg and above
                  },
                }}
              ></Grid>

              {/* Image Column (order it after the text on small screens) */}
              <Grid item xxs={12} md={6} order={{ xxs: 3, md: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { xxs: 'center', md: 'flex-start' },
                  }}
                >
                  <Box sx={{width: {xxs: '51%',md: '100%' }}}>
                  {/* Conditionally render the image based on screen size */}
                  <img
                    src={isBelowMd ? smallImage : largeImage}
                    alt="Activity"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                lg={1} // Size for large screens and above
                justifyContent="center"
                alignItems="center"
                order={4}
                sx={{
                  display: {
                    xxs: 'none',  // Hide on xxs
                    sm: 'block',  // Show on sm
                    md: 'none',   // Hide on md
                    lg: 'block',  // Show on lg and above
                  },
                }}
              ></Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default withScrollEffect(ActivitySection);
