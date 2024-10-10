import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import withScrollEffect from '../withScrollEffect.js';

const MetLifeSummary = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' },
        }}
        id="summary-met"
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
                The Summary
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
                    Goal: to speed up accurate input and minimize errors.
                  </Typography>
                </li>
                <li>
                  <span>2.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    Input budgets help us evaluate the quality of the form.
                  </Typography>
                </li>
                <li>
                  <span>3.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    Separate inputs for dates, single input for time and names.
                  </Typography>
                </li>
                <li>
                  <span>4.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    Text fields with padding, borders, labels, focus styles.
                  </Typography>
                </li>
                <li>
                  <span>5.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    No tooltips. Display the tooltip directly in the field.
                  </Typography>
                </li>
                <li>
                  <span>6.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    Label above the tooltip above the error above the text field.
                  </Typography>
                </li>
                <li>
                  <span>7.</span>
                  <Typography component="span" sx={{ pl: 1 }}>
                    Clear distinction between mandatory and optional text input fields.
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

export default withScrollEffect (MetLifeSummary);
