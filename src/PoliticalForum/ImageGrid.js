import React from 'react';
import { useMediaQuery, Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import img1 from '../assets/round1.svg'; // Import your images
import img2 from '../assets/round2.svg';
import img3 from '../assets/round3.svg';
import img4 from '../assets/round4.svg';

const Image = styled('img')(({ theme, overlap }) => ({
  width: '100%',
  height: 'auto',
  transition: 'transform 0.3s ease-in-out',
  ...(overlap && {
    position: 'relative',
    zIndex: 1,
  }),
}));

const ImageGrid = () => {
  const isXXL = useMediaQuery('(min-width: 1920px)');
  const isLG = useMediaQuery('(min-width: 1200px) and (max-width: 1919px)');
  const isMD = useMediaQuery('(min-width: 900px) and (max-width: 1199px)');
  const isSM = useMediaQuery('(min-width: 600px) and (max-width: 899px)');
  const isXS = useMediaQuery('(max-width: 599px)');

  const gridProps = () => {
    if (isXXL || isLG) {
      return {
        xs: 3, // 4 images in a row
      };
    } else if (isMD || isSM) {
      return {
        xs: 6, // 2 images per row
      };
    } else {
      return {
        xs: 12, // Full width for each image
      };
    }
  };

  const images = [
    { src: img1, title: 'Round 1' },
    { src: img2, title: 'Round 2' },
    { src: img3, title: 'Round 3' },
    { src: img4, title: 'Round 4' },
  ]; // Array of images with titles

  return (
    <Box sx={{ padding: '16px', overflow: 'hidden' }}>
      <Grid container spacing={isXS ? 0 : 2}>
        {images.map((image, index) => (
          <Grid
            item
            key={index}
            {...gridProps()}
            sx={{
              display: 'flex',
              justifyContent: 'center', // Adjust justify-content for LG screens
              alignItems: 'center',
              position: 'relative', // Important for the overlap effect
              zIndex: 4 - index, // Ensures correct stacking order
            }}
          >
            {/* Wrap title and image in a box that matches the image width */}
            <Box
              sx={{
                width: isXXL || isLG ? '258.76px' : '100%', // Fixed width for XXL and LG, full width on smaller screens
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography variant="h6" component="div" >
                {image.title}
              </Typography>
              <Image
                src={image.src} // Using the imported images
                alt={`image-${index}`}
                overlap={isLG}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGrid;
