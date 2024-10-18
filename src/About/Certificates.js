import React from 'react';
import { Grid, Box } from '@mui/material';
import certificate1 from '../assets/certificate1.png';
import certificate2 from '../assets/certificate2.png';
import certificate3 from '../assets/certificate3.png';
import LinkedInReview from './LinkedInReview';
import withScrollEffect from '../withScrollEffect.js';

const Certificates = () => {
  return (
    <Grid
      container
      spacing={{
        xxxl: 3, // 24px horizontal and vertical spacing for xxxl-xl
        xl: 3,   // 24px spacing for xl
        lg: 2,   // 16px spacing for lg
        md: 2,   // 16px spacing for md
        sm: 0,   // No horizontal spacing for sm and below
        xxs: 0,   // No horizontal spacing for xs and below
      }}
      rowSpacing={{
        sm: 2,  // 16px vertical spacing for sm and below
        xxs: 2,  // 16px vertical spacing for xs
        lg: 3
      }}
    >
      {/* First Certificate */}
      <Grid item xl={6} lg={6} md={6} sm={12} xxs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'stretch',
            aspectRatio: { sm: '374 / 264', xxs: 'unset' },
            height: { lg: 'auto', xl: 'auto', xs: 'auto' },
            minHeight: '190px',
          }}
        >
          <img
            src={certificate1}
            alt="Certificate 1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Grid>

      {/* Second Certificate */}
      <Grid item xl={6} lg={6} md={6} sm={12} xxs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'stretch',
            aspectRatio: { sm: '374 / 264', xs: 'unset' },
            height: { lg: 'auto', xl: 'auto', xs: 'auto' },
            minHeight: '190px',
          }}
        >
          <img
            src={certificate2}
            alt="Certificate 2"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Grid>

      {/* Third Certificate */}
      <Grid item xl={6} lg={6} md={6} sm={12} xxs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'stretch',
            aspectRatio: { sm: '374 / 264', xs: 'unset' },
            height: { lg: 'auto', xl: 'auto', xs: 'auto' },
            minHeight: '190px',
          }}
        >
          <img
            src={certificate3}
            alt="Certificate 3"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Grid>

      {/* LinkedIn Review */}
      <Grid item xl={6} lg={6} md={6} sm={12} xxs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'stretch',
            aspectRatio: { sm: '374 / 264', xs: 'unset' },
            height: { lg: 'auto', xl: 'auto', xs: 'auto' },
            minHeight: '190px',
          }}
        >
          <LinkedInReview />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withScrollEffect(Certificates);
