import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme

const TestingSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: {
            xxs: '24px',
            xs: '48px',
            sm: '60px',
            md: '84px',
            lg: '84px',
            xl: '84px',
            xxxl: '97px',
          },
        }}
        id="testing-summary-met"
      >
        <Container disableGutters maxWidth={false} sx={{ width: '100%', py: 0 }}>
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              xl={6}
              lg={8}
              sx={{
                textAlign: 'left',
                pb: '24px',
                width: { xxs: '100%', lg: '100%'}, // 100% width for xxs-lg, 935px for xl and xxl
                maxWidth: { xxs: '100%', lg: '100%' }, // Ensuring it doesn't exceed 935px on xl-xxl
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
                Testing Summary
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
                  <span>1.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    Selected audience segments: under 40 and over 40 years old.
                  </Typography>
                </li>
                <li>
                  <span>2.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    23 participants were invited to testing.
                  </Typography>
                </li>
                <li>
                  <span>3.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    It usually takes three rounds of testing to achieve over 80% completion rate.
                  </Typography>
                </li>
                <li>
                  <span>4.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    Testing may involve classes where twins participate.
                  </Typography>
                </li>
                <li>
                  <span>5.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    Key testing goal: speed up accurate input and minimize errors.
                  </Typography>
                </li>
                <li>
                  <span>6.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    Input budgets help evaluate the quality of the form.
                  </Typography>
                </li>
                <li>
                  <span>7.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    Separate inputs are used for dates, single input for time and names.
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

export default TestingSection;
