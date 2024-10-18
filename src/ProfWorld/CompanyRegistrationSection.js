import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import gif from '../assets/pw2.gif'; // Replace with your GIF
import bg from '../assets/registration-background.png'; // Replace with your background
import RatioGif from './RatioGif';
import withScrollEffect from '../withScrollEffect.js';
import FormattedText from '../FormattedText'; // Import your FormattedText component

const CompanyRegistrationSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
      >
        {/* Text and GIF Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            width: '100%',
            py: 0, // Removed padding from container
          }}
        >
          <Grid container spacing={{ xs: 0, xl: 2 }} justifyContent="center" alignItems="center" xxs={12} lg={10} xl={12} sx={{ margin: '0 auto' }}>
            {/* Text Section */}
            <Grid
              item
              xxs={12}
              xl={5}
              xxl={5}
              sx={{
                order: { xs: 1, lg: 2 }, // Text comes first on smaller screens, second on larger screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xxs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xxs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: 'left', // Left-align text
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold' }}
                  variant="h3"
                >
                  Company Registration
                </Typography>
                <Typography
                  sx={{ fontSize: { md: '24px', xxs: '18px' }, fontFamily: 'Playfair Display Bold', pb: '16px' }}
                  variant="h3"
                >
                  (before verification)
                </Typography>

                <FormattedText
                  text={`To register a company before verification, you must enter the company name, specify the number of employees, provide the EDRPO code, select the field of activity, and describe the main products.\n\nIn addition, you must add a website link, upload a scanned copy of the EDRPO abstract, then review the data and wait for verification by a verifier.`}
                />
              </Box>
            </Grid>

            {/* GIF Section - Takes 7 cols on lg and xxl */}
            <Grid
              item
              xxs={12}
              xl={7}
              xxl={7}
              xxxl={7}
              sx={{
                order: { xxs: 2, xl: 1 }, // GIF comes second on smaller screens, first on larger screens
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center', // GIF comes second on smaller screens, first on larger screens
                  maxWidth: { xxxl: '673px' },
                }}
              >
                <img src={gif} width="100%" alt="Registration GIF" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(CompanyRegistrationSection);
