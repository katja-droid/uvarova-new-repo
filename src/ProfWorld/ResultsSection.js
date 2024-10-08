import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import arrow from '../assets/results-arrow.svg'
import arrowUp from '../assets/results-arrow-up.svg'
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
          py: {
            xxs: '24px',
            xs: '48px',
            sm: '60px',
            md: '84px',
            lg: '84px',
            xl: '84px',
            xxxl: '97px',
          },
        }}
      >
        <Container disableGutters maxWidth={false} sx={{ width: '100%', py: 0, px: '24px' }}>
          <Grid container spacing={2} justifyContent="center">
            {/* Block 1 */}
            <Grid
              item
              xs={12}
              md={12}
              lg={4}
              xl={4}
              xxxl={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: { xxs: 'left', sm: 'left', md: 'center', lg: 'center' },
                p: 0              
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: blockOneHeight,
                  p: '24px',
                  background: 'linear-gradient(to bottom, #8892FF, #6D6BE5)', // Linear gradient background
                  borderRadius: '16px', // Border radius
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
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
                  The project was highly successful in task completion, timely delivery, budget compliance, technology integration, and employee training, while simultaneously complying with all relevant laws and standards.
                </Typography>
              </Box>
            </Grid>

            {/* Block 2 */}
            <Grid
              item
              xs={12}
              lg={8}
              xl={8}
              xxxl={8}
              container
              spacing={2}
              sx={{
                flexWrap: 'wrap',
                textAlign: { xxs: 'left', sm: 'left', md: 'center', lg: 'center' },
              }}
            >
              {/* Item 1 */}
              <Grid
                item
                xs={12}
                sm={6}
                lg={6}
                xl={6}
                sx={{
                  p: '16px', // Padding for each individual item
                  backgroundColor: '#FFFFFF', // White background
                  border: '1px solid #EFEFF8', // Border
                  borderRadius: '16px', // Border radius
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: {
                    lg: blockTwoItemHeight.lg,
                    xl: blockTwoItemHeight.xl,
                    xxxl: blockTwoItemHeight.xxxl,
                    xxs: blockTwoItemHeight.xxs, // Stacked height on small screens
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontFamily: 'Calibre Regular',
                    textAlign: 'top',
                  }}
                >
                  Reducing routine tasks in HR and recruiting processes
                </Typography>
                <Typography
                  sx={{
                    fontSize: '32px',
                    fontFamily: 'Calibre Bold',
                    color: '#000000',
                    mt: 'auto', // Pushes the percentage to the bottom
                  }}
                >
                 
                 <img src={arrow}/> 70%
                </Typography>
              </Grid>

              {/* Item 2 */}
              <Grid
                item
                xs={12}
                sm={6}
                lg={6}
                xl={6}
                sx={{
                  p: '16px', // Padding for each individual item
                  backgroundColor: '#FFFFFF', // White background
                  border: '1px solid #EFEFF8', // Border
                  borderRadius: '16px', // Border radius
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: {
                    lg: blockTwoItemHeight.lg,
                    xl: blockTwoItemHeight.xl,
                    xxxl: blockTwoItemHeight.xxxl,
                    xxs: blockTwoItemHeight.xxs, // Stacked height on small screens
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontFamily: 'Calibre Regular',
                    textAlign: 'top',
                  }}
                >
                  100% of tasks completed within 24 months
                </Typography>
                <Typography
                  sx={{
                    fontSize: '32px',
                    fontFamily: 'Calibre Bold',
                    color: '#000000',
                    mt: 'auto', // Pushes the percentage to the bottom
                  }}
                >
                
                100%
                </Typography>
              </Grid>

              {/* Item 3 */}
              <Grid
                item
                xs={12}
                sm={6}
                lg={6}
                xl={6}
                sx={{
                  p: '16px', // Padding for each individual item
                  backgroundColor: '#FFFFFF', // White background
                  border: '1px solid #EFEFF8', // Border
                  borderRadius: '16px', // Border radius
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: {
                    lg: blockTwoItemHeight.lg,
                    xl: blockTwoItemHeight.xl,
                    xxxl: blockTwoItemHeight.xxxl,
                    xxs: blockTwoItemHeight.xxs, // Stacked height on small screens
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontFamily: 'Calibre Regular',
                    textAlign: 'top',
                  }}
                >
                  Ensured 90% adherence to ethical standards in testing/processes
                </Typography>
                <Typography
                  sx={{
                    fontSize: '32px',
                    fontFamily: 'Calibre Bold',
                    color: '#000000',
                    mt: 'auto', // Pushes the percentage to the bottom
                  }}
                >
               
               <img src={arrowUp}/>   90%
                </Typography>
              </Grid>

              {/* Item 4 */}
              <Grid
                item
                xs={12}
                sm={6}
                lg={6}
                xl={6}
                sx={{
                  p: '24px', // Padding for each individual item
                  backgroundColor: '#FFFFFF', // White background
                  border: '1px solid #EFEFF8', // Border
                  borderRadius: '16px', // Border radius
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: {
                    lg: blockTwoItemHeight.lg,
                    xl: blockTwoItemHeight.xl,
                    xxxl: blockTwoItemHeight.xxxl,
                    xxs: blockTwoItemHeight.xxs, // Stacked height on small screens
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontFamily: 'Calibre Regular',
                    textAlign: 'top',
                  }}
                >
                  Implemented 80% of necessary technologies at the start of the project.
                </Typography>
                <Typography
                  sx={{
                    fontSize: '32px',
                    fontFamily: 'Calibre Bold',
                    color: '#000000',
                    mt: 'auto', // Pushes the percentage to the bottom
                  }}
                >
                 
                 80%
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ResultsSection;
