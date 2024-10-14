import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const MetlifeGoal = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{pb: { xl: '80px', lg: '60px', xxs: '0' }}}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} >
        <Grid item  xl={8}
          lg={10} // 10 columns on lg
          md={12} // 100% on md and smaller
          sm={12}
          xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: {xl: '32px', xxs: '24px'},
            }}
          >
            Goal of the Project
          </Typography>
        </Grid>
      </Grid>

      {/* Content for goal */}
      <Grid
        container
        justifyContent="center"
        sx={{  fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid
          item
          xxl={8}
          xl={8}
          lg={10}
          md={12}
          sm={12}
          xs={12}
        >
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            <Typography sx={{ pb: '16px', color: '#0A0A14' }}>
              The long-term goal of the project is to deliver <b>digital journeys that heavily focus on first-class UX, high level of accuracy, and low abandonment rates.
              </b></Typography>

            <Typography sx={{ pb: '16px', color: '#0A0A14' }}>
              The insurance company wants to reduce processing times, processing costs, and expenses in customer support for new applicants, change requests, and general inquiries from prospect leads. The project is set out for the next year, and it includes a number of sub-goals that we need to achieve gradually.
            </Typography>

            <Typography sx={{ pb: '16px', color: '#0A0A14' }}>
              Ultimately, all printed forms need to be converted into well-designed digital equivalents. Forms should be fully accessible and usable by anyone who wishes to get a quote, sign up for an insurance plan, or change an existing plan.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect (MetlifeGoal);
