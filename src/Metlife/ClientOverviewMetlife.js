import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ClientOverviewMetlife = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: { lg: '80px', md: '40px', sm: '32px', xxs: '16px' } }}>
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
        Client
      </Typography>

      <Link
        to="https://www.metlife.ua/"
        style={{ color: '#0A0A14', fontFamily: 'Calibre SemiBold', textDecoration: 'none' }}
      >
        MetLife
      </Link>

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
        Overview
      </Typography>

      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>MetLife is a major global insurance company</b> that just recently launched a <b>project to transition to digital</b>.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        The company’s typical method of filling out forms requires users to print a PDF, fill it out manually, sign it, and either mail it or hand it directly to the desk in the office.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Typically, <b>this process is very time-consuming and costly</b>. Users often forget to submit important information, some errors in the information entered need to be corrected, and the processing time is getting longer every year.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
      In addition, users often <b>forget</b> to submit important information, some<b> errors </b>in the information entered need to be <b> corrected</b>, and the processing time is getting longer every year.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
      
Unfortunately, the <b>insurance realm is so complex</b> that a single PDF often contains <b>10-12 pages </b>and the customer usually has to complete<b> 5-6 PDFs</b> for a complex inquiry.
   </Typography>
 
  
   
    </Box>
  );
};

export default ClientOverviewMetlife;
