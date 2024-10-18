import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import withScrollEffect from '../withScrollEffect.js';

const Mentorship = () => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: 'Calibre Semibold',
          fontSize: '20px',
          color: '#0A0A14',
          p: 0, // Remove any padding
          m: 0, // Remove any margin
        }}
      >
        Mentorship
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
          p: 0, // Remove any padding
          m: 0, // Remove any margin
        }}
      >
        I also <b>mentored a UX/UI designer</b> for 9 months at{' '}
        <b>
          <Link 
            to="https://beetroot.academy/" 
              rel="noopener noreferrer"
            target="_blank"
            style={{ 
              color: '#0A0A14', 
              fontSize: '20px',
              textDecoration: 'underline', // Apply underline
            }}
            className="link-text"
          >
            Beetroot Academy
          </Link>
        </b>, 
        helping the mentee set career goals and develop an action plan to achieve them. The program taught facilitation, coaching, and goal-setting skills.
      </Typography>
    </>
  );
};

export default withScrollEffect(Mentorship);
