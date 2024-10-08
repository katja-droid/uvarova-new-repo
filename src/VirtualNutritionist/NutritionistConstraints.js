import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const NutritionistConstraints = () => {
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
            Project's Constraints
          </Typography>
        </Grid>
      </Grid>

      {/* Content for constraints description */}
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
              The Virtual Nutritionist project faces several constraints:
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
                  1. Development timeline:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - The initial version for iOS must be ready within 6 months, followed by adaptation for Android.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  2. Budget:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - Limited resources for marketing and project support after launch.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  3. Technical limitations:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - The need for synchronization between mobile and web versions, requiring careful planning of the system architecture.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  4. Regulatory requirements:
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    - Compliance with data privacy and medical standards, which may slow down development.
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

export default NutritionistConstraints;
