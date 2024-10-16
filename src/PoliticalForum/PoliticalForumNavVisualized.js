import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nav-visualized.png'; // Replace with the actual image path
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumNavVisualized = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#fff',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
          overflowX: 'hidden', // Prevent horizontal overflow
          boxSizing: 'border-box', // Account for padding in size calculations
        }}
        id="nav-v-pf"
      >
        <Container maxWidth={false} disableGutters>
          <Grid container spacing={2} justifyContent="flex-start" alignItems="stretch">
            {/* Section One */}
            
            {/* Image */}
            <Grid item xxs={12} lg={6} xl={6} xxl={6} sx={{ order: { xxs: 2, lg: 1 }, textAlign: 'center' }}>
              <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <img
                  src={image}
                  alt="Nav Visualized"
                  style={{ width: '100%', height: 'auto', maxHeight: '400px', borderRadius: '16px', objectFit: 'cover' }}
                />
              </Box>
            </Grid>

            {/* Text Section */}
            <Grid item xxs={12} lg={6} xl={6} xxl={6} sx={{ order: { xxs: 1, lg: 2 } }}>
              <Box sx={{ backgroundColor: '#fff', borderRadius: '16px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <Typography
                  sx={{ fontSize: { md: '34px', sm: '28px', xxs: '22px' }, fontFamily: 'Playfair Display Bold', pb: '16px' }}
                  variant="h4"
                >
                  Nav Visualized<br/> (Mobile)
                </Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
                  The mobile version of the site has four levels of navigation. In the desktop version, there is space for visible
                  navigation tools, but nothing in the mobile version.
                </Typography>
              </Box>
            </Grid>

            {/* Section Two */}
            <Grid item xxs={12} xl={6}  sx={{ order: { xxs: 3, lg: 3 }, overflowX: 'hidden' }}>
              <Box sx={{ backgroundColor: '#fff', py: '0', borderRadius: '16px', boxSizing: 'border-box' }}>
                
                <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular', mb: '8px' }}>
                  After testing a collection of tasks for the client, we began research to identify tasks that were potentially
                  important to all internal and external users.
                </Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular', mb: '8px', color: '#646470' }}>
                  Based on this, the following recommendations for designing mobile navigation were developed:
                </Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular', mb: '8px', pl: '16px' }}>
                  1. Menus: Use a visual hierarchy to separate primary and secondary navigation.
                </Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular', mb: '8px', pl: '16px' }}>
                  2. Sub-menus: Allow users to open and close menu folders to preview second and third level pages in
                  multiple sections at the same time.
                </Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular', mb: '8px', pl: '16px' }}>
                  3. Current Location Indicator: Shows the page the user is on when he or she opens the main menu.
                  For greater clarity, a breadcrumb navigation chain has been added.
                </Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular', mb: '8px', pl: '16px' }}>
                  4. Site-to-site navigation: For all subdomains and microsites, provide a link back to the primary
                  site’s main page using a global header or coordination rule.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PoliticalForumNavVisualized;
