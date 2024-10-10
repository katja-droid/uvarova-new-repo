import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumGoal = () => {
  return (
    <>
    <Box sx={{ pb: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' } }}>
      <Grid container justifyContent="center" spacing={0} >
        <Grid item sm={12} xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: '32px',
            }}
          >
            Goals of the Project
          </Typography>
        </Grid>
      </Grid>

      {/* Container for goal cards */}
      <Grid container justifyContent="center" sx={{ py: 2 }}>
        <Grid item sm={12} xs={12}>
          <Grid container spacing={4} alignItems="stretch">
            {/* Each goal card will be 6 columns wide */}
            <Grid item sm={6} xs={12}>
              <Box
                sx={{
                  border: '1px solid #EFEFF8',
                  padding: '32px',
                  height: {
                    xxxl: '198px',
                    xl: '198px',
                    lg: '198px',
                    md: '208px',
                    sm: 'auto',
                    xxs: 'auto', // Auto height for smaller screens
                  },
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
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box
                sx={{
                  border: '1px solid #EFEFF8',
                  padding: '32px',
                  height: {
                    xxxl: '198px',
                    xl: '198px',
                    lg: '198px',
                    md: '208px',
                    sm: 'auto',
                    xxs: 'auto', // Auto height for smaller screens
                  },
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
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Box>
    </>
  );
};

export default withScrollEffect (PoliticalForumGoal);
