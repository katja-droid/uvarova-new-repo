import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import withScrollEffect from '../withScrollEffect.js';

const ProfClientOverview = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' } }}>
      
      {/* Client Section */}
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
          textTransform: 'uppercase'
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

      {/* Overview Section */}
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
          textTransform: 'uppercase'
        }}
      >
        Overview
      </Typography>

      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>GetWin is an international project </b>aimed at training and developing the practical skills of all human resources, from fledgling specialists to top managers.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        The project was created to  <b>optimize the recruitment process and improve psychological diagnostics</b> for more effective team building.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>Improved HR management efficiency and corporate culture</b> by creating clear profiles of companies, departments, and positions, and <b>automating HR functions.</b>
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Integration of calendars to optimize work planning and performance evaluation, along with the distribution of access rights among various entry points and users (owner, administrator, user, verifier).
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
      Distribution of access rights among <b>various entry points</b> and users (owner, administrator, user, verifier).
          </Typography>
      {/* Project Participants Section */}
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
          textTransform: 'uppercase'
        }}
      >
        Project Participants
      </Typography>

      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Project Manager, Back-end, Front-end, UX/UI Designer, HR, Psychologist
      </Typography>

    </Box>
  );
};

export default withScrollEffect (ProfClientOverview);
