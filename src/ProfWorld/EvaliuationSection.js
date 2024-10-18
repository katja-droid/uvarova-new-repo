import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/evaluation.png'; // Replace with your image
import withScrollEffect from '../withScrollEffect.js';
import FormattedText from '../FormattedText'; // Import your FormattedText component

const EvaluationSection = () => {
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
        {/* Text and Image Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            width: '100%',
            py: 0, // Removed padding from container
          }}
        >
          <Grid container spacing={{ xs: 0, xl: 2 }} justifyContent="center" alignItems="center" xxs={12} lg={10} xl={12} sx={{ margin: '0 auto' }}>
            {/* Text Section */}
            <Grid
              item
              xxs={12}
              xl={5}
              xxl={5}
              sx={{
                order: { xxs: 1, xl: 2 }, // Text comes first on smaller screens, second on larger screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: 'left',  // Left-align text
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '16px' }}
                  variant="h3"
                >
                  Evaluation for Accurate<br />Employee Selection
                </Typography>
                
                <FormattedText
                  text={`The process is designed to assess a candidate’s potential, strengths and weaknesses, motivation, and other important factors.\n\nThere are a variety of tests that can be used for different purposes. For example, there are tests for personality traits, abilities, and knowledge.`}
                />
              </Box>
            </Grid>

            {/* Image Section - Takes 7 cols on lg and xxl */}
            <Grid
              item
              xxs={12}
              xl={7}
              xxl={7}
              xxxl={7}
              sx={{
                order: { xxs: 2, xl: 1 }, // Image comes second on all screens
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: { xxxl: '673px' } }}>
                {/* Use RatioGif here with a GIF */}
                <img src={img} width="100%" alt="Evaluation" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(EvaluationSection);
