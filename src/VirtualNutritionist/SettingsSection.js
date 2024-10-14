import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nutritionist-settings.png';
import withScrollEffect from '../withScrollEffect.js';

const SettingsSection = () => {
  return (
    <div id="settings-v">
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#0A0A14',
          display: 'flex',
          
          justifyContent: 'center',
          alignItems: 'center',
          overflowX: 'hidden', // Prevent horizontal overflow
          py: { xl: '80px', sm: '60px', xxs: '48px' },

        }}
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            overflowX: 'hidden', // Prevent horizontal overflow
            width: '100vw', // Ensure container width is within viewport
            px: { xs: '16px', sm: '24px', md: '32px' }, // Adjust padding as needed
          }}
        >
          <Grid
            container
            sx={{
              justifyContent: {
                xs: 'center',
                sm: 'center',
                md: 'center',
                lg: 'center',
                xl: 'space-between',
                xxl: 'space-between',
              },
            }}
          >
            {/* First Column */}
            <Grid item xxs={12} xs={12} sm={12} md={5} lg={5} xl={5}>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%', // Ensure the box takes the full width of the grid item
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: { md: '30px', xxs: '25px' },
                    fontFamily: 'Playfair Display Bold',
                    pb: '16px',
                    width: '100%',
                  }}
                  variant="h4"
                >
                  Settings
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '18px',
                    fontFamily: 'Calibre Regular',
                    pb: { lg: '24px', xxs: '16px' },
                    lineHeight: '26px',
                  }}
                >
                  In «Settings» you can customize the app to your liking by selecting the interface language and display mode. Manage notifications, change passwords, and review the privacy policy to ensure security and get the most out of all the app’s features.
                </Typography>
              </Box>
            </Grid>

            {/* Second Column - Image */}
            <Grid
              item
              xxs={12}
              xs={12}
              sm={12}
              md={7}
              lg={7}
              xl={7}
              xxl={7}
            >
              <Box
                sx={{
                  width: '100%', // Ensure the box takes the full width of the grid item
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 0
                }}
              >
                <img
                  src={image}
                  alt="Settings"
                  style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain', padding: 0 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
    </div>
  );
};

export default withScrollEffect (SettingsSection);
