import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const MetLifeConstraints = () => {
  return (
    <Container disableGutters maxWidth={false}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
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
              pb: '24px',
            }}
          >
            Project's Constraints
          </Typography>
        </Grid>
      </Grid>

      {/* Content for constraints */}
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
                 <Typography sx={{ pb: '16px'}}>
              The form design needs to address the issues listed above. The decisions made in the design process need to be measured and be based on evidence from user research (design KPIs). Here are the main constraints that the new form designs need to respect:
            </Typography>
              <li>
                <span>•</span><Typography component="span">Should have high completion rates</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Should have high accuracy rates</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Should have high error recovery rate</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Should support at least 7 languages (English, Spanish, German, French, Mandarin, Hebrew, and Arabic)</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Should be fully accessible (AAA level)</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Should be CCPA/GDPR-compliant</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Should reduce the processing time for each form</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Should reduce the number of requests for the service desk</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Should provide first-class UX and first-class accessibility</Typography><br />
              </li>
              <li>
                <span>•</span><Typography component="span">Should be consistent across all forms provided by the company</Typography><br />
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MetLifeConstraints;
