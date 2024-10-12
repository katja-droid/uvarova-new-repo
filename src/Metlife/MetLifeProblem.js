import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const MetLifeProblem = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{pb:{ xl: '80px', lg: '40px', sm: '32px', xxs: '16px' }}}>
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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: {xl: '32px', xxs: '24px'},
            }}
          >
            The Problem
          </Typography>
        </Grid>
      </Grid>

      {/* Content for problems */}
      <Grid
        container
        justifyContent="center"
        sx={{ fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid
          item
          xl={8}
          lg={10} // 10 columns on lg
          md={12} // 100% on md and smaller
          sm={12}
          xs={12}
        >
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
              px: '24px',
            }}
          >
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                paddingLeft: 0,
                '& li': {
                  mb: '16px', // Reduced margin between list items
                },
                mt: 0
              }}
            >
              <li>
                <Typography sx={{  fontSize: '20px', fontFamily: 'Calibre SemiBold', }}>
                  1. Bounce rates:
                </Typography>
                <Typography sx={{ pb: '8px', pl: '16px', fontSize: '18px', fontFamily: 'Calibre Regular', }}>
                  Much of the traffic to the website comes from search engines, but especially in the health insurance business, price comparison websites play a major role.
                </Typography>
                <Typography sx={{ pb: '8px', pl: '16px', fontSize: '18px', fontFamily: 'Calibre Regular',}}>
                  There are dozens of campaigns running at any given time, with incentives ranging from discounts to free months of insurance.
                </Typography>
                <Typography sx={{ pb: '8px', pl: '16px', fontSize: '18px', fontFamily: 'Calibre Regular', }}>
                  Consequently, the bounce rates on client’s sites are quite high, with people jumping from one insurance service to the other.
                </Typography>
                <Typography sx={{ pb: '8px', pl: '16px', fontSize: '18px', fontFamily: 'Calibre Regular', }}>
                  For the digital journeys that are already created, users often abandon at the very first step when they noticed that 22 steps are required to complete a form, or when they see the price quote for an insurance.
                </Typography>
              </li>

              <li>
                <Typography sx={{  fontSize: '20px', fontFamily: 'Calibre SemiBold', }}>
                  2. No digital forms:
                </Typography>
                <Typography sx={{ pb: '8px', pl: '16px', fontSize: '18px', fontFamily: 'Calibre Regular', }}>
                  In terms of change requests or final application submissions, most of the PDF forms haven’t been converted to digital forms yet.
                </Typography>
                <Typography sx={{ pb: '8px', pl: '16px', fontSize: '18px', fontFamily: 'Calibre Regular', }}>
                  The ones that already exist are indeed used, but are poorly designed with a lot of issues blocking users from submitting accurate data.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontSize: '20px',  fontFamily: 'Calibre SemiBold', }}>
                  3. Form bounce rate on mobile devices:
                </Typography>
                <Typography sx={{ pb: '8px', pl: '16px', fontSize: '18px', fontFamily: 'Calibre Regular', }}>
                  Similar issues arise on mobile devices, where users often abandon the forms, leading to a high form bounce rate.
                </Typography>
              </li>

              <li>
                <Typography sx={{  fontSize: '20px', fontFamily: 'Calibre SemiBold', }}>
                  4. Recurring information:
                </Typography>
                <Typography sx={{ pb: '8px', pl: '16px', fontSize: '18px', fontFamily: 'Calibre Regular', }}>
                  Information that was specified in the first PDF is repeated in the third PDF.
                </Typography>
                <Typography sx={{ pb: '8px', pl: '16px', fontSize: '18px', fontFamily: 'Calibre Regular', }}>
                  This occurs due to the lack of categories and understanding of what the developer’s work will look like when implementing the project.
                </Typography>
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect (MetLifeProblem);
