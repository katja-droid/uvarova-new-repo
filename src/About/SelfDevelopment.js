import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import withScrollEffect from '../withScrollEffect.js';

const SelfDevelopment = () => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: 'Calibre Semibold',
          fontSize: '20px',
          color: '#0A0A14',
        }}
      >
        Self-Development
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{
          fontFamily: 'Calibre Regular',
          fontSize: '20px',
          color: '#0A0A14',
        }}
      >
        In addition to my professional activities, I actively strive for self-development by participating in thematic events and master classes in UX/UI design, public speaking, and English language learning. I also strive to continuously improve my skills and knowledge by publishing articles on <Link style={{color: '#0A0A14', fontSize: '20px',}} className="link-text" to="https://medium.com/">Medium</Link> and completing basic <Link style={{color: '#0A0A14', fontSize: '20px',}} className="link-text" to="https://owu.com.ua/">HTML/CSS</Link>  courses.
      </Typography>
    </>
  );
};

export default withScrollEffect(SelfDevelopment);
