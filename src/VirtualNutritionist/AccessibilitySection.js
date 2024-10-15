import React from 'react';
import { Box, Typography, Container, Grid, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import largeImage from '../assets/nutritionist-accessibility.png'; // Default image for md and above
import smallImage from '../assets/nutritionist-accessibility-md.png'; // Image for below md
import withScrollEffect from '../withScrollEffect.js';

const AccessibilitySection = () => {
  // Detect screen size below md
  const isBelowMd = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#fff',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
      >
        <Container disableGutters maxWidth={false}>
          <Grid container spacing={2}>
            {/* First Row: Title (Full width) */}
            <Grid item xxs={12} xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box>
                <Typography
                  sx={{
                    fontSize: { md: '30px', xxs: '25px' },
                    fontFamily: 'Playfair Display Bold',
                    pb: '32px',
                    width: '100%',
                    textAlign: 'center',
                  }}
                  variant="h4"
                >
                  Accessibility Color
                </Typography>
              </Box>
            </Grid>

            {/* Image Column: Display the image with conditional logic for screen size */}
            <Grid item xxs={12} xs={12} sm={12} md={12} lg={12} xxxl={11}>
              <Box>
                <img
                  width="100%"
                  src={isBelowMd ? smallImage : largeImage}
                  alt="Accessibility color example"
                />
              </Box>
            </Grid>

            {/* Second Row: Text Content (Aligned right on larger screens) */}
            <Grid item xxs={12} xs={12} sm={12} md={7} lg={6} xl={6} sx={{ ml: 'auto' }}>
              <Typography
                sx={{
                  textAlign: 'left',
                  fontSize: '18px',
                  lineHeight: '26px',
                  fontFamily: 'Calibre Regular',
                  pb: { lg: '24px', xxs: '16px' },
                  width: '100%',
                }}
              >
                Unfortunately, despite my well-reasoned arguments and research, my proposal was not accepted and the selected colors failed accessibility testing during design implementation. 
                This highlights the importance of considering accessibility in design, especially in health-related applications where clarity of information is critically important to the user.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(AccessibilitySection);
