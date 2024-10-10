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
          '& b': { fontFamily: 'Calibre Medium' },
          p: 0, // Remove any padding
          m: 0, // Remove any margin
        }}
      >
        I also <b>mentored a UX/UI designer</b> for 9 months at <Link to="https://beetroot.academy/" style={{ color: '#0A0A14' }}><b>Beetroot Academy</b></Link>, helping the mentee set career goals and develop an action plan to achieve them. The program taught facilitation, coaching, and goal-setting skills.
      </Typography>
    </>
  );
};

export default withScrollEffect(Mentorship);
