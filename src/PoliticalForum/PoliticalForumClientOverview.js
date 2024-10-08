import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PoliticalForumClientOverview = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: { lg: '80px', md: '40px', sm: '32px', xxs: '16px' } }}>
      
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

      <Typography
        sx={{
          color: '#0A0A14', 
          fontFamily: 'Calibre SemiBold', 
          textDecoration: 'none',
          fontSize: '18px'
        }}
      >
        Political Forum NDA
      </Typography>

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
        <b>Forum for political debate and decision-making.</b> 
        Industry: Legislature.
      </Typography>

      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Within this website, there are between <b>98 and 175 websites in different fields</b>. No one knows the exact number. Sometimes new websites are created for new events, campaigns, new political groups, or committees.
      </Typography>

      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Users want accurate information and tend to leave when they find it. Our top task analysis study provided insight into the main tasks that internal and external users frequently perform on websites and the current effectiveness of the platform in helping users navigate to the right pages and discover documents that match their interests.
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

export default PoliticalForumClientOverview;
