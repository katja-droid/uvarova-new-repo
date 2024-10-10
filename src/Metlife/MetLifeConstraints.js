import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const MetLifeConstraints = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{pb:{ xl: '80px', lg: '40px', sm: '32px', xxs: '16px' }}}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} >
        <Grid item xl={8} lg={10} md={12} sm={12} xs={12}>
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
            <Typography sx={{ pb: '8px' }}>
              The form design needs to address the issues listed above. The decisions made in the design process need to be measured and based on evidence from user research (design KPIs). Here are the main constraints that the new form designs need to respect:
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
                <Typography>• Should have <b>high completion rates</b></Typography>
              </li>
              <li>
                <Typography>• Should have  <b>high accuracy rates</b></Typography>
              </li>
              <li>
                <Typography>• Should have  <b>high error recovery rate</b></Typography>
              </li>
              <li>
                <Typography>
                  • Should support  <b>at least 7 languages</b> (English, Spanish, German, French, Mandarin, Hebrew, and Arabic)
                </Typography>
              </li>
              <li>
                <Typography>• Should be  <b>fully accessible</b> (AAA level)</Typography>
              </li>
              <li>
                <Typography>• Should be  <b>CCPA/GDPR-compliant</b></Typography>
              </li>
              <li>
                <Typography>• Should  <b>reduce the processing time</b> for each form</Typography>
              </li>
              <li>
                <Typography>• Should  <b>reduce the number of requests</b> for the service desk</Typography>
              </li>
              <li>
                <Typography>• Should provide  <b>first-class UX </b>and  <b>first-class accessibility</b></Typography>
              </li>
              <li>
                <Typography>• Should be  <b>consistent across all forms </b>provided by the company</Typography>
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect (MetLifeConstraints);
