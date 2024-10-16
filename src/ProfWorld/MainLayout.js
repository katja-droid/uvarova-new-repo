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
import withScrollEffect from '../withScrollEffect.js';

const MainLayout = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
          backgroundColor: '#F7F7F6',
        }}
        id="main-p"
      >
        <Container disableGutters maxWidth={false} sx={{ width: '100%', py: 0 }}>
          {/* Main Section */}
          <Grid container  justifyContent="center">
            <Grid
              item
              xs={12}
              xl={10}
              lg={12}
              sx={{
                textAlign: 'center',
                pb: '24px',
                width: { xxs: '100%', xl: '100%' }, // Full width on xxs-xl
                maxWidth: { xxs: '100%', xl: '935px' }, // Ensuring it doesn't exceed 935px on xl
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
                Main
              </Typography>
              <Typography
                sx={{
                  pb: { md: '24px', xxs: '16px' },
                  fontSize: '18px',
                  lineHeight: '26px',
                  fontFamily: 'Calibre Regular',
                  textAlign: { md: 'center', xxs: 'left' },
                  width: {xxs: '100%', lg: '83.33%', xl: '100%'},
                  margin: '0 auto'
                }}
              >
                Essential information is provided to keep track of current data such as job postings, new job seekers added, job postings, tasks, and meetings. The calendar displays scheduled events, and notifications highlight important dates such as birthdays, tasks in progress, and other relevant reminders. The system is intended to streamline the recruitment process and strengthen the organization by providing easy access to and management of all critical information.
              </Typography>

              {/* RatioGif Section */}
              <Box
                sx={{
                  width: '100%',
                  pb: '24px',
                  boxShadow: '0 10.14px 31.19px rgba(0, 0, 0, 0.1)',
                }}
              >
                <RatioGif image={gif} backgroundImage={bg} />
              </Box>
            </Grid>

            {/* Title Image Blocks */}
            <Grid container spacing={2} justifyContent="center" sx={{ width: '100%' }}>
              {/* Block 1 */}
              <Grid
                item
                xxs={12}
                md={6}
                lg={6}
                xl={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  pb: 0
                }}
              >
                <Box sx={{pt: {
                    xxxl: '64px',
                    xl: '64px',
                    lg: '64px',
                    md: '24px',
                    sm: '0',
                    xs: '0',
                    xxs: '0',
                  }}}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontFamily: 'Calibre Regular',
                      pb: '12px',
                    }}
                    variant="h4"
                  >
                    Before verification
                  </Typography>
                  <Box
                    component="img"
                    src={block1Image}
                    alt="Block 1 Image"
                    sx={{
                      width: '100%',
                      borderRadius: '8px',
                      boxShadow: '0 2.11px 4.22px rgba(0, 0, 0, 0.08)',
                    }}
                  />
                </Box>
              </Grid>

              {/* Block 2 */}
              <Grid
                item
                xxs={12}
                md={6}
                lg={6}
                xl={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  
                }}
              >
                <Box sx={{pt: {
                    xxxl: '64px',
                    xl: '64px',
                    lg: '64px',
                    md: '24px',
                    sm: '0',
                    xs: '0',
                    xxs: '0',
                  }}}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontFamily: 'Calibre Regular',
                      pb: '12px',
                    }}
                    variant="h4"
                  >
                    After verification
                  </Typography>
                  <Box
                    component="img"
                    src={block2Image}
                    alt="Block 2 Image"
                    sx={{
                      width: '100%',
                      borderRadius: '8px',
                      boxShadow: '0 2.11px 4.22px rgba(0, 0, 0, 0.08)',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(MainLayout);
