import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import photo from '../assets/photoname_photo.png';
import icon from '../assets/photoname_icon.svg';
import CenteredTypography from './CenterdTypography';

const PhotoName = () => {
  return (
    <Box display="flex" flexDirection="row" width="100%" alignItems="center">
      {/* Photo taking specific width and height */}
      <Box
        sx={{
          width: { xl: '45px', md: '40px', xxs: '45px' },
          height: { xl: '45px', md: '40px', xxs: '45px' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
      <Link
  to="https://www.linkedin.com/in/oksana-tsybulska-676185177/"
  rel="noopener noreferrer"
  style={{
    margin: 0,
    padding: 0,
    display: 'inline-block', // Ensure the link container does not add extra space
    lineHeight: 0, // Removes extra space under inline elements
  }}
>
  <img
    src={photo}
    alt="Photo"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block', // Prevents the image from behaving like an inline element
      margin: 0, // Explicitly set margins to 0
      padding: 0, // Explicitly set padding to 0
    }}
  />
</Link>

      </Box>
<Box sx={{my: '7px'}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', // Align text container to top
          pl: {xl: '16px', md: '8px', xxs: '16px'},
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          {/* Name and icon in one row */}
          <Link
            to="https://www.linkedin.com/in/oksana-tsybulska-676185177/"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#0A0A14',
              display: 'flex',
              alignItems: 'flex-start', // Ensure items align at the top
              margin: 0,
              padding: 0,
            }}
          >
            <CenteredTypography />
          </Link>
          <Link
            to="https://www.linkedin.com/in/oksana-tsybulska-676185177/"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              margin: 0,
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              height: '16px', // Enforce height of 16px
              width: '16px', // Enforce width of 16px
            }}
          >
            <img
              src={icon}
              alt="Icon"
              style={{
                height: '16px', // Enforce strict 16px height
                width: '16px', // Enforce strict 16px width
                padding: 0,
                margin: 0,
                marginLeft: '4px'
              }}
            />
          </Link>
        </Box>
        {/* Link in the second row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            
          }}
        >
         <Typography sx={{fontSize: {xl: '16px', md: '12px', xxs: '16px'}, fontFamily: 'Calibre Regular', color: '#8A8A8A',height: {xl: '17px', md: '13px', xxs: '17px'},
            overflow: 'hidden'}}>
            Beetroot Academy student
            </Typography>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PhotoName;
