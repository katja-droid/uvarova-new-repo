import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/hranalytics.png'; // Replace with your image
import withScrollEffect from '../withScrollEffect.js';
import FormattedText from '../FormattedText'; // Adjust the path as necessary

const HRAnalyticsSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
        id="hr-analytics-p"
      >
        {/* Text and Image Section */}
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
                order: { xxs: 1, xl: 2 }, // Text comes first on smaller screens, second on larger screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xxs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xxs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: 'left' // Center text on small screens, left-align on large
              }}
            >
              <Box>
                <Typography sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '16px' }} variant="h3">
                  HR Analytics
                </Typography>
                <FormattedText 
                  text="HR Analytics is a set of methods for evaluating the effectiveness of the hiring process, allowing HR professionals and recruiters to analyze costs and risks while identifying the best candidates."
                  sx={{ pb: '8px', fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}
                />
                <FormattedText 
                  text="The system includes analytical data with the ability to generate reports on key parameters such as job availability, recruiter performance, and test results."
                  sx={{ pb: { md: '24px', xxs: '16px' }, fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}
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
                order: { xxs: 2, xl: 1 } // Image comes second on smaller screens
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: { xxxl: '673px' } }}>
                <img src={img} alt="HR Analytics" width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(HRAnalyticsSection);
