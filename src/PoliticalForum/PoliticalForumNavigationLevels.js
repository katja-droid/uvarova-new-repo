import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/political-navigation-levels.png';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumNavigationLevels = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#fff',
          color: '#0A0A14',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
        id="nav-levels-pf"
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start', // Keep alignment to flex-start for top alignment
              alignItems: 'flex-start', // Change this to align the header to the left
              width: '100%', // Ensure full width for the container
            }}
          >
            {/* First Column */}
            <Grid item xxs={12} xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
              <Box
                sx={{
                  width: '100%', // Ensure full width
                  textAlign: 'left', // Align the box content to the left
                }}
              >
                <Typography
                  sx={{
                    textAlign: 'left', // Left alignment for the text
                    width: '100%',
                    fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                    fontFamily: 'Playfair Display Bold',
                    pb: '24px',
                  }}
                  variant="h3"
                >
                  Navigation Levels
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Full Width Image */}
      <Box
        sx={{
          pb: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
      >
        <img width="100%" src={image} alt="Design System" />
      </Box>
    </ThemeProvider>
  );
};

export default PoliticalForumNavigationLevels;
