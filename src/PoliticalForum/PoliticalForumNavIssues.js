import React from 'react';
import { Box, Typography, Container, Grid, List, ListItem, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image2 from '../assets/political-nav-2.png';
import image2Md from '../assets/political-nav-2-md.png';
import image3 from '../assets/political-nav-3.png';
import image3Md from '../assets/political-nav-3-md.png';
import image4 from '../assets/political-nav-4.png';
import image4Md from '../assets/political-nav-4-md.png';

const PoliticalForumNavIssues = () => {
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#F7F7F6',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
          textAlign: 'left',
          boxSizing: 'border-box',
        }}
        id="id-nav-issues-pf"
      >
        {/* Images and Text Block Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            backgroundColor: '#F7F7F6',
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
            Identified Nav Issues
          </Typography>
          <Box xl={6} lg={8} xxs={12}>
            <Typography
              sx={{
                fontSize: '18px',
                lineHeight: '26px',
                fontFamily: 'Calibre Regular',
                color: 'EFEFF8',
                pb: '24px',
                width: {
                  xxxl: '628px',
                  lg: '573px',
                  xxs: '100%',
                },
              }}
            >
              Although it was not included in the development, it allowed us to draw the following conclusions:
            </Typography>
          </Box>
          <Grid container spacing={2} justifyContent="center" alignItems="stretch">
            {/* First Text Block with aspect ratio on lg */}
            <Grid item xxs={12} lg={6} xl={6} xxl={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'left',
                  p: '24px',
                  minHeight: '100%',
                  borderRadius: '16px',
                  boxSizing: 'border-box',
                  margin: '0 auto',
                }}
              >
                {/* Make the List take 80% of width on xl and center it */}
                <List
                  sx={{
                    width: { xl: '80%', xxs: '100%' }, // 80% width on xl, full width on smaller screens
                    margin: { xl: '0 auto', xxs: '0' }, // Center the list on xl screens
                    listStyleType: 'disc',
                    pl: '24px',
                    py: { xxs: '24px', lg: 0 },
                  }}
                >
                  <ListItem sx={{ display: 'list-item', fontSize: '18px', fontFamily: 'Calibre Regular', p: 0, m: 0, mb: '10px' }}>
                  For the first issue, use a clear navigation pattern and add breadcrumbs.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', fontSize: '18px', fontFamily: 'Calibre Regular', p: 0, m: 0, mb: '10px' }}>
                  For the second issue, add a link to the committee listings on the home page.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', fontSize: '18px', fontFamily: 'Calibre Regular', p: 0, m: 0, mb: '10px' }}>
                  Bring the menu to the front so that visitors can quickly switch between the seven main first-level navigation categories.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', fontSize: '18px', fontFamily: 'Calibre Regular', p: 0, m: 0, mb: '10px' }}>
                  All actions should be clickable.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', fontSize: '18px', fontFamily: 'Calibre Regular', p: 0, m: 0, mb: '10px' }}>
                  The page will be divided into navigational and informational.
                  </ListItem>
                </List>
              </Box>
            </Grid>





            {/* Image 2 with padding and border radius */}
            <Grid item xxs={12} lg={6} xl={6} xxl={6}>
              <Box
                sx={{
                  height: { lg: '331px', xs: 'auto' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  p: '24px',
                  borderRadius: '16px',
                  boxSizing: 'border-box',
                }}
              >
                <img
                  src={isLg ? image2Md : image2}
                  alt="Design System 2"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>

            {/* Image 3 with padding and border radius */}
            <Grid item xxs={12} lg={6} xl={6} xxl={6}>
              <Box
                sx={{
                  height: { lg: '331px', xs: 'auto' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  p: '24px',
                  borderRadius: '16px',
                  boxSizing: 'border-box',
                }}
              >
                <img
                  src={isLg ? image3Md : image3}
                  alt="Design System 3"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>

            {/* Image 4 with padding and border radius */}
            <Grid item xxs={12} lg={6} xl={6} xxl={6}>
              <Box
                sx={{
                  height: { lg: '331px', xs: 'auto' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  p: '24px',
                  borderRadius: '16px',
                  boxSizing: 'border-box',
                }}
              >
                <img
                  src={isLg ? image4Md : image4}
                  alt="Design System 4"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PoliticalForumNavIssues;
