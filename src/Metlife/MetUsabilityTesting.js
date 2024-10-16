import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import withScrollEffect from '../withScrollEffect.js';

const MetUsabilityTesting = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
        id="usability-testing"
      >
        <Container disableGutters maxWidth={false} sx={{ width: '100%', py: 0 }}>
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              lg={10}
              xl={8}
              sx={{
                textAlign: 'left',
                width: { xxs: '100%', lg: '100%' },
                maxWidth: { xxs: '100%', lg: '100%' },
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
                Usability Testing
              </Typography>
              <Typography component="span" sx={{ pl: 1, fontFamily: 'Calibre Regular', fontSize: '18px', pb: '24px', lineHeight: '26px' }}>
              I tested the product at various stages of the project.
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  paddingLeft: 0,
                  '& li': {
                    display: 'flex',
                    alignItems: 'start',
                    mb: '8px', // Add 8px margin bottom for spacing between items
                    fontSize: '18px'
                  },
                }}
              >
                <li>
                  <span style={{fontFamily: 'Calibre Regular', fontSize: '18px', lineHeight: '26px'}}>1.</span>
                  <Typography component="span" sx={{ pl: 1, fontFamily: 'Calibre Regular', fontSize: '18px', pb: '24px', lineHeight: '26px' }}>
                   <b> Lo-fi prototypes</b>  were tested with the stakeholders weekly to get feedback on the functionality, content, and interactivity of the product.
                  </Typography>
                </li>
                <li>
                  <span style={{fontFamily: 'Calibre Regular', fontSize: '18px', lineHeight: '26px'}}>2.</span>
                  <Typography component="span" sx={{ pl: 1, fontFamily: 'Calibre Regular', fontSize: '18px', mb: '24px', lineHeight: '26px' }}>
                  <b>Unmoderated User testing</b> — Several dummy groups were created for Metlife users to use the app. All participants used the app to perform hypothetical tasks.
                  </Typography>
                </li>
                <li>
                  <span style={{fontFamily: 'Calibre Regular', fontSize: '18px', lineHeight: '26px'}}>3.</span>
                  <Typography component="span" sx={{ pl: 1, fontFamily: 'Calibre Regular', fontSize: '18px', lineHeight: '26px' }}>
                  <b>Beta Testing</b> — Before releasing the digital forms, we tested them among Metlife members. The digital forms were used by them to process an insurance claim.
                  </Typography>
                </li>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect (MetUsabilityTesting);
