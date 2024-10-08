import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const MetLifeKPIs = () => {
  return (
    <Container disableGutters maxWidth={false}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
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
           

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                paddingLeft: 0,
                '& li': {
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
            >
                 <Typography sx={{ pb: '16px' }}>
              Our design KPIs must align with the project’s objectives. The focus is on optimizing digital journeys, ensuring fast and successful completions, and gathering accurate user data. These metrics can be tracked across various touch points:
            </Typography>
              <li>
                <span>•</span><Typography component="span">Completion rates</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Completion times</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Frequency of errors and mistakes</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Error recovery rate</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Accuracy of data successfully submitted by users</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Clarity of microcopy</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Clarity of error messages</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Support of browser’s autofill</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">% of screen dedicated for forms (mobile/desktop)</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Overall satisfaction with the form flow and the experience on the site</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">System Usability Scale Score > 70</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Time to production, or how quickly designers can create new forms based on the design guidelines established in the project</Typography><br />
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MetLifeKPIs;
