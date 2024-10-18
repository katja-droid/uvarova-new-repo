import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import withScrollEffect from '../withScrollEffect.js';

const MajorProject = () => {
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
        Major Project
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
          pb: 0,
          p: 0, // Remove any padding
          m: 0, // Remove any margin
        }}
      >
        One of my major projects was the development of a 
        <b>
          <Link 
            to="/prof-word" 
            style={{ 
              color: '#0A0A14', 
              fontSize: '20px',
              textDecoration: 'underline', // Keep link styling clean without underline
            }}
            className="link-text"
          >
            SaaS platform for automating HR processes
          </Link>
        </b>, 
        <b>which reduced routine tasks by up to 70%</b>, covering all stages from defining the product’s goals to handing off the design to developers and ensuring quality.
      </Typography>
    </>
  );
};

export default withScrollEffect(MajorProject);
