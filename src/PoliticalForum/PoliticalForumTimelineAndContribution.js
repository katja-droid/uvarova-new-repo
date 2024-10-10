import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumTimelineAndContribution = ({ tools }) => {
  const theme = useTheme();

  // Full contribution list
  const contribution = [
    { id: 1, name: 'User Research' },
    { id: 2, name: 'Sketching' },
    { id: 3, name: 'Prototyping' },
    { id: 4, name: 'Web Mob Design' },
    { id: 5, name: 'Compiling Specifications' },
    { id: 6, name: 'Design System' },
    { id: 7, name: 'Usability Testing' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' } }}>
      {/* Timeline */}
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          fontFamily: 'Calibre Bold',
          pb: '8px',
          textTransform: 'uppercase',
        }}
      >
        Timeline
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>2023</b> ~ 9 months
      </Typography>

      {/* My role */}
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          fontFamily: 'Calibre Bold',
          pb: '8px',
          pt: { lg: '32px', xxs: '24px' },
          textTransform: 'uppercase',
        }}
      >
        My role
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>UX Designer</b> ~ 9 months
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        My goal was to improve the navigation and search functionality of the committee pages to help internal and external stakeholders find the information they need more efficiently.
      </Typography>

      {/* Contribution */}
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          fontFamily: 'Calibre Bold',
          pb: '8px',
          pt: { lg: '32px', xxs: '24px' },
          textTransform: 'uppercase',
        }}
      >
        Contribution
      </Typography>
      <Box>
        {contribution.map((item) => (
          <Box
            key={item.id}
            component="span"
            sx={{
              backgroundColor: '#F2F3F7',
              padding: '8px',
              borderRadius: '4px',
              display: 'inline-block',
              color: '#0A0A14',
              mr: { xs: '8px', md: '10px' },
              mb: { xs: '8px', md: '10px' },
            }}
          >
            {item.name}
          </Box>
        ))}
      </Box>

      {/* Tools used */}
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          fontFamily: 'Calibre Bold',
          pb: '8px',
          pt: { lg: '32px', xxs: '24px' },
          textTransform: 'uppercase',
        }}
      >
        Tools used
      </Typography>
      <Box>
        {tools.map((item) => (
          <Box
            key={item.id}
            component="span"
            sx={{
              backgroundColor: '#F2F3F7',
              padding: '8px',
              borderRadius: '4px',
              display: 'inline-block',
              color: '#0A0A14',
              mr: { xs: '8px', md: '10px' },
              mb: { xs: '8px', md: '10px' },
            }}
          >
            {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default withScrollEffect (PoliticalForumTimelineAndContribution);
