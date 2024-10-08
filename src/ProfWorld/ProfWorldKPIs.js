import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ProfWorldKPIs = () => {
  return (
    <Container disableGutters maxWidth={false}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
        <Grid item sm={12} xxs={12} md={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: '24px',
            }}
          >
            Design KPIs
          </Typography>
        </Grid>
      </Grid>

      {/* Content for KPIs */}
      <Grid
        container
        justifyContent="center"
        sx={{ py: 2, fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid item sm={12} xs={12}>
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            <Typography sx={{ pb: '16px', color: '#646470' }}>
              To assess the success of the application design, the following KPIs will be used:
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                paddingLeft: 0,
                '& li': {
                  mb: '25px', // Adds spacing between list items
                },
              }}
            >
              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  1. User Satisfaction Level:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - Should be no less than <b>85%</b> according to surveys after using the application.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  2. Engagement Level:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - Users should spend an average of at least <b>30 minutes</b> per week interacting with the application.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  3. User Conversion Rate:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - We aim for <b>60%</b> of new users to actively use the application after initial registration.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  4. Daily Active Users (DAU):
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - The goal is to reach <b>10,000 DAU</b> within the first 6 months after launch.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  5. Loading Speed:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - The application should load in less than <b>3 seconds</b> to ensure a comfortable user experience.
                  </li>
                </Box>
              </li>
            </Box>

            <Typography sx={{ pt: '16px' }}>
              These aspects will help create a targeted, effective, and comprehensive solution for health monitoring using mobile and web technologies within the Virtual Nutritionist project.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfWorldKPIs;
