import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import youtube from '../assets/youtubeImage.png';
import presenter from '../assets/presenter.png';
import withScrollEffect from '../withScrollEffect.js';

const VideosAndPresentations = () => {
  return (
    <Grid container spacing={{
      xxxl: 3, xl: 3, lg: 2, md: 2, sm: 0, xxs: 0
    }} sx={{ pb: { xxs: '16px', xs: '24px' }}}>
      <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} display="flex" alignItems="stretch">
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
          <Link to="https://www.youtube.com/watch?v=TfTJv_vHurA" style={{ textDecoration: 'none' }}>
            <img
              src={youtube}
              style={{ width: '100%', aspectRatio: '411/238', objectFit: 'cover', borderRadius: '4px', marginBottom: '8px' }}
              alt="YouTube"
            />
            <Typography sx={{ fontSize: '16px', pb: '8px', color: '#0A0A14', fontFamily: 'Calibre Regular', lineHeight: 'normal' }}>
              Beetroot Academy, the school where I studied design, asked me to provide feedback on a UI/UX design program.
            </Typography>
            <Typography sx={{ fontSize: '16px', color: '#646470', fontFamily: 'Calibre Regular', lineHeight: 'normal'  }}>May 2023</Typography>
          </Link>
        </Box>
      </Grid>
    
      <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} display="flex" alignItems="stretch">
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
          <img
            src={presenter}
            style={{ width: '100%', aspectRatio: '411/238', objectFit: 'cover', borderRadius: '4px', marginBottom: '8px' }}
            alt="Presenter"
          />
          <Typography sx={{ fontSize: '16px', pb: '8px', color: '#0A0A14', fontFamily: 'Calibre Regular', lineHeight: 'normal'  }}>
            Acted as a presenter at Offline Beetup for 150 people. Topic: «How to live and work in Ukrainian IT during the crisis?».
          </Typography>
          <Typography sx={{ fontSize: '16px', color: '#646470', fontFamily: 'Calibre Regular', lineHeight: 'normal'  }}>July 2023</Typography>
        </Box>
      </Grid>
    </Grid>
    
  );
};

export default withScrollEffect(VideosAndPresentations);
