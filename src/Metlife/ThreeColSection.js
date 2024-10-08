import React from 'react';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import ResponsiveGridMet from './ResponsiveGridMet';
import arrow from '../assets/arrowcol.svg'; // Import your custom arrow SVG
import arrowVert from '../assets/arrowcol-vert.svg'; // Import your custom arrow SVG
import ResponsiveGridMetMob from './ResponsiveGridMetMob';

const ThreeColSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#fff',
            color: '#0A0A14',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Container
            disableGutters
            maxWidth={false}
            sx={{
              display: { lg: 'flex', xxs: 'none' },
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative', // To allow positioning of arrow
            }}
          >
            {/* Render your columns inside ResponsiveGridMet */}
            <ResponsiveGridMet />

            {/* Custom arrow image pointing from Column 1 to Column 2 */}
            <Box
              component="img"
              src={arrow}
              alt="Arrow from column 1 to column 2"
              sx={{
                position: 'absolute',
                top: '22%',
                left: '31%', // Assuming 3 columns and arrow placed between col 1 and col 2
                transform: 'translateY(-50%)',
                width: '7%', // Using percentage-based width for responsiveness
                height: 'auto', // Maintain aspect ratio
              }}
            />
          </Container>
        </Box>

        {/* Mobile and Tablet version */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: { xxs: 'flex', lg: 'none' },
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative', // To allow positioning of arrow
          }}
        >
          {/* Render your columns inside ResponsiveGridMetMob */}
          <ResponsiveGridMetMob />

          {/* Custom arrow image pointing from Column 1 to Column 2 */}
          <Box
            component="img"
            src={arrowVert}
            alt="Arrow from image 1 to image 2"
            sx={{
              position: 'absolute',
              top: { md: '30%', xxs: '38%', }, // Adjust to position arrow between the first and second items
              left: { md: '41%', xxs: '91%', },
              transform: {
                md: 'translate(-50%, -50%)',
                xxs: 'translate(-50%, -50%) scaleX(-1)', // Mirror the arrow horizontally below the md breakpoint
              },
              width: 'auto', // Using percentage-based width for responsiveness
              height: { md: '17.8%', xxs: '12%',}, // Maintain aspect ratio
            }}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ThreeColSection;
