import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumProblem = () => {
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
          <div id="nutritionistProblem" style={{ width: '100%' }}>
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
                The Problem
              </Typography>

              <Box
                component="ul"
                sx={{
                  fontSize: '18px',
                  color: '#0A0A14',
                  lineHeight: '26px',
                  listStyle: 'none', // Remove default list markers
                  paddingLeft: 0,
                  padding: 0, // Ensure no padding on any side
                  '& li': {
                    mb: '8px', // Reduce the gap between main list items to 8px
                  },
                  fontFamily: 'Calibre Regular',
                  pt: 0,
                  mt: 0, // Ensure no margin on top
                }}
              >
                <Typography sx={{ color: 'EFEFF8', pb: {
                    lg: '24px', // 24px for lg
                    xxs: '16px', // 16px for xxs to md
                  }, }}>
                  Based on the user interviews that were conducted, the findings include:
                </Typography>
                <li>
                  <Typography sx={{ fontWeight: 'bold' }}>1. Intricate Navigation:</Typography>
                  <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}> {/* Removed padding and margin */}
                    <li>
                      Search results are either overly broad, leading to many similar pages/sites, or overly narrow, displaying irrelevant information for a specific website.
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography sx={{ fontWeight: 'bold' }}>2. Inaccurate Search Results:</Typography>
                  <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}> {/* Removed padding and margin */}
                    <li>
                      Search results are either overly broad, leading to many similar pages/sites, or overly narrow, displaying irrelevant information for a specific website.
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography sx={{ fontWeight: 'bold' }}>3. Disconnect in Priorities:</Typography>
                  <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}> {/* Removed padding and margin */}
                    <li>
                      A disconnect exists between the priorities showcased on the site and the priorities held by both citizens and staff.
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography sx={{ fontWeight: 'bold' }}>4. Lack of User Awareness:</Typography>
                  <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}> {/* Removed padding and margin */}
                    <li>
                      Users arriving from search engines often lack awareness of their location and possible next steps.
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography sx={{ fontWeight: 'bold' }}>5. Dispersed Information:</Typography>
                  <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}> {/* Removed padding and margin */}
                    <li>
                      Information is dispersed across departments, often duplicated and conflicting, and is presented in a manner that hinders quick understanding and access to answers.
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography sx={{ fontWeight: 'bold' }}>6. Lack of Digital Experience Assessment:</Typography>
                  <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}> {/* Removed padding and margin */}
                    <li>
                      There is no mutual agreement on whether the digital experience is progressing over time due to the absence of continuous user research and testing with actual website visitors.
                    </li>
                  </Box>
                </li>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect(PoliticalForumProblem);
