import React from 'react';
import { Grid, Box } from '@mui/material';
import certificate1 from '../assets/certificate1.png';
import certificate2 from '../assets/certificate2.png';
import certificate3 from '../assets/certificate3.png';
import LinkedInReview from './LinkedInReview';
import withScrollEffect from '../withScrollEffect.js';

const Certificates = () => {
  return (
    <Grid container spacing={1} justifyContent="space-between"  >
      <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box sx={{ flexGrow: 1 }}>
          <img src={certificate1} width="100%" style={{ height: 'auto', objectFit: 'cover' }} alt="Certificate 1" />
        </Box>
      </Grid>
      <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box sx={{ flexGrow: 1 }}>
          <img src={certificate2} width="100%" style={{ height: 'auto', objectFit: 'cover' }} alt="Certificate 2" />
        </Box>
      </Grid>
      <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box sx={{ flexGrow: 1 }}>
          <img src={certificate3} width="100%" style={{ height: 'auto', objectFit: 'cover' }} alt="Certificate 3" />
        </Box>
      </Grid>
      <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
        <Box sx={{ flexGrow: 1 }}>
          <LinkedInReview />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withScrollEffect(Certificates);
