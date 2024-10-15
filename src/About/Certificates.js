import React from 'react';
import { Grid, Box } from '@mui/material';
import certificate1 from '../assets/certificate1.png';
import certificate2 from '../assets/certificate2.png';
import certificate3 from '../assets/certificate3.png';
import LinkedInReview from './LinkedInReview';
import withScrollEffect from '../withScrollEffect.js';

const Certificates = () => {
  return (
    <Grid container spacing={1} justifyContent="space-between">
      {/* First Certificate */}
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'stretch',
            aspectRatio: { sm: '374 / 264', xxs: 'unset' }, // Aspect ratio for sm and above, removed for xs and below
            height: { lg: 'auto', xl: 'auto', xs: 'auto' }, // Ensure height adapts
            minHeight: '190px', // Minimum height to prevent shrinking
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
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'stretch',
            aspectRatio: { sm: '374 / 264', xs: 'unset' }, // Aspect ratio for sm and above, removed for xs and below
            height: { lg: 'auto', xl: 'auto', xs: 'auto' }, // Keep height adaptable
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
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'stretch',
            aspectRatio: { sm: '374 / 264', xs: 'unset' }, // Only apply aspect ratio for sm and above
            height: { lg: 'auto', xl: 'auto', xs: 'auto' }, // Keep height adaptable
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
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'stretch',
            aspectRatio: { sm: '374 / 264', xs: 'unset' }, // Remove aspect ratio for xs and xxs
            height: { lg: 'auto', xl: 'auto', xs: 'auto' }, // Keep height flexible
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
