import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nutritionist-activity.png';

const ActivitySection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#fff',
          py: {
            xxs: '24px',
            xs: '48px',
            sm: '60px',
            md: '84px',
            lg: '84px',
            xl: '84px',
            xxl: '97px',
          },
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            direction={{ xs: 'column', md: 'row' }} // Stack on xxs-sm, side-by-side on md and above
          >
            {/* Text Column (order it before the image on small screens) */}
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
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
                  The «Activities» section will focus on how users can achieve the best weight loss results by combining cardio and strength training.
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
                  Basic exercises will strengthen muscles, reduce excess bulk, increase endurance, and ultimately allow users to reach their fitness goals more quickly.
                </Typography>
              </Box>
            </Grid>

            {/* Image Column (order it after the text on small screens) */}
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  pr: { md: '8.33%' }, // Padding on the right for md and above
                }}
              >
                <img src={image} alt="Activity" style={{ width: '100%', height: 'auto' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ActivitySection;
