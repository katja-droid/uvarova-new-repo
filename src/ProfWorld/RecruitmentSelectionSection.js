import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/pw5.gif'; // Replace with your image
import bg from '../assets/begin-background.png'; // Replace with your image
import RatioGif from './RatioGif';
import withScrollEffect from '../withScrollEffect.js';
import FormattedText from '../FormattedText'; // Import your FormattedText component

const RecruitmentSelectionSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
        id="recruitment-p"
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
              xs={12} 
              xl={5} 
              xxl={5}
              sx={{
                order: { xs: 1, xl: 1 }, // Text comes first on all screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: { lg: 'left' }, // Left-align text
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '16px' }}
                  variant="h3"
                >
                  Recruitment Selection 
                </Typography>

                <FormattedText
                  text={`This block plays an important role in strategic workforce planning, which is critical to a company’s success.\n\nThis block provides information on vacancies, fill deadlines, and budgets, as well as tools for searching and evaluating candidates.\n\nIn addition, this block provides customizable interview stages based on a company’s needs and helps define the requirements for each position.`}
                />
              </Box>
            </Grid>

            {/* Image Section - Takes 7 cols on lg and xxl */}
            <Grid 
              item 
              xs={12} 
              xl={7} 
              xxl={7}
              xxxl={7}
              sx={{
                order: { xs: 2, xl: 2 }, // Image comes second on all screens
                display: 'flex',
                justifyContent: { xxs: 'center', xxxl: 'flex-end' },
                width: {
                    xxxl: '673px'
                }
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  borderRadius: '8px', // Optional: add some styling to the image
                  maxWidth: { xxxl: '673px' },
                }}
              >
                <RatioGif image={img} backgroundImage={bg} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(RecruitmentSelectionSection);
