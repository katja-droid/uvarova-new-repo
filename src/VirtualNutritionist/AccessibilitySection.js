import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nutritionist-accessibility.png';
import withScrollEffect from '../withScrollEffect.js';

const AccessibilitySection = () => {
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
            {/* First Row: Image (11 columns, aligned left) */}
            <Grid item xxs={11} xs={11} sm={11} md={11} lg={11} xl={11}>
              <Box>
                <Typography
                  sx={{
                    textAlign: 'left',
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
                <Box>
                  <img width="100%" src={image} alt="Accessibility color example" />
                </Box>
              </Box>
            </Grid>

            {/* Second Row: Text (6 columns, aligned right) */}
            <Grid item xxs={12} xs={12} sm={12} md={7} lg={6} xl={6} sx={{ ml: 'auto' }}>
              <Typography
                sx={{
                  textAlign: 'left', // Right-aligned as in original
                  fontSize: '18px',
                  lineHeight: '26px',
                  fontFamily: 'Calibre Regular',
                  pb: { lg: '24px', xxs: '16px' },
                  width: '100%', // Full width inside the grid
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

export default withScrollEffect (AccessibilitySection);
