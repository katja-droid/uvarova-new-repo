import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const NutritionistGoal = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ pb: { xl: '80px', sm: '60px', xxs: '48px' }, }}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} >
        <Grid item  xl={8} lg={10} sm={12} xxs={12} md={12}>
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
        </Grid>
      </Grid>

      {/* Content for goals description */}
      <Grid
        container
        justifyContent="center"
        sx={{ fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid item  xl={8} lg={10} sm={12} xxs={12} md={12}>
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            <Typography sx={{ pb: '16px', color: '#646470' }}>
              The main goal of the Virtual Nutritionist project is to develop a cohesive, user-friendly health monitoring
              application that:
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
                  1. Effective Tools for Diet and Physical Activity Control:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - Users receive effective tools to monitor their diet and physical activity, with <b>100%</b> expected to
                    experience positive effects from their usage.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  2. Enhanced Interaction with Healthcare Professionals:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - The platform facilitates interaction with healthcare professionals, leading to a <b>90%</b> satisfaction rate among users regarding their cooperation, ultimately enhancing their health.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  3. Personalized Dietary Recommendations:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - The system offers personalized dietary recommendations based on the data entered, allowing <b>80%</b> of users to enjoy a positive experience.
                  </li>
                </Box>
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect (NutritionistGoal);
