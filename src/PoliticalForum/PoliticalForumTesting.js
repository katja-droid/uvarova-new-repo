import React from 'react';
import OverlappingImages from './OverlappingImages';
import ImageGrid from './ImageGrid';
import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '../theme';
import ImageGridTwoRows from './ImageGridTwoRows';
import ImageGridOnePerRow from './ImageGridOnePerRow';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumTesting = () => {
  return (
    <div id="testing-pf">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            color: '#0A0A14',
            pt: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' },
            mb: '32px', // Add 32px margin at the bottom to space it from the next section
            fontFamily: 'Calibre Regular'
          }}
        >
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              xl={6}
              lg={8}
              sx={{
                textAlign: 'left',
                pb: '24px',
                width: { xxs: '100%', lg: '100%' }, // 100% width for xxs-lg, 935px for xl and xxl
                maxWidth: { xxs: '100%', lg: '100%' }, // Ensuring it doesn't exceed 935px on xl-xxl
                mx: 'auto', // Center align the block horizontally
                pt: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                  fontFamily: 'Playfair Display Bold',
                  pb: '24px',
                  pt: 0,
                }}
                variant="h3"
              >
                Testing Summary
              </Typography>
              <Typography sx={{fontSize: '18px', pb: '8px',  fontFamily: 'Calibre Regular'}}>
              We select no more than 23 main audience segments (age: {'<40'}, {'>40'}).
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'disc', // Change markers to discs
                  paddingLeft: '20px', // Add padding for better alignment
                  margin: 0,
                  pb: '24px',
                  '& li': {
                    fontSize: '18px',
                  },
                  
                  lineHeight: '26px',
                }}
              >
                <li style={{paddingBottom:'8px'}}><b>23 participants</b>  were invited.</li>
                <li style={{paddingBottom:'8px'}}>
                  It usually takes <b>three rounds</b> of testing to achieve over 80%
                  completion rates.
                </li >
                <li style={{paddingBottom:'8px'}}>Sometimes classes have  <b>twins.</b></li>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: {
              xxs: 'none',
              lg: 'block',
            },
            mb: '32px', // Add 32px margin at the bottom to space it from the next section
          }}
        >
          <ImageGrid />
        </Box>

        <Box
          sx={{
            display: {
              xxs: 'none',
              sm: 'block',
              lg: 'none',
            },
            mb: '32px', // Add 32px margin at the bottom to space it from the next section
          }}
        >
          <ImageGridTwoRows />
        </Box>

        <Box
          sx={{
            display: {
              xxs: 'block',
              sm: 'none',
              lg: 'none',
            },
            mb: '32px', // Add 32px margin at the bottom to space it from the next section
          }}
        >
          <ImageGridOnePerRow />
        </Box>

        {/* Second Section */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            color: '#0A0A14',
           
          }}
        >
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center" sx={{ mt: '32px' }}>
            <Grid
              item
              xxs={12}
              xl={8}
              sx={{
                textAlign: 'center',
                pb: '24px',
                width: { xxs: '100%', lg: '100%' }, // 100% width for xxs-lg, 935px for xl and xxl
                maxWidth: { xxs: '100%', lg: '100%' }, // Ensuring it doesn't exceed 935px on xl-xxl
                mx: 'auto', // Center align the block horizontally
                fontFamily: 'Calibre Regular'
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                  fontFamily: 'Playfair Display Bold',
                  pb: '24px',
                }}
                variant="h3"
              >
                80-90% Success
              </Typography>
              <Typography
                sx={{
                  mb: '8px', // Add margin bottom similar to list items
                  fontSize: '18px',
                  lineHeight: '26px',
                  fontFamily: 'Calibre Regular'
                }}
              >
                To obtain a <b>high success rate</b>, we test the exact same <b>15 top task</b> instructions, with repetition, on the exact same types of people over
                a period of time.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default withScrollEffect(PoliticalForumTesting);
