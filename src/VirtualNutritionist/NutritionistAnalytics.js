import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import withScrollEffect from '../withScrollEffect.js';

const NutritionistAnalytics = () => {
  return (
    <Container id="nutritionistAnalytics" disableGutters maxWidth={false} sx={{ pb: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' } }}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} >
        <Grid item sm={12} xxs={12} md={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: '24px',
            }}
          >
            Analytics
          </Typography>
        </Grid>
      </Grid>

      {/* Container for analytics cards */}
      <Grid
        container
        justifyContent="center"
        sx={{ py: 2, fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid item sm={12} xs={12}>
          <Grid container spacing={4}>
            {/* Each analytics card will be 6 columns wide */}
            <Grid item sm={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  1. Caloric Balance
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  <b>70% of users</b> will appreciate the automatic calculation of consumed and burned calories, along
                  with improvement recommendations.
                </Typography>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  2. Progress Tracking
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  <b>80% of users</b> will regularly utilize monitoring of weight, physical activity, and other metrics.
                </Typography>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  3. Nutritional Analysis
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  <b>60% of users</b> will find it beneficial to assess the balance of their diet through built-in
                  reports and recommendations.
                </Typography>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  4. Interactive Graphs
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  <b>75% of users</b> will prefer visual data representation of health information to easily track their
                  achievements.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect (NutritionistAnalytics);
