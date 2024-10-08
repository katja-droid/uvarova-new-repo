import React from 'react'
import OverlappingImages from './OverlappingImages'
import ImageGrid from './ImageGrid'
import { Box, Grid, ThemeProvider, Typography } from '@mui/material'
import theme from '../theme'
import ImageGridTwoRows from './ImageGridTwoRows'

const PoliticalForumTesting = () => {
  return (
    <div id="testing-pf">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            color: '#0A0A14',
            py: {
              xxs: '24px',
              xs: '48px',
              sm: '60px',
              md: '84px',
              lg: '84px',
              xl: '84px',
              xxxl: '97px',
            },
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
                Testing Summary
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'disc', // Change markers to discs
                  paddingLeft: '20px', // Add padding for better alignment
                  '& li': {
                    mb: '8px', // Add 8px margin bottom for spacing between items
                    fontSize: '18px',
                  },
                }}
              >
                <li>
                  We select no more than 3 main audience segments (age: {'<40'}, {'>40'}).
                </li>
                <li>
                  23 participants were invited.
                </li>
                <li>
                  It usually takes three rounds of testing to achieve over 80% completion rates.
                </li>
                <li>
                  Sometimes classes have twins.
                </li>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{display: {
            xxs: 'none', 
            lg: 'block'
          }}}>
          <ImageGrid />
          </Box>
          <Box sx={{display: {
            xxs: 'none', 
            sm: 'block',
            lg: 'none'
          }}}>
          <ImageGridTwoRows/>
          </Box>
        </Box>
     
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            color: '#0A0A14',
            py: {
              xxs: '24px',
              xs: '48px',
              sm: '60px',
              md: '84px',
              lg: '84px',
              xl: '84px',
              xxxl: '97px',
            },
          }}
        >
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
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
                }}
              >
                To obtain a high success rate, we test the exact same 15 top task instructions, 
                with repetition, on the exact same types of people over a period of time.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default PoliticalForumTesting
