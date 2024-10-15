import React from 'react';
import { Box, Typography, Container, Grid, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import largeImage from '../assets/nutritionist-questions.png'; // Large image for lg and above
import smallImage from '../assets/nutritionist-questions-md.png'; // Image for md and below
import withScrollEffect from '../withScrollEffect.js';

const QuestionsSection = () => {
  // Detect screen size, true if screen size is lg or smaller
  const isMdAndBelow = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div id="questions-v">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#fff',
            color: '#0A0A14',
            display: 'flex',
            justifyContent: 'flex-start',
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
          >
            <Grid
              container
              sx={{
                justifyContent: {
                  xxs: 'space-between',
                  sm: 'space-between',
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
                sm={9}
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
                      lg: '304px',
                    },
                    justifyContent: {
                      xxs: 'center',
                      sm: 'flex-start',
                      md: 'center',
                    },
                    alignItems: 'center',
                    height: '100%',
                    flexDirection: 'column',
                    width: { md: '276px', xxs: '100%', lg: '100%' },
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
                    Questions
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'left',
                      pb: { lg: '24px', xxs: '16px' },
                      fontFamily: 'Calibre Regular',
                    }}
                  >
                    Based on the answers to each category, the user’s health status is analyzed, and necessary tests are identified.
                  </Typography>
                </Box>
              </Grid>

              {/* Empty Grid item */}
              <Grid item lg={1} justifyContent="center" alignItems="center"   sx={{ 
    display: {
      xxs: 'none',  // Hide on xxs
      sm: 'block',  // Show on sm
      md: 'none',   // Hide on md
      lg: 'block',  // Show on lg and above
    },
  }}/>

              {/* Image Column */}
              <Grid item xxs={12} xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: {
                      xxs: 'flex-end',
                      md: 'flex-end',
                      lg: 'flex-start',
                    },
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: {md: '100%', xxs: '75%'},
                      display: 'flex',
                      justifyContent: {
                        xxs: 'flex-end',
                        md: 'flex-end',
                        lg: 'flex-start',
                      },
                      alignItems: 'center',
                    }}
                  >
                    {/* Conditionally render the image based on screen size */}
                    <img
                      src={isMdAndBelow ? smallImage : largeImage}
                      alt="Questions"
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

export default withScrollEffect(QuestionsSection);
