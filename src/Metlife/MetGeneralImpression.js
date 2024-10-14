import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const MetGeneralImpression = () => {
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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: {xl: '32px', xxs: '24px'},
            }}
          >
            General Impression
          </Typography>
        </Grid>
      </Grid>

      {/* Content for general impression */}
      <Grid container justifyContent="center" sx={{fontFamily: 'Calibre Regular', fontSize: '18px' }}>
        <Grid item xxl={8} xl={8} lg={10} md={12} sm={12} xs={12}>
          <Box sx={{ fontFamily: 'Calibre Regular', fontSize: '18px' }}>
            {/* Updated paragraph with line-height and spacing */}
            <Typography sx={{ color: '#646470' }}>
              According to conducted user interviews:
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                paddingLeft: 0,
                '& li': {
                  mb: '8px', // Adds spacing between list items to simulate natural paragraph spacing
                },
                mt: '8px'
              }}
            >
              <li>
                <Typography>• Forms are overwhelming and difficult to understand.</Typography>
              </li>

              <li>
                <Typography>• Often users don’t know how to proceed and abandon altogether.</Typography>
              </li>

              <li>
                <Typography>
                  • Users file receipts a few times a year, but they often forget to include important information
                  which makes processing very slow.
                </Typography>
              </li>

              <li>
                <Typography>• Users complain about how slow and confusing the entire insurance coverage process is.</Typography>
              </li>

              <li>
                <Typography>
                  • Users don’t understand all the fine print of insurance coverage: what is covered, and how, and when
                  not. They lack confidence about services that they will get, and what they will not get.
                </Typography>
              </li>

              <li>
                <Typography>
                  • The first mode of communication is either phone or email, which overwhelms customer service as there
                  are many complex questions that need time to be studied and answered.
                </Typography>
              </li>

              <li>
                <Typography>
                  • Due to Covid-19, booking phone appointments is adventurous and complicated — booking slots are
                  reserved months in advance, causing people to cancel their insurance altogether.
                </Typography>
              </li>

              <li>
                <Typography>
                  • Because of all of that, despite the effort to invest in digital, most users fail to submit forms
                  online and hence still prefer to send printed forms with custom marks and notes, which also increases
                  processing times.
                </Typography>
              </li>

              <li>
                <Typography>
                  • The client isn’t aware of best practices around web forms; most forms are extremely inconsistent,
                  poorly designed, and use a lot of jargon which is difficult to understand.
                </Typography>
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect(MetGeneralImpression);
