import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumUsers = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{pb: { xl: '80px', lg: '60px', xxs: '0' }}}>
    {/* Container for the title */}
    <Grid container justifyContent="center" spacing={0}>
      <Grid
        item
        xl={8}
        lg={10} // 10 columns on lg
        md={12} // 100% on md and smaller
        sm={12}
        xs={12}
      >  
    <Box sx={{pb: { xl: '80px', sm: '60px', xxs: '48px' }}}>
      <Grid item sm={8} xs={12}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xxs: '30px', sm: '34px', md: '40px' },
            fontFamily: 'Playfair Display Bold',
            pb: {
              lg: '24px', // 24px for lg
              xxs: '16px', // 16px for xxs to md
            },
          }}
        >
          Users
        </Typography>
      </Grid>

      {/* Container for cards that is 8 columns wide */}
      <Grid container spacing={4}>
        {/* Each card will be 4 columns wide */}
        <Grid item sm={6} xs={12}>
          <Box
            sx={{
              border: '1px solid #EFEFF8',
              padding: '32px',
              height: {
                xxxl: '177px',
                xl: '177px',
                lg: '177px',
                md: '168px',
                sm: 'auto',
                xxs: 'auto', // Auto height for smaller screens
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '20px', // Headings 20px
                fontWeight: 'bold',
                pb: '8px',
              }}
            >
              1. Internal Users
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '18px', // Text 18px
                pb: '8px',
              }}
            >
              Deputies, assistants, lobbyists, administration, communication offices,
              content managers.
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Box
            sx={{
              border: '1px solid #EFEFF8',
              padding: '32px',
              height: {
                xxxl: '177px',
                xl: '177px',
                lg: '177px',
                md: '168px',
                sm: 'auto',
                xxs: 'auto', // Auto height for smaller screens
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '20px', // Headings 20px
                fontWeight: 'bold',
                pb: '8px',
              }}
            >
              2. External Users
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '18px', // Text 18px
                pb: '8px',
              }}
            >
              EU citizens, journalists, educators, law implementation specialists, lawyers.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </Grid>
    </Grid>
    </Container>
  );
};

export default withScrollEffect (PoliticalForumUsers);
