import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import withScrollEffect from '../withScrollEffect.js';

const OverlappingImages = ({
  image1Src,
  image2Src,
  verticalOverlapPercentage = 6.17,
}) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  // Set image widths to 61.95% for devices md and up, otherwise 100%
  const imageWidths = isMdUp ? '61.95%' : '100%';

  // Adjust horizontal overlap dynamically, a small overlap on larger screens
  const horizontalSpacing = isMdUp ? '20px' : '0'; // Overlap on md and above, no overlap on smaller screens

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'auto', padding: 0 }}>
      <Grid
        container
        spacing={0} // Set spacing to 0 to remove padding between Grid items
        sx={{
          flexDirection: { md: 'row', xs: 'column' }, // Row on md and up, stack on smaller screens
          alignItems: 'center',
          justifyContent: 'space-between', // Centering of items
          m: 0,
        }}
      >
        {/* First Image (on the left) */}
        <Grid
          item
          sx={{
            width: imageWidths, // 61.95% on md and up, 100% on smaller screens
            position: 'relative',
            zIndex: 1, // Lower zIndex to be below the second image
            mb: { xxs: '24px', md: '0' },
            mr: horizontalSpacing, // Adjust the slight overlap on md and up
            p: 0, // Ensure no padding for this item
          }}
        >
          <Box sx={{ overflow: 'visible', width: '100%' }}>
            <img
              src={image1Src}
              alt="First Image"
              width="100%"
              style={{ boxShadow: '0 15px 20px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </Box>
        </Grid>

        {/* Second Image (on the right, with slight overlap) */}
        <Grid
          item
          sx={{
            width: imageWidths, // 61.95% on md and up, 100% on smaller screens
            position: 'absolute', // Absolute positioning for overlapping
            top: `${verticalOverlapPercentage}%`, // Position 6.17% lower than the first image
            right: `-${horizontalSpacing}`, // Adjust to ensure slight horizontal overlap on md and up
            zIndex: 2, // Higher zIndex to appear on top of the first image
            p: 0, // Ensure no padding for this item
            
          }}
        >
          <Box sx={{ overflow: 'visible', width: '100%' }}>
            <img
              src={image2Src}
              alt="Second Image"
              width="100%"
              style={{ boxShadow: '0 15px 20px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OverlappingImages;
