import React from 'react';
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import image1 from '../assets/overlap-1.svg'
import image2 from '../assets/overlap-1.svg'
import image3 from '../assets/overlap-1.svg'
import image4 from '../assets/overlap-1.svg'
import withScrollEffect from '../withScrollEffect.js';
const ImageBox = styled(Box)(({ theme }) => ({
  width: '258.76px',
  height: 'auto',
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const OverlappingImages = () => {
  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  return (
    <Grid container spacing={2} >
        <img src={image1} />
    </Grid>
  );
};

export default withScrollEffect (OverlappingImages);
