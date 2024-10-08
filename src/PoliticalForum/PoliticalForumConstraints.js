import { Box, Typography } from '@mui/material';
import React from 'react';

const PoliticalForumConstraints = () => {
  return (
    <div id="politicalForumConstraints" style={{ width: '100%' }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xxs: '30px', sm: '34px', md: '40px' },
          fontFamily: 'Playfair Display Bold',
          pb: { xxs: '16px', sm: '24px', lg: '32px' }, // Responsive padding after heading
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
        }}
      >
        <li>Should have high top tasks completion rates</li>
        <li>Have high error recovery rate</li>
        <li>Work in at least 24 official languages</li>
        <li>Fully accessible (AA level)</li>
        <li>GDPR-compliant</li>
        <li>Minimal environmental impact</li>
        <li>Drive user’s engagement</li>
        <li>Reduce the number of requests for the service desk</li>
        <li>Improve the speed of publishing</li>
        <li>Everything available on the site right now must still be accessible on the site</li>
      </Box>
    </div>
  );
};

export default PoliticalForumConstraints;
