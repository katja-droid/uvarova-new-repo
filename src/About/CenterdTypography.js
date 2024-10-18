import React from 'react';
import { Typography, Box } from '@mui/material';

function CenteredTypography() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '18px',
        overflow: 'hidden',
        color: '#0A0A14',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontSize: { xl: '18px', md: '13px', xxs: '18px' },
          fontFamily: 'Calibre Medium',
          height: { xl: '18px', md: '13px', xxs: '18px' },
          color: '#0A0A14',
          transition: 'text-decoration 0.3s ease, text-underline-offset 0.3s ease', // Smooth transition for hover effect
          textDecoration: 'none', // No underline by default
          '&:hover': {
            textDecoration: 'underline', // Underline on hover
            textDecorationThickness: '2px', // Optional: thicker underline
            textUnderlineOffset: '3px', // Moves underline up on hover
          },
        }}
      >
        Oksana Tsybulska
      </Typography>
    </Box>
  );
}

export default CenteredTypography;
