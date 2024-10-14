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
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
      >
        <Container disableGutters maxWidth={false} sx={{ width: '100%', py: 0 }}>
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              lg={10}  // Full width on small screens, 10 columns on large screens
              xl={6}   // 6 columns on extra-large screens
              xxxl={6} // 6 columns on triple extra-large screens
              sx={{
                pb: '24px',
                mx: 'auto', // Center align the block horizontally
              }}
            >
              <Grid container spacing={2}>
                {/* Heading Section */}
                <Grid
                  item
                  xs={12}
                  lg={12}  // Full width on small screens
                  xl={12}  // Same width as the list on large screens
                  sx={{
                    textAlign: { xs: 'left' },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                      fontFamily: 'Playfair Display Bold',
                    }}
                    variant="h3"
                  >
                    Reflection
                  </Typography>
                </Grid>

                {/* List Section */}
                <Grid
                  item
                  xs={12}
                  lg={12}  // Full width on small screens
                  xl={12}  // Same width as the heading on large screens
                  sx={{
                    textAlign: { xxs: 'left' },
                    
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(ReflectionSection);
