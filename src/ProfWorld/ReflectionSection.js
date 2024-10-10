import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import withScrollEffect from '../withScrollEffect.js';

const ReflectionSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' },
        }}
      >
        <Container disableGutters maxWidth={false} sx={{ width: '100%', py: 0 }}>
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              sx={{
                textAlign: 'center',
                pb: '24px',
                width: { xxs: '100%', lg: '100%', xl: '935px', xxl: '935px' }, // 100% width for xxs-lg, 935px for xl and xxl
                maxWidth: { xxs: '100%', lg: '100%', xl: '935px', xxl: '935px' }, // Ensuring it doesn't exceed 935px on xl-xxl
                mx: 'auto', // Center align the block horizontally
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                  fontFamily: 'Playfair Display Bold',
                  pb: '24px',
                }}
                variant="h3"
              >
                Reflection
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={12}
              lg={10}  // 10 columns on large screens
              xl={6}   // 6 columns on extra-large screens
              xxxl={6} // 6 columns on triple extra-large screens
              sx={{
                textAlign: { xxs: 'left' },
                pb: '24px',
              }}
            >
              {/* Item 1 */}
              <Box sx={{ mb: '8px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Medium',
                    fontSize: '18px',
                    lineHeight: '26px',
                  }}
                >
                  1. Experience and Skills:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px',
                    lineHeight: '26px',
                  }}
                >
                  Significant experience in developing comprehensive SaaS solutions and enhanced UX/UI design and project management skills.
                </Typography>
              </Box>

              {/* Item 2 */}
              <Box sx={{ mb: '8px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Medium',
                    fontSize: '18px',
                    lineHeight: '26px',
                  }}
                >
                  2. Process Management:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px',
                    lineHeight: '26px',
                  }}
                >
                  Successfully managed the design process by creating roadmaps and ensuring collaboration with stakeholders, contributing to the effective implementation of the project.
                </Typography>
              </Box>

              {/* Item 3 */}
              <Box sx={{ mb: '8px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Medium',
                    fontSize: '18px',
                    lineHeight: '26px',
                  }}
                >
                  3. Research and Analysis:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px',
                    lineHeight: '26px',
                  }}
                >
                  User research and competitive analysis enabled us to make informed decisions and create effective design solutions.
                </Typography>
              </Box>

              {/* Item 4 */}
              <Box sx={{ mb: '8px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Medium',
                    fontSize: '18px',
                    lineHeight: '26px',
                  }}
                >
                  4. Overcoming Challenges:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px',
                    lineHeight: '26px',
                  }}
                >
                  By applying accessible research methods, I learned to overcome funding-related limitations and demonstrated the ability to adapt and find solutions in challenging situations.
                </Typography>
              </Box>

              {/* Item 5 */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Medium',
                    fontSize: '18px',
                    lineHeight: '26px',
                  }}
                >
                  5. Teamwork:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px',
                    lineHeight: '26px',
                  }}
                >
                  By working closely with the development team and gathering feedback from users, the team was able to produce a higher quality product.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default  withScrollEffect (ReflectionSection);
