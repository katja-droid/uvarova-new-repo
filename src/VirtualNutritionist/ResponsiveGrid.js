import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import image1 from '../assets/nutritionist-contrast-1.png';
import image2 from '../assets/nutritionist-contrast-2.png';
import image3 from '../assets/nutritionist-contrast-3.png';

const ResponsiveGrid = () => {
  return (
    <Grid container spacing={0}> 
      {/* For large screens (xxl-lg), divide the content into two columns */}
      <Grid item xxs={12} sm={12} md={4} lg={4} xl={4} sx={{ padding: 0 }}> {/* Ensure no padding */}
        <Typography 
          variant="h6" 
          align="left" 
          sx={{ fontFamily: 'Calibre, sans-serif', fontWeight: '500', fontSize: '18px' }}
        >
          Lack of color contrast
        </Typography>
      </Grid>
      {/* The right part should only be visible on larger screens */}
      <Grid 
        item 
        xxs={12} 
        sm={12} 
        md={8} 
        lg={8} 
        xl={8} 
        sx={{ display: { xxs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }, padding: 0 }}
      >
        <Typography 
          variant="h6" 
          align="left" 
          sx={{ fontFamily: 'Calibre, sans-serif', fontWeight: '500', fontSize: '18px' }}
        >
          I proposed two potential improvements:
        </Typography>
      </Grid>

      {/* Images and their respective descriptions */}
      <Grid container item xxs={12} md={12} spacing={0}> 
        {/* Image 1 and description */}
        <Grid item xxs={12} md={12} lg={4} xl={4} sx={{ padding: 0 }}> {/* Ensure no padding */}
          <Box sx={{ padding: 0 }}> {/* Ensure no padding */}
            <img src={image1} alt="Image 1" style={{ width: '100%' }} />
            <Typography 
              variant="body2" 
              align="left" 
              mt={2} 
              sx={{ fontFamily: 'Calibre, sans-serif', fontSize: '14px' }}
            >
              The original color scheme, consisting of a green background (#21D07B) and white text (#FFFFFF), showed an unsatisfactory contrast ratio of 2.02:1, which does not meet WCAG standards.
            </Typography>
          </Box>
        </Grid>

        {/* Image 2 and description */}
        <Grid item xxs={12} md={6} lg={4} xl={4} sx={{ padding: 0 }}> {/* Ensure no padding */}
          <Box sx={{ padding: 0 }}> {/* Ensure no padding */}
            <img src={image2} alt="Image 2" style={{ width: '100%' }} />
            <Typography 
              variant="body2" 
              align="left" 
              mt={2} 
              sx={{ fontFamily: 'Calibre, sans-serif', fontSize: '14px' }}
            >
              Retain the green background and change the text color to a darker green (#1A5F02), achieving a contrast ratio of 7.83:1.
            </Typography>
          </Box>
        </Grid>

        {/* Image 3 and description */}
        <Grid item xxs={12} md={6} lg={4} xl={4} sx={{ padding: 0 }}> {/* Ensure no padding */}
          <Box sx={{ padding: 0 }}> {/* Ensure no padding */}
            <img src={image3} alt="Image 3" style={{ width: '100%' }} />
            <Typography 
              variant="body2" 
              align="left" 
              mt={2} 
              sx={{ fontFamily: 'Calibre, sans-serif', fontSize: '14px' }}
            >
              Keep the green background (#21D07B) and change the text to dark blue (#00001A), which would provide an excellent contrast ratio of 10.22:1.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResponsiveGrid;
