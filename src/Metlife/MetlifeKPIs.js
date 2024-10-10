import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const MetLifeKPIs = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{pb:{ xl: '80px', lg: '40px', sm: '32px', xxs: '16px' }}}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0}>
        <Grid item xl={8} lg={10} md={12} sm={12} xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: '24px',
            }}
          >
            Design KPIs
          </Typography>
        </Grid>
      </Grid>

      {/* Content for KPIs */}
      <Grid
        container
        justifyContent="center"
        sx={{ fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid item xxl={8} xl={8} lg={10} md={12} sm={12} xs={12}>
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            <Typography sx={{ pb: '16px', color: '#646470' }}>
              Our design KPIs must align with the project’s objectives. The focus is on optimizing digital journeys, ensuring fast and successful completions, and gathering accurate user data. These metrics can be tracked across various touch points:
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                paddingLeft: 0,
                '& li': {
                  mb: '16px', // Adds spacing between list items
                },
              }}
            >
              <li>
                <Typography><b>• Completion rates</b></Typography>
              </li>
              <li>
                <Typography><b>• Completion times</b></Typography>
              </li>
              <li>
                <Typography><b>• Frequency of errors and mistakes</b></Typography>
              </li>
              <li>
                <Typography><b>• Error recovery rate</b></Typography>
              </li>
              <li>
                <Typography><b>• Accuracy of data</b> successfully submitted by users</Typography>
              </li>
              <li>
                <Typography><b>• Clarity of microcopy</b></Typography>
              </li>
              <li>
                <Typography><b>• Clarity of error messages</b></Typography>
              </li>
              <li>
                <Typography><b>• Support of browser’s autofill</b></Typography>
              </li>
              <li>
                <Typography><b>• % of screen dedicated for forms</b> (mobile/desktop)</Typography>
              </li>
              <li>
                <Typography><b>• Overall satisfaction with the form flow and the experience on the site</b></Typography>
              </li>
              <li>
                <Typography>• System Usability Scale Score<b> > 70</b> </Typography>
              </li>
              <li>
                <Typography>
                <b> • Time to production, or how quickly designers can create new forms based on the design guidelines established in the project
                </b> </Typography>
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect (MetLifeKPIs);
