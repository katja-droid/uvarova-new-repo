import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import cover from '../assets/forum-cover.png';  // Your cover image
import withScrollEffect from '../withScrollEffect.js';


// Apply scroll effect to specific components
const PoliticalForumNavigationTypography = withScrollEffect(Typography);
const PoliticalForumNavigationBox = withScrollEffect(Box);

const PoliticalForumContent = () => {
  return (
    <Grid container direction="column" sx={{ py: 2 }}>
      {/* Main content */}
      <Grid item xs={12}>
        <PoliticalForumNavigationBox sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Apply scroll effect to Typography */}
          <PoliticalForumNavigationTypography
            variant="h1"
            sx={{
              textAlign: 'center',
              fontSize: { lg: '64px', md: '54px', xxs: '44px' },
              fontFamily: 'DMSerifText-Regular',
              fontWeight: 'normal',
              pb: '30px',
              pt: { lg: '66px', md: '64px', xxs: '24px' },
            }}
          >
            Political Forum
          </PoliticalForumNavigationTypography>
          <PoliticalForumNavigationTypography
            sx={{
              textAlign: 'center',
              fontSize: { md: '20px', xxs: '18px' },
              fontFamily: 'Calibre Medium',
              pb: { lg: '91px', md: '55px', xxs: '76px' },
              width: { md: '100%', sm: '182px', xxs: '184px' },
            }}
          >
            UX Assignment: Multi-Level Navigation
          </PoliticalForumNavigationTypography>
        </PoliticalForumNavigationBox>
      </Grid>

      {/* Image Section */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8} xxs={12}>
          <PoliticalForumNavigationBox
            sx={{
              width: { xs: '100%', lg: '100%', md: '348px' }, // Responsive width for image
            }}
          >
            <img
              src={cover}
              alt="Virtual PoliticalForum Cover"
              style={{ width: '100%' }} // Ensure image takes 100% width of the grid item
            />
          </PoliticalForumNavigationBox>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PoliticalForumContent;
