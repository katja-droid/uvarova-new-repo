import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const PoliticalForumUsers = () => {
  return (
    <>
      <Container disableGutters maxWidth={false}>
        {/* Container for the title */}
        <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
          <Grid item sm={8} xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xxs: '30px', sm: '34px', md: '40px' },
                fontFamily: 'Playfair Display Bold',
                pb: '24px',
              }}
            >
              Users
            </Typography>
          </Grid>
        </Grid>

        {/* Container for cards that is 8 columns wide */}
        <Grid
          container
          justifyContent="center"
          sx={{ py: 2, fontFamily: 'Calibre Regular', fontSize: '18px' }}
        >
          <Grid item sm={8} xs={12}>
            <Grid container spacing={4}>
              {/* Each card will be 4 columns wide */}
              <Grid item sm={6} xs={12}>
                <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
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
                    <b>Examples:</b> Deputies, assistants, lobbyists, administration, communication offices, content managers.
                  </Typography>
                </Box>
              </Grid>

              <Grid item sm={6} xs={12}>
                <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
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
                    <b>Examples:</b> EU citizens, journalists, educators, law implementation specialists, lawyers.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PoliticalForumUsers;
