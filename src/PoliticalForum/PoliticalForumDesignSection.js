import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/political-design-proces.png';

const GoalSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#fff',
          color: '#0A0A14',
          pt: '73px'
        }}
        id="design-process-pf"
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* First Column */}
            <Grid item xxs={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                    xl: '100%',
                    xxl: '100%',
                  },
                }}
              >
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                    fontFamily: 'Playfair Display Bold',
                    pb: '24px',
                  }}
                  variant='h3'
                >
              Design Process
                </Typography>
                <Typography
                  sx={{
                    textAlign: { xxs: 'left'},
                    fontSize: '18px',
                    lineHeight: '26px',
                    fontFamily: 'Calibre Regular',
                    pb: { lg: '24px', xxs: '16px' },
                  }}
                >
                  A website analysis with comments and solution concepts was conducted to develop a new navigation and search design that would allow users to quickly access key tasks.   </Typography>
              </Box>
            </Grid>

            {/* Image Section */}
            <Grid item xxs={12} xs={12} sm={12} md={12} lg={12} xl={8} xxl={12}>
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                    xl: '100%',
                    xxl: '100%',
                  },
                }}
                justifyContent='center'
              >
                <img width="100%" src={image} alt="Goal" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default GoalSection;
