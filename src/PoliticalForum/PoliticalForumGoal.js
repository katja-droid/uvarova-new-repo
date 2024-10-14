import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumGoal = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ pb: { xl: '80px', lg: '60px', xxs: '0' } }}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0}>
        <Grid
          item
          xl={8}
          lg={10} // 10 columns on lg
          md={12} // 100% on md and smaller
          sm={12}
          xs={12}
        >
          <Box sx={{ pb: { xl: '80px', sm: '60px', xxs: '48px' } }}>
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
              Goals of the Project
            </Typography>

            <Grid container spacing={4}>
              {/* Each goal card will be 6 columns wide */}
              <Grid item md={6} xs={12}>
                <Box
                  sx={{
                    height: '100%', // Ensures equal height for all cards
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #EFEFF8',
                    padding: { xl: '32px', lg: '24px', xxs: '16px' },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '20px', // Headings 20px
                      fontWeight: 'bold',
                      pb: '16px', // 16px gap between heading and paragraph
                    }}
                  >
                    1. Long-term goal of the project
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                    }}
                  >
                    Improve access to information and increase public awareness of ongoing campaigns (engagement) through the website group.
                  </Typography>
                  <Box sx={{ mt: 'auto' }} /> {/* Ensures content is pushed upwards */}
                </Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <Box
                  sx={{
                    height: '100%', // Ensures equal height for all cards
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #EFEFF8',
                    padding: { xl: '32px', lg: '24px', xxs: '16px' },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '20px', // Headings 20px
                      fontWeight: 'bold',
                      pb: '16px', // 16px gap between heading and paragraph
                    }}
                  >
                    2. My goal in the project
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                    }}
                  >
                    Improve navigation and search to help both internal and external stakeholders find what they are looking for faster.
                  </Typography>
                  <Box sx={{ mt: 'auto' }} /> {/* Ensures content is pushed upwards */}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect(PoliticalForumGoal);
