import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const PoliticalForumAnalytics = () => {
  return (
    <div id="nutritionistAnalytics" style={{ width: '100%' }}>
      {/* Container for the title */}
    
        <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
          <Grid item sm={12} xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xxs: '30px', sm: '34px', md: '40px' },
                fontFamily: 'Playfair Display Bold',
                pb: '32px',
              }}
            >
              Analytics
            </Typography>
          </Grid>
        </Grid>

        {/* Container for analytics cards that is 8 columns wide */}
        <Grid container justifyContent="center" sx={{ py: 2 }}>
          <Grid item sm={12} xs={12}>
            <Grid container spacing={4}>
              {/* Each analytics card will be 4 columns wide */}
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
                    1. Traffic
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                      pb: '8px',
                    }}
                  >
                    We are aware that the majority of traffic originates from search engines, with mobile devices leading the split at 52%, compared to 48% for desktop.
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
                    2. Mobile Traffic
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                      pb: '8px',
                    }}
                  >
                    Mobile traffic includes a significant number of Mobile Safari users from Europe, while desktop traffic consists mainly of Windows 10 users.
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
                    3. Users are Searching
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                      pb: '8px',
                    }}
                  >
                    Users predominantly seek news, facts, and reference material on the site, focusing on specific queries.
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
                    4. Most Visited Pages
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Calibre Regular',
                      fontSize: '18px', // Text 18px
                      pb: '8px',
                    }}
                  >
                    The most visited pages include newsletters, liaison offices (EPLOS), homepage, and MPs. Sub-categories tend to receive more traffic than the homepage.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
};

export default PoliticalForumAnalytics;
