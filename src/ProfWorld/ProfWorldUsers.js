import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const ProfWorldUsers = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ pb: { xl: '80px', sm: '60px', xxs: '48px' } }}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0}>
        <Grid item xl={8} xxs={12} lg={10}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              paddingBottom: { xl: '32px', lg: '24px', xxs: '24px' },
            }}
          >
            Users
          </Typography>
        </Grid>
      </Grid>

      {/* Grid layout for users */}
      <Grid
        container
        justifyContent="center"
        sx={{
          py: 2,
          fontFamily: 'Calibre Regular',
          fontSize: '18px',
        }}
        spacing={{ xxs: 2, sm: 2, md: 2, lg: 3, xl: 4 }} // Adjust spacing for horizontal gaps
      >
        <Grid item xl={8} xxs={12} lg={10}>
          <Grid
            container
            spacing={{ xxs: 2, sm: 2, md: 2, lg: 3, xl: 4 }} // Adjust spacing for vertical gaps
            alignItems="stretch" // Ensure items in a row are of the same height
          >
            {/* First row: Two items, half width */}
            <Grid item lg={6} md={6} xs={12} sx={{ display: 'flex' }}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px', flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  1. HR managers and recruiters
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                    pl: '16px', // Padding left for indentation
                  }}
                >
                  <b>Role:</b> Responsible for sourcing, screening, and managing candidates; maintaining employee records and documentation.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pl: '16px', // Padding left for indentation
                  }}
                >
                  <b>Needs:</b> Efficient candidate tracking, automation of routine tasks, ability to interact with other systems and services.
                </Typography>
              </Box>
            </Grid>

            <Grid item lg={6} md={6} xs={12} sx={{ display: 'flex' }}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px', flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  2. Managers and team leaders
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                    pl: '16px', // Padding left for indentation
                  }}
                >
                  <b>Role:</b> Making strategic decisions, monitoring department and employee performance, analyzing productivity.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pl: '16px', // Padding left for indentation
                  }}
                >
                  <b>Needs:</b> Access to up-to-date data on team performance, ability to monitor business status in real time.
                </Typography>
              </Box>
            </Grid>

            {/* Second row: Full-width item */}
            <Grid item lg={12} xs={12} sx={{ display: 'flex' }}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px', flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  3. Company employees
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                    pl: '16px', // Padding left for indentation
                  }}
                >
                  <b>Role:</b> Perform work tasks, interact with other colleagues, manage their own requests for vacation, time off, etc.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pl: '16px', // Padding left for indentation
                  }}
                >
                  <b>Needs:</b> Ease of creating requests and interacting with HR, especially around absence, requesting time off, and accessing information about colleagues.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect(ProfWorldUsers);
