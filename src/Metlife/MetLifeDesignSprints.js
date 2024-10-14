import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import image1 from '../assets/designsprints1.png'; // Replace with actual image paths
import image2 from '../assets/designsprints2.png'; // Replace with actual image paths
import withScrollEffect from '../withScrollEffect.js';
import { useTheme } from '@emotion/react';

const MetLifeDesignSprints = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));  
  return (
    <Box
      sx={{
        width: '100%',
        padding: 0, // No padding to keep the design clean
        margin: 0, // No margin for full container control
        overflowX: 'hidden',
        maxWidth: '100%',
        py: { xl: '80px', sm: '60px', xxs: '48px' },
      }}
      id="design-sprints-met"
    >
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ padding: 0, margin: 0 }}
      >
        {/* Text Section */}
        <Grid
          item
          sx={{
            width: {
              xxxl: '772px', // Fixed width on xxxl
              xxl: '66.666%', // 8 columns on xxl-xl (8/12 columns)
              xl: '66.666%', // Same as xxl for xl
              lg: '91.666%', // 11 columns on lg (11/12 columns)
              md: '100%', // Full width on md and below
              xs: '100%', // Full width on smaller screens
            },
            textAlign: 'left', // Align text to the left
           padding: 0
          }}
        >
          <Typography variant="h4" sx={{  fontFamily: 'Playfair Display Bold', pb: '24px' }}>
            Design Sprints
          </Typography>
          <Typography variant="body1" sx={{pb: '24px' }}>
            Project sprints were conducted to ensure collaboration between departments.
            Designers, developers, and stakeholders contributed their fresh ideas to the sprints.
            The purpose of the sprints was to bring everyone together around a common goal of
            improving the customer experience by solving user problems.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid
      container
      itemScope
      spacing={isMobile ? 0 : 2} // Apply spacing 0 for mobile, 2 for md and above
      sx={{
        flexDirection: { xxs: 'column', md: 'row' }, // Column for small screens, row for medium and up
      }}
    >
          <Grid item xs={12} md={6} sx={{padding: 0, margin: 0}}>
            <img
              src={image1}
              alt="Sprint Image 1"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{padding: 0, margin: 0, mt: {xxs: '24px', md: '0'}}}>
            <img
              src={image2}
              alt="Sprint Image 2"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withScrollEffect (MetLifeDesignSprints);
