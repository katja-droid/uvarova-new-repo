import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const MetLifeUsers = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{pb:{ xl: '80px', lg: '40px', sm: '32px', xxs: '16px' }}}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} >
        <Grid item xxl={8} // 8 columns on xxxl-xl
          xl={8}
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
            Users
          </Typography>
        </Grid>
      </Grid>

      {/* Content for users */}
      <Grid container justifyContent="center" sx={{ py: 2 }}>
        <Grid
          item
          xxl={8} // 8 columns on xxxl-xl
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
            }}
          >
            <Typography sx={{ pb: '16px', color: '#0A0A14' }}>
              There is a wide variety of users that need to be supported. Ideally, the client would love their customers to be able to fill in forms on their own, but in reality, end-users often hire professionals and advisors to do it for them.
            </Typography>

            <Typography sx={{ pb: '16px', color: '#0A0A14' }}>
              Because the insurance company has a diverse offering for various social groups, and it operates worldwide, the users vary significantly in terms of age, gender, income, and location, including language preferences.
            </Typography>

            <Typography sx={{ pb: '16px', color: '#0A0A14' }}>
              However, a vast majority of customers come from Western countries, predominantly the USA and Canada, although there is a large user base in Germany, the UK, and France as well.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect (MetLifeUsers);
