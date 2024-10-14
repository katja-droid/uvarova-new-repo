import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const NutritionistProblem = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ pb: { xl: '80px', sm: '60px', xxs: '48px' }, }}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0}>
        <Grid item xl={8} lg={10} sm={12} xxs={12} md={12}>
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
        </Grid>
      </Grid>

      {/* Content for problems */}
      <Grid
        container
        justifyContent="center"
        sx={{ fontFamily: 'Calibre Regular', fontSize: '18px' }}
        py={0}
      >
        <Grid item py={0}  xl={8} lg={10} sm={12} xxs={12} md={12}>
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
              pt: 0,
            }}
          >
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                paddingLeft: 0,
                pt: 0, // Ensure no padding top for the ul
                '& li': {
                  mb: '25px', // Adds spacing between list items
                  pt: 0, // Ensure no padding top for the li elements
                },
              }}
            >
              <li>
                <Typography sx={{ fontWeight: 'bold', pt: 0 }}> {/* Remove padding top */}
                  1. Lack of Personalization:
                </Typography>
                <Typography>
                  - Existing health monitoring applications often do not consider the unique characteristics of users.
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  - They fail to account for individual lifestyles and professional requirements.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold', pt: 0 }}> {/* Remove padding top */}
                  2. Limited Interaction with Medical Specialists:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  - Many current applications do not provide enough information or access to health analytics provided by medical experts.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold', pt: 0 }}> {/* Remove padding top */}
                  3. Insufficient Health Analytics:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  - Health data and analysis provided by existing tools are often insufficient for comprehensive health monitoring.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold', pt: 0 }}> {/* Remove padding top */}
                  4. Ineffective Meal Planning:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  - Many applications lack effective tools for meal planning that align with health goals.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold', pt: 0 }}> {/* Remove padding top */}
                  5. Inadequate Progress Tracking:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  - Progress tracking tools are often insufficient, making it difficult to monitor health improvements.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold', pt: 0 }}> {/* Remove padding top */}
                  6. Virtual Nutritionist's Approach:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  - Providing a user-friendly interface that addresses individual needs and ensures a comprehensive health monitoring approach.
                </Typography>
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect(NutritionistProblem);
