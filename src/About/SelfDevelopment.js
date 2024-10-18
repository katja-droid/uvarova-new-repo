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
          '& b': { 
            fontFamily: 'Calibre Medium', // Apply Calibre Medium for bold text
            fontWeight: '500', // Ensure medium weight
          },
        }}
      >
        In addition to my professional activities, I actively strive for self-development by participating in thematic events and master classes in UX/UI design, public speaking, and English language learning. I also strive to continuously improve my skills and knowledge by publishing articles on <b> <Link   rel="noopener noreferrer"
            target="_blank" style={{color: '#0A0A14', fontSize: '20px',}} className="link-text" to="https://medium.com/">Medium</Link></b> and completing basic <b><Link style={{color: '#0A0A14', fontSize: '20px',}} className="link-text"   rel="noopener noreferrer"
            target="_blank" to="https://owu.com.ua/">HTML/CSS</Link></b>  courses.
      </Typography>
    </>
  );
};

export default withScrollEffect(SelfDevelopment);
