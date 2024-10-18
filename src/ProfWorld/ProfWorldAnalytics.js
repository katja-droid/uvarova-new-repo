import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProfWorldAnalyticsOne from './ProfWorldAnalyticsOne';
import ProfWorldAnalyticsTwo from './ProfWorldAnalyticsTwo';
import SliderDivWide from '../Metlife/SliderDivWide';
import withScrollEffect from '../withScrollEffect.js';
import useLineBreaks from '../useLineBreaks'; // Import the useLineBreaks hook

// Utility function to prevent widows by replacing spaces after conjunctions with non-breaking spaces
function preventWidows(text) {
  const widows = ['and', 'or', 'but', 'for', 'nor', 'so', 'yet', 'of', 'an', 'between', 'into', 'was'];
  const widowRegex = new RegExp(`\\b(${widows.join('|')})\\s`, 'gi');
  return text.replace(widowRegex, (match, widow) => `${widow}\u00A0`); // Replaces space with non-breaking space
}

const ProfWorldAnalytics = () => {
  const slides = [
    <ProfWorldAnalyticsOne />,
    <ProfWorldAnalyticsTwo />
  ];

  // Define the conclusion text
  const conclusionText = `
    During project initiation, several questions were addressed to determine the goal or need to be fulfilled. Research was conducted, and it was decided how to effectively achieve the goal. How does the project meet the need? 
    When designing UX in recruiting, it is important to find a balance between innovation and user experience, taking into account both the strengths and weaknesses of each tool and method.
  `;

  // Use the useLineBreaks hook to process the conclusion text
  const processedConclusion = useLineBreaks(conclusionText);

  return (
    <Box sx={{ pb: { xl: '80px', sm: '60px', xxs: '48px' } }}>
      <Container id="profWorldAnalytics" disableGutters maxWidth={false}>
        {/* Container for the title */}
        <Grid container justifyContent="center" spacing={0}>
          <Grid item xl={8} xxs={12} lg={10}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xxs: '30px', sm: '34px', md: '40px' },
                fontFamily: 'Playfair Display Bold',
                paddingBottom: { xl: '32px', lg: '24px', xxs: '24px' },
              }}
            >
              Analytics
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ display: { md: 'block', xxs: 'none' } }}>
        <SliderDivWide slides={slides} />
      </Box>
      <Box sx={{ display: { md: 'none', xxs: 'block' } }}>
        <Container id="profWorldAnalytics" disableGutters maxWidth={false}>
          <Grid container justifyContent="center" spacing={0}>
            <ProfWorldAnalyticsOne />
            <ProfWorldAnalyticsTwo />
          </Grid>
        </Container>
      </Box>

      {/* Conclusion paragraph */}
      <Container id="profWorldAnalytics" disableGutters maxWidth={false}>
        <Grid container justifyContent="center">
          <Grid item xl={8} xxs={12} lg={10}>
            <Typography
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '18px',
                lineHeight: '26px',
                color: '#0A0A14',
                pt: { xl: '32px', lg: '24px', xxs: '24px' },
              }}
            >
              <b>Conclusion after initiation and analysis</b>
            </Typography>
            {processedConclusion.map((line, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: 'Calibre Regular',
                  fontSize: '18px',
                  lineHeight: '26px',
                  color: '#0A0A14',
                }}
              >
                {preventWidows(line)} {/* Apply widow prevention to each line */}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default withScrollEffect(ProfWorldAnalytics);
