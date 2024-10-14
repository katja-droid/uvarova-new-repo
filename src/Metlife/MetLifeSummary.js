import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import withScrollEffect from '../withScrollEffect.js';

const MetLifeSummary = () => {
  return (
    <ThemeProvider theme={theme}>
      <div id="metlife-summary">
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          pt: { xl: '80px', sm: '60px', xxs: '48px' },
          pb: '24px',
        }}
        id="summary-met"
      >
        {/* Main Section */}
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={12}
            xl={6}
            lg={8}
            sx={{
              textAlign: 'left',
              width: { xxs: '100%', lg: '100%' }, // 100% width for xxs-lg
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
            <Box>
              {[
                'Goal: to speed up accurate input and minimize errors.',
                'Input budgets help us evaluate the quality of the form.',
                'Separate inputs for dates, single input for time and names.',
                'Text fields with padding, borders, labels, focus styles.',
                'No tooltips. Display the tooltip directly in the field.',
                'Label above the tooltip above the error above the text field.',
                'Clear distinction between mandatory and optional text input fields.',
              ].map((text, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontSize: '18px',
                    fontFamily: 'Calibre Regular',
                    lineHeight: '26px',
                    mb: '8px', // Margin bottom to space between lines
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: 'Calibre Medium', // Highlight the number
                      fontSize: '18px',
                      lineHeight: '26px',
                      pr: '4px', // Padding for space between number and text
                    }}
                  >
                    {index + 1}.
                  </Typography>
                  {text}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      </div>
    </ThemeProvider>
  );
};

export default withScrollEffect(MetLifeSummary);
