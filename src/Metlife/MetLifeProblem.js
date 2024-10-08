import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const MetLifeProblem = () => {
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
        <Grid item  xl={8}
          lg={10} // 10 columns on lg
          md={12} // 100% on md and smaller
          sm={12}
          xs={12}>
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
              }}
            >
              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  1. Bounce Rates:
                </Typography>
                <Typography sx={{ pb: '4px' }}> {/* Reduced padding below each text block */}
                  - Much of the traffic comes from search engines, but price comparison websites play a major role in the insurance industry.
                </Typography>
                <Typography>
                  - Campaigns offer discounts, yet users frequently bounce between insurance services, leading to high bounce rates.
                </Typography>
                <Typography>
                  - Users often abandon digital journeys at the first step when they see the price quote or the lengthy process.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  2. No Digital Forms:
                </Typography>
                <Typography sx={{ pb: '4px' }}>
                  - Most forms are still in PDF format and haven’t been converted to digital.
                </Typography>
                <Typography>
                  - Existing digital forms are poorly designed, making it hard for users to submit accurate data.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  3. Form Bounce Rate on Mobile Devices:
                </Typography>
                <Typography sx={{ pb: '4px' }}>
                  - Similar issues arise on mobile devices, leading to a high form abandonment rate.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  4. Recurring Information:
                </Typography>
                <Typography sx={{ pb: '4px' }}>
                  - Users often need to repeat the same information in multiple PDFs, leading to frustration.
                </Typography>
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MetLifeProblem;
