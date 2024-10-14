import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import arrow from '../assets/results-arrow.svg';
import arrowUp from '../assets/results-arrow-up.svg';
import withScrollEffect from '../withScrollEffect.js';

const ResultsSection = () => {
  const blockOneHeight = {
    xxxl: '382px',
    xl: '382px',
    lg: '382px',
    md: '198px',
    sm: '217px',
    xxs: '269px',
  };

  const blockTwoItemHeight = {
    lg: `calc(${blockOneHeight.lg} / 2)`, // Half the height of Block One on large screens
    xl: `calc(${blockOneHeight.xl} / 2)`,
    xxxl: `calc(${blockOneHeight.xxxl} / 2)`,
    xxs: '191px', // Fixed height on small screens when stacked in columns
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          backgroundColor: '#fff',
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
        >
          <Grid
            container
            sx={{
              justifyContent: {
                xs: 'center',
                sm: 'center',
                md: 'center',
                lg: 'space-between',
                xl: 'space-between',
                xxxl: 'space-between',
              },
            }}
          >
            {/* First Column - Block 1 */}
            <Grid
              item
              xxs={12}
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: blockOneHeight,
                  p: '24px',
                  background: 'linear-gradient(to bottom, #8892FF, #6D6BE5)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Heading */}
                <Typography
                  sx={{
                    fontSize: {
                      xxxl: '40px',
                      xl: '40px',
                      lg: '40px',
                      md: '40px',
                      sm: '34px',
                      xs: '34px',
                      xxs: '34px',
                    },
                    fontFamily: 'Playfair Display Bold',
                    color: '#FFFFFF',
                  }}
                  variant="h4"
                >
                  Results
                </Typography>

                {/* Paragraph */}
                <Typography
                  sx={{
                    fontSize: '18px',
                    lineHeight: '26px',
                    fontFamily: 'Calibre Regular',
                    color: '#FFFFFF',
                  }}
                >
                  The project was highly successful in task completion, timely delivery, budget compliance, technology integration, and employee training, while simultaneously complying with all relevant laws and standards.
                </Typography>
              </Box>
            </Grid>

            {/* Second Column - Block 2 */}
            <Grid
              item
              xxs={12}
              xs={12}
              sm={12}
              md={7}
              lg={7}
              xl={7}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              {/* Item 1 */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  p: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EFEFF8',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: {
                    lg: blockTwoItemHeight.lg,
                    xl: blockTwoItemHeight.xl,
                    xxxl: blockTwoItemHeight.xxxl,
                    xxs: blockTwoItemHeight.xxs,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontFamily: 'Calibre Regular',
                    textAlign: 'left',
                  }}
                >
                  Reducing routine tasks in HR and recruiting processes
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 'auto',
                  }}
                >
             
                  <Typography
                    sx={{
                      fontSize: '32px',
                      fontFamily: 'Calibre Bold',
                      color: '#000000',
                      textAlign: 'center',
                      
                    }}
                  >
                         <img
                    src={arrow}
                    alt="arrow"
                    style={{
                      height: '100%',
                      marginRight: '8px',
                    }}
                  />
                    70%
                  </Typography>
                </Box>
              </Grid>

              {/* Item 2 */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  p: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EFEFF8',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: {
                    lg: blockTwoItemHeight.lg,
                    xl: blockTwoItemHeight.xl,
                    xxxl: blockTwoItemHeight.xxxl,
                    xxs: blockTwoItemHeight.xxs,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontFamily: 'Calibre Regular',
                    textAlign: 'left',
                  }}
                >
                  100% of tasks completed within 24 months
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 'auto',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '32px',
                      fontFamily: 'Calibre Bold',
                      color: '#000000',
                      textAlign: 'center',
                    }}
                  >
                    100%
                  </Typography>
                </Box>
              </Grid>

              {/* Item 3 */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  p: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EFEFF8',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: {
                    lg: blockTwoItemHeight.lg,
                    xl: blockTwoItemHeight.xl,
                    xxxl: blockTwoItemHeight.xxxl,
                    xxs: blockTwoItemHeight.xxs,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontFamily: 'Calibre Regular',
                    textAlign: 'left',
                  }}
                >
                  Ensured 90% adherence to ethical standards in testing/processes
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 'auto',
                  }}
                >
                 
                  <Typography
                    sx={{
                      fontSize: '32px',
                      fontFamily: 'Calibre Bold',
                      color: '#000000',
                      textAlign: 'center',
                    }}
                  > <img
                  src={arrowUp}
                  alt="arrow-up"
                  style={{
                    height: '100%',
                    marginRight: '8px',
                  }}
                />
                    90%
                  </Typography>
                </Box>
              </Grid>

              {/* Item 4 */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  p: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EFEFF8',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: {
                    lg: blockTwoItemHeight.lg,
                    xl: blockTwoItemHeight.xl,
                    xxxl: blockTwoItemHeight.xxxl,
                    xxs: blockTwoItemHeight.xxs,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontFamily: 'Calibre Regular',
                    textAlign: 'left',
                  }}
                >
                  Implemented 80% of necessary technologies at the start of the project.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 'auto',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '32px',
                      fontFamily: 'Calibre Bold',
                      color: '#000000',
                      textAlign: 'center',
                    }}
                  >
                    80%
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect (ResultsSection);
