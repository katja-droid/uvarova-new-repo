import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nutritionist-questions.png';
import withScrollEffect from '../withScrollEffect.js';

const QuestionsSection = () => {
  return (
    <div id="questions-v">
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#fff',
          color: '#0A0A14', // Ensure consistent color
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
      >
        <Container disableGutters maxWidth={false}>
          <Grid
            container
            sx={{
              justifyContent: {
                xs: 'center',
                sm: 'center',
                md: 'center',
                lg: 'center',
                xl: 'space-between',
                xxl: 'space-between',
              },
            }}
          >
            {/* First Column */}
            <Grid
              item
              xxs={12}
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                sx={{
                  display: 'flex',
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                    xl: '100%',
                    xxl: '275px',
                  },
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: { md: '30px', xxs: '25px' },
                    fontFamily: 'Playfair Display Bold', // Consistent heading font
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
                    fontFamily: 'Calibre Regular', // Same paragraph font as the previous sections
                  }}
                >
                  Based on the answers to each category, the user’s health status is analyzed, and necessary tests are identified.
                </Typography>
              </Box>
            </Grid>

            {/* Second Column - Image */}
            <Grid item xxs={12} xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
              <Box
                sx={{
                  width: {
                    xs: '2',
                    sm: '2',
                    md: '304px',
                    lg: '304px',
                    xl: '304px',
                    xxl: '304px',
                  },
                  paddingLeft: {
                    xs: `calc(8.33% + ${theme.spacing(1)})`,
                    sm: `calc(8.33% + ${theme.spacing(1)})`,
                    md: `calc(8.33% + ${theme.spacing(1)})`,
                    lg: `calc(8.33% + ${theme.spacing(1)})`,
                    xl: `calc(8.33% + ${theme.spacing(1)})`,
                    xxl: `calc(8.33% + ${theme.spacing(1)})`,
                  },
                  paddingRight: {
                    xs: `calc(8.33% + ${theme.spacing(1)})`,
                    sm: `calc(8.33% + ${theme.spacing(1)})`,
                    md: '0',
                  },
                }}
                justifyContent="center"
              >
                <img width="100%" src={image} alt="Questions" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
    </div>
  );
};

export default withScrollEffect (QuestionsSection);
