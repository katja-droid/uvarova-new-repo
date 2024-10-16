import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumClientOverview = () => {
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

      <Typography sx={{ fontSize: '23px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>Political Forum </b><span style={{color: '#8A8A8A'}}>NDA</span>
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
       
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
      Industry: Legislature.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Within this website, there are between <b>98 and 175 websites</b> in different fields. No one knows the exact number. Sometimes new websites are created for new events, campaigns, new political groups, or committees.
      </Typography>

      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Users want accurate information and tend to  <b>leave when they find it</b>. Our <b>top task analysis study</b> provided insight into the main tasks that internal and external users frequently perform on websites and the current effectiveness of the platform in <b>helping users navigate</b> to the right pages and discover documents that match their interests.
      </Typography>

   
    </Box>
  );
};

export default withScrollEffect (PoliticalForumClientOverview);
