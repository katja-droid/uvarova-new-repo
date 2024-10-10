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
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'stretch' }}>
          <img 
            src={certificate1} 
            alt="Certificate 1" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'stretch' }}>
          <img 
            src={certificate2} 
            alt="Certificate 2" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'stretch' }}>
          <img 
            src={certificate3} 
            alt="Certificate 3" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'stretch' }}>
          <LinkedInReview />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withScrollEffect(Certificates);
