import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import mainImage from '../assets/forum-cover.png'; // Replace with your main image
import block1Image from '../assets/main1.png'; // Replace with your block 1 image
import block2Image from '../assets/main2.png'; // Replace with your block 2 image
import gif from '../assets/pw-main.gif';
import bg from '../assets/begin-background.png';
import RatioGif from './RatioGif';

const CorporateCultureSection = () => {
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
        id="corporate-culture-p"
      >
        <Container disableGutters maxWidth={false} sx={{ width: '100%', py: 0 }}>
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
          <Grid
  item
  xs={12}
  sx={{
    textAlign: 'center',
    pb: '24px',
    width: { xxs: '100%', lg: '100%', xl: '935px', xxl: '935px' }, // 100% width for xxs-lg, 935px for xl and xxl
    maxWidth: { xxs: '100%', lg: '100%', xl: '935px', xxl: '935px' }, // Ensuring it doesn't exceed 935px on xl-xxl
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
   Corporate Culture
  </Typography>
  <Typography
                sx={{
                  pb: { md: '24px', xxs: '16px' },
                  fontSize: '18px',
                  lineHeight: '26px',
                  fontFamily: 'Calibre Regular',
                  textAlign: {md: 'center', xxs: 'left'},
                }}
              >
             There are two versions of this block: an administrator version that allows the creation and addition of various materials and events, and a user version with limited functionality. It raises employee awareness of corporate standards and events, improves internal communication, and fosters a sense of unity in the corporate culture.      </Typography>
</Grid>
</Grid>

  
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CorporateCultureSection;
