import React from 'react';
import { Box, Typography, Container, Grid, List, ListItem } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image2 from '../assets/political-nav-2.png';
import image3 from '../assets/political-nav-3.png';
import image4 from '../assets/political-nav-4.png';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumNavIssues = () => {
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
          px: { xxs: '16px', sm: '24px', md: '48px', lg: '84px' }, 
          overflowX: 'hidden', // Prevent horizontal overflow
          boxSizing: 'border-box', // Ensure padding is considered in size
        }}
        id="id-nav-issues-pf"
      >
        {/* Images and Text Block Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            backgroundColor: '#F7F7F6',
            overflowX: 'hidden', // Prevent container overflow
          }}
        >
          <Typography 
            sx={{ 
              fontSize: { md: '40px', sm: '34px', xxs: '25px' }, 
              fontFamily: 'Playfair Display Bold', 
              pb: '24px' 
            }} 
            variant='h3'
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
                xxs: '100%'
                
              }
            }}
          >
            Although it was not included in the development, it allowed us to draw the following conclusions:
          </Typography>
          </Box>
          <Grid container spacing={2} justifyContent="center" alignItems="stretch">
            {/* First Text Block */}
            <Grid item xxs={12} lg={6} xl={6} xxl={6}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'left',
                  px: '24px',
                  minHeight: '100%', // Ensure it takes the full height of the grid item
                  borderRadius: '16px',
                  boxSizing: 'border-box', // Ensure padding is accounted in height
                  overflow: 'hidden', // Ensure no overflow from content
                }}
              >
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    Use a clear navigation pattern and add breadcrumbs.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Add a link to the committee listings on the home page.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Bring the menu to the front so that visitors can quickly switch between the seven main first-level navigation categories.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Ensure all actions are clickable.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Divide the page into navigational and informational sections.
                  </ListItem>
                </List>
              </Box>
            </Grid>

            {/* Image 2 */}
            <Grid item xxs={12} lg={6} xl={6} xxl={6}>
              <Box sx={{ height: '100%', overflow: 'hidden' }}>
                <img 
                  src={image2} 
                  alt="Design System 2" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure image covers the grid height
                />
              </Box>
            </Grid>

            {/* Image 3 */}
            <Grid item xxs={12} lg={6} xl={6} xxl={6}>
              <Box sx={{ height: '100%', overflow: 'hidden' }}>
                <img 
                  src={image3} 
                  alt="Design System 3" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure image covers the grid height
                />
              </Box>
            </Grid>

            {/* Image 4 */}
            <Grid item xxs={12} lg={6} xl={6} xxl={6}>
              <Box sx={{ height: '100%', overflow: 'hidden' }}>
                <img 
                  src={image4} 
                  alt="Design System 4" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure image covers the grid height
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
