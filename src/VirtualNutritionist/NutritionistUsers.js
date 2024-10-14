import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import withScrollEffect from '../withScrollEffect.js';

const NutritionistUsers = () => {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ pb: { xl: '80px', sm: '60px', xxs: '48px' }, }}>
        {/* Container for the title */}
        <Grid container justifyContent="center" spacing={0} >
          <Grid item  xl={8} lg={10} sm={12} xxs={12} md={12} >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xxs: '30px', sm: '34px', md: '40px' },
                fontFamily: 'Playfair Display Bold',
                pb: {
                  lg: '24px', // 24px for lg
                  xxs: '16px', // 16px for xxs to md
                },
              }}
            >
              Users
            </Typography>
          </Grid>
        </Grid>

        {/* Container for cards that is 8 columns wide */}
        <Grid
          container
          justifyContent="center"
          sx={{ py: 2, fontFamily: 'Calibre Regular', fontSize: '18px' }}
        >
          <Grid item  xl={8} lg={10} sm={12} xxs={12} md={12}>
            <Grid container spacing={4}>
              {/* Each card will be 4 columns wide */}
              <Grid item md={6} xs={12}>
                <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '20px', // Headings 20px
                      fontWeight: 'bold',
                      pb: '8px',
                    }}
                  >
                    1. People with busy schedules
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                      pb: '8px',
                    }}
                  >
                    <b>Needs:</b> Needing quick and convenient tools for health monitoring.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                    }}
                  >
                    <b>Users:</b> approximately 40%.
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '20px', // Headings 20px
                      fontWeight: 'bold',
                      pb: '8px',
                    }}
                  >
                    2. Fitness enthusiasts
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                      pb: '8px',
                    }}
                  >
                    <b>Needs:</b> Access to tools for healthy eating and physical activity monitoring.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                    }}
                  >
                    <b>Users:</b> around 30%.
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '20px', // Headings 20px
                      fontWeight: 'bold',
                      pb: '8px',
                    }}
                  >
                    3. People with chronic illnesses
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                      pb: '8px',
                    }}
                  >
                    <b>Needs:</b> Requiring tracking of tests and interaction with doctors.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                    }}
                  >
                    <b>Users:</b> approximately 20%.
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '20px', // Headings 20px
                      fontWeight: 'bold',
                      pb: '8px',
                    }}
                  >
                    4. Health-conscious individuals
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                      pb: '8px',
                    }}
                  >
                    <b>Needs:</b> Looking for ways to monitor and analyze their habits and progress.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                    }}
                  >
                    <b>Users:</b> about 10%.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default withScrollEffect (NutritionistUsers);
