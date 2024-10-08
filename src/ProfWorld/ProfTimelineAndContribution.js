import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProfTimelineAndContribution = ({ contribution, tools }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: { lg: '80px', md: '40px', sm: '32px', xxs: '16px' } }}>
      {/* Timeline */}
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)', // Gradient as a string
          WebkitBackgroundClip: 'text', // WebKit prefix for Safari and Chrome
          WebkitTextFillColor: 'transparent', // WebKit text fill for Safari and Chrome
          backgroundClip: 'text', // Standard background-clip
          textFillColor: 'transparent', // Standard text-fill-color (for other browsers)
          fontFamily: 'Calibre Bold',
          pb: '8px',
          textTransform: 'uppercase', // Make text uppercase
        }}
      >
        Timeline
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>May 2022 — May 2024</b> ~ 2 years
      </Typography>

      {/* My role */}
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)', // Gradient as a string
          WebkitBackgroundClip: 'text', // WebKit prefix for Safari and Chrome
          WebkitTextFillColor: 'transparent', // WebKit text fill for Safari and Chrome
          backgroundClip: 'text', // Standard background-clip
          textFillColor: 'transparent', // Standard text-fill-color (for other browsers)
          fontFamily: 'Calibre Bold',
          pb: '8px',
          pt: { lg: '32px', xxs: '24px' },
          textTransform: 'uppercase', // Make text uppercase
        }}
      >
        My role
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>UX/UI Designer</b> ~ 2 years
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Developed functional products with user expectations in mind and emphasized uniqueness from competing products. Conducted research and analysis, including surveys and focus groups, to focus on developing key features with user expectations in mind.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Improved navigation to ensure users get the most out of the platform; created an MVP for the SaaS platform and systematically collected feedback to reduce the risk of errors.
      </Typography>

      {/* Contribution */}
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)', // Gradient as a string
          WebkitBackgroundClip: 'text', // WebKit prefix for Safari and Chrome
          WebkitTextFillColor: 'transparent', // WebKit text fill for Safari and Chrome
          backgroundClip: 'text', // Standard background-clip
          textFillColor: 'transparent', // Standard text-fill-color (for other browsers)
          fontFamily: 'Calibre Bold',
          pb: '8px',
          pt: { lg: '32px', xxs: '24px' },
          textTransform: 'uppercase', // Make text uppercase
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
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)', // Gradient as a string
          WebkitBackgroundClip: 'text', // WebKit prefix for Safari and Chrome
          WebkitTextFillColor: 'transparent', // WebKit text fill for Safari and Chrome
          backgroundClip: 'text', // Standard background-clip
          textFillColor: 'transparent', // Standard text-fill-color (for other browsers)
          fontFamily: 'Calibre Bold',
          pb: '8px',
          pt: { lg: '32px', xxs: '24px' },
          textTransform: 'uppercase', // Make text uppercase
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
            <Link to={item.href} style={{ color: '#0A0A14', textDecoration: 'none', fontSize: '18px', fontFamily: 'Calibre Regular' }}>
              {item.name}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProfTimelineAndContribution;
