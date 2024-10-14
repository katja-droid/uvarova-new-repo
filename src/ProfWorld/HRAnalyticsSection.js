import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/hranalytics.png'
import withScrollEffect from '../withScrollEffect.js';

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
        {/* Text and GIF Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            width: '100%',
            py: 0, // Removed padding from container
          }}
        >
          <Grid container spacing={2} justifyContent="center" alignItems="center" xxs={12} lg={10} xl={12}  sx={{margin: '0 auto'}}>
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
                textAlign:  'left'  // Center text on small screens, left-align on large
              }}
            >
              <Box>
              <Typography sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '24px' }} variant="h3">
              HR analytics</Typography>
                <Typography sx={{ pb: { md: '24px', xxs: '16px' }, fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
                HR Analytics is a set of methods for evaluating the effectiveness of the hiring process, allowing HR professionals and recruiters to analyze costs and risks while identifying the best candidates.
               </Typography>
               <Typography sx={{ pb: { md: '24px', xxs: '16px' }, fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
               The system includes analytical data with the ability to generate reports on key parameters such as job availability, recruiter performance, and test results.
               </Typography>
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
                order: { xxs: 2, xl: 1 }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', // GIF comes second on smaller screens, first on larger screens
                 maxWidth: {xxxl: '673px'}, }}>
                {/* Use RatioGif here with a GIF */}
              <img src={img} width="100%"/>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect (HRAnalyticsSection);
