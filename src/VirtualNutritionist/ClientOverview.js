import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import withScrollEffect from '../withScrollEffect.js';

const ClientOverview = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' } }}>
      <Typography
        variant='body1' // Use body1 or h6 instead of h7
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)', // Gradient as a string
          WebkitBackgroundClip: 'text', // WebKit prefix for Safari and Chrome
          WebkitTextFillColor: 'transparent', // WebKit text fill for Safari and Chrome
          backgroundClip: 'text', // Standard background-clip
          textFillColor: 'transparent', // Standard text-fill-color (for other browsers)
          fontFamily: 'Calibre Bold',
          pb: '8px',
          textTransform: 'uppercase' // Make text uppercase
        }}
      >
        Client
      </Typography>

      <Link
        to="https://www.getwin.com.ua/"
        style={{ color: '#0A0A14', fontFamily: 'Calibre SemiBold', textDecoration: 'none' }}
      >
        GetWin
      </Link>

      <Typography
        variant='body1' // Replacing h7 with body1
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
          textTransform: 'uppercase' // Make text uppercase
        }}
      >
        Overview
      </Typography>

      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>GetWin</b> is an international project that involves the creation of a <b>health monitoring application</b>.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        It offers features such as <b>calorie counting, balanced meal planning, progress tracking</b> based on lifestyle
        and occupation, and interaction with a medical specialist.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>Users can add and send test results</b> for health monitoring, as well as receive analysis results and plans
        for achieving their goals. The application will first be implemented on the <b>iOS platform</b>, followed by{' '}
        <b>Android</b>.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Meanwhile, another team developed a web version of the application, focusing on synchronizing information
        displays, maintaining a consistent style, and ensuring consistent logic across all platforms.
      </Typography>

      <Typography
        variant='body1' // Replacing h7 with body1
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
          textTransform: 'uppercase' // Make text uppercase
        }}
      >
        Project Participants
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Project Manager, Back-end, Front-end, UX/UI designer, Nutritionist
      </Typography>
    </Box>
  );
};

export default withScrollEffect (ClientOverview);
