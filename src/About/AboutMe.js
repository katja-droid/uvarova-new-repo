import React from 'react';
import { Typography } from '@mui/material';
import withScrollEffect from '../withScrollEffect.js';

const AboutMe = () => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: 'Calibre Semibold',
          fontSize: '20px',
          color: '#0A0A14',
          pt: 0,
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{
          fontFamily: 'Calibre Regular',
          fontSize: '20px',
          color: '#0A0A14',
          
          '& b': { fontFamily: 'Calibre Medium' },
        }}
      >
        I am Olga, a UX/UI designer with <b>4 years of experience</b>, specializing in the <b>B2B and B2C segment</b>, with a focus on <b>SaaS, websites, ERP and mobile/web application</b> creation.
      </Typography>
    </>
  );
};

export default withScrollEffect (AboutMe);
