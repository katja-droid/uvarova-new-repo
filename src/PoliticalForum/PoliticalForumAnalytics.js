import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumAnalytics = () => {
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
          <div id="nutritionistAnalytics" style={{ width: '100%' }}>
            <Box sx={{ pb: { xl: '80px', sm: '60px', xxs: '48px' } }}>
              {/* Container for the title */}
              <Grid container justifyContent="center" spacing={0}>
                <Grid item sm={12} xxs={12}>
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
                    Analytics
                  </Typography>
                </Grid>
              </Grid>

              {/* Container for analytics cards */}
              <Grid container justifyContent="center">
                <Grid item sm={12} xs={12}>
                  <Grid container spacing={4}>
                    {/* Each analytics card will be 6 columns wide */}
                    {['Traffic', 'Mobile Traffic', 'Users are Searching', 'Most Visited Pages'].map(
                      (title, index) => (
                        <Grid item md={6} xs={12} key={index}>
                          <Box
                            sx={{
                              border: '1px solid #EFEFF8',
                              padding: { xl: '32px', lg: '24px', xxs: '16px' },
                              height: '100%', // Ensures equal height for all cards
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: 'Calibre Regular',
                                fontSize: '20px', // Headings 20px
                                fontWeight: 'bold',
                                pb: '8px',
                              }}
                            >
                              {index + 1}. {title}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: 'Calibre Regular',
                                fontSize: '18px', // Text 18px
                              }}
                            >
                              {getTextForAnalytics(title)}
                            </Typography>
                          </Box>
                        </Grid>
                      )
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

// Helper function to return the text for each analytics card
const getTextForAnalytics = (title) => {
  switch (title) {
    case 'Traffic':
      return 'We are aware that the majority of traffic originates from search engines, with mobile devices leading the split at 52% compared to 48% for desktop.';
    case 'Mobile Traffic':
      return 'Mobile traffic includes a significant number of Mobile Safari users from Europe, while desktop traffic makes up a significant portion of Windows 10 users.';
    case 'Users are Searching':
      return 'Users predominantly seek news, facts, and reference material on the site. The data indicates that visitors mainly consume information rather than engage in communication.';
    case 'Most Visited Pages':
      return 'The most visited pages include newsletters, liaison offices (EPLOS), homepage and MPs, with sub-categories receiving more traffic than the homepage.';
    default:
      return '';
  }
};

export default withScrollEffect(PoliticalForumAnalytics);
