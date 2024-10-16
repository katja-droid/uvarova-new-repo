import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import youtube from '../assets/youtubeImage.png';
import presenter from '../assets/presenter.png';
import withScrollEffect from '../withScrollEffect.js';

const VideosAndPresentations = () => {
  return (
    <Grid container spacing={2} sx={{ pb: { xxs: '16px', xs: '24px' }}}>
      <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} display="flex" alignItems="center">
        <Box>
          <Link to="https://www.youtube.com/watch?v=TfTJv_vHurA" style={{ fontSize: '16px', fontFamily: 'Calibre Regular', color: '#646470', textDecoration: 'none' }}>
            <img
              src={youtube}
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16/9',
                objectFit: 'cover',
                flexGrow: 1,
                paddingBottom: '8px',
                borderRadius: '4px'
              }}
              alt="YouTube"
            />
            <Typography sx={{ fontSize: '16px', fontFamily: 'Calibre Regular', pb: '8px', color: '#0A0A14' }}>
              Beetroot Academy, the school where I studied design, asked me to provide feedback on a UI/UX design program.
            </Typography>
            <Typography sx={{ fontSize: '16px', fontFamily: 'Calibre Regular', color: '#646470' }}>May 2023</Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} display="flex" alignItems="center">
        <Box>
          <img
            src={presenter}
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '16/9',
              objectFit: 'cover',
              flexGrow: 1,
              paddingBottom: '8px',
                borderRadius: '4px'
            }}
            alt="Presenter"
          />
          <Typography sx={{ fontSize: '16px', fontFamily: 'Calibre Regular', pb: '8px', color: '#0A0A14' }}>
            Acted as a presenter at Offline Beetup for 150 people. Topic: «How to live and work in Ukrainian IT during the crisis?».
          </Typography>
          <Typography sx={{ fontSize: '16px', fontFamily: 'Calibre Regular', color: '#646470' }}>July 2023</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withScrollEffect(VideosAndPresentations);
