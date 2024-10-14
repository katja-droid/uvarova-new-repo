import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumConstraints = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{pb: { xl: '80px', lg: '60px', xxs: '0' }}}>
    {/* Container for the title */}
    <Grid container justifyContent="center" spacing={0}>
      <Grid
        item
        xl={8}
        lg={10} // 10 columns on lg
        md={12} // 100% on md and smaller
        sm={12}
        xs={12}
      >  
    <div id="politicalForumConstraints" style={{ width: '100%' }}>
       <Box sx={{ pb: { xl: '80px', sm: '60px', xxs: '48px' } }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xxs: '30px', sm: '34px', md: '40px' },
          fontFamily: 'Playfair Display Bold',
          pb: {
            lg: '24px', // 24px for lg
            xxs: '16px', // 16px for xxs to md
          },
        }}
      >
        Project's Constraints
      </Typography>

      <Typography sx={{ fontSize: '18px', fontFamily: 'Calibre Regular', pb: '16px' }}>
        The new navigation and search design should solve the problems listed earlier. Decisions made during the design process must be measured and based on user research data (key design performance indicators). Here are the main constraints that the new design must take into account:
      </Typography>

      <Box
        component="ul"
        sx={{
          fontSize: '18px',
          color: '#0A0A14',
          lineHeight: '26px',
          listStyle: 'disc', // Adds default bullet markers
          paddingLeft: '20px', // Ensures default padding for list markers
          fontFamily: 'Calibre Regular',
          pt: 0
        }}
      >
        <li>Should have<b> high top tasks completion rates</b></li>
        <li>Have <b>high error recovery rate</b></li>
        <li>Work in at least 24 official languages</li>
        <li><b>Fully accessible</b> (AA level)</li>
        <li><b>GDPR-compliant</b> </li>
        <li><b>Minimal environmental impact</b></li>
        <li><b>Drive user’s engagement</b></li>
        <li><b>Reduce the number of requests </b>for the service desk</li>
        <li><b>Improve the speed of publishing</b></li>
        <li>Everything available on the site right now must still be accessible on the site</li>
      </Box>
      </Box>
    </div>
    </Grid>
    </Grid>
    </Container>
    
  );
};

export default withScrollEffect (PoliticalForumConstraints);
