import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import olga from '../assets/olga.png';
import olgaMobile from '../assets/olga-mobile.png';
import arrow from '../assets/maki_arrow.png';
import withScrollEffect from '../withScrollEffect.js';
const MainSectionOne = () => {
  const technologies = [
    { id: 1, name: 'Saas', color: '#FFE9E3' },
    { id: 2, name: 'Websites', color: '#E4DBEA' },
    { id: 3, name: 'Mobile', color: '#E7EDFF' },
    { id: 4, name: 'App', color: '#FAF6C8' },
    { id: 5, name: 'ERP', color: '#E7EDFF' },
    { id: 6, name: 'Mob App', color: '#E4DBEA' },
    { id: 7, name: 'B2B', color: '#FFE9E3' },
    { id: 8, name: 'B2C', color: '#FAF6C8' },
  ];

  return (
    <Box sx={{ py: 0, px: 0 }}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          my: 0,
          mx: 0,
          py: {
            xxs: '0', // vertical padding for extra-small screens
            md: '46px', // vertical padding for small screens
            lg: '68px', // vertical padding for medium screens
            xl: '96px', // vertical padding for large screens
          },
        }}
      >
        {/* Image displayed on smaller devices */}
        <Grid item xxs={12} sx={{ display: { xxs: 'block', md: 'none' }, mb: '24px' }}>
          <img src={olgaMobile} width="100%" alt="Olga" />
        </Grid>

        {/* Text and technology list */}
        <Grid item xxl={7} xl={7} lg={7} md={7} sx={{ px: 0, py: 0 }}>
          <Box sx={{ alignItems: 'center' }}>
            <div className="main-about-section" style={{ height: '100%' }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xxs: '40px',
                    xs: '40px',
                    sm: '40px',
                    md: '30px',
                    lg: '50px',
                    xl: '50px',
                    xxl: '50px',
                  },
                  fontFamily: 'Calibre Medium',
                  color: '#0A0A14',
                  mb: {
                    xxs: '16px', // vertical margin-bottom for extra-small screens
                    sm: '24px', // small screens
                    md: '32px', // medium screens
                    lg: '40px', // large screens
                    xl: '48px', // extra-large screens
                    xxl: '24px', // extra-extra-large screens
                  },
                  pb: 0
                }}
              >
                Hello, I’m Olga — UX/UI Designer
              </Typography>

              <Typography
  variant="h1"
  sx={{
    fontSize: {
      xxs: '20px',
      sm: '16px',
      md: '20px',
      lg: '26px',
      xl: '26px',
      xxl: '26px',
    },
    lineHeight: {
      xs: '28px',
      sm: '24px',
      md: '28px',
      lg: '32px',
      xl: '32px',
      xxl: '32px',
    },
    mb: {
      xs: '12px', // small margin-bottom for smaller screens
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      xxl: '24px',
    },
    fontFamily: 'Calibre Regular',
    color: '#0A0A14',
    mb: {
      xxs: '16px', // vertical margin-bottom for extra-small screens
      sm: '24px', // small screens
      md: '32px', // medium screens
      lg: '40px', // large screens
      xl: '48px', // extra-large screens
      xxl: '24px', // extra-extra-large screens
    },
    '& p': {
      marginBottom: '8px', // vertical gap between paragraphs
      marginTop: 0
    },
  }}
>
  <p>
    My experience is focused on design thinking.
  </p>
  <p>
    The approach is to simplify complex ideas and align them with both user requirements and business goals.
  </p>
</Typography>


              <Box
                sx={{
                  width: {
                    xxs: '328px',
                    sm: '332px',
                    md: '325px',
                    lg: '339px',
                    xl: '361px',
                     
                  },
                  mb: {
                    xxs: '16px', // vertical margin-bottom for extra-small screens
                    sm: '24px', // small screens
                    md: '32px', // medium screens
                    lg: '40px', // large screens
                    xl: '48px', // extra-large screens
                    xxl: '24px', // extra-extra-large screens
                  },
                }}
              >
                {technologies.map((item) => (
                  <Box
                    key={item.id}
                    component="span"
                    sx={{
                      backgroundColor: item.color,
                      padding: '8px',
                      borderRadius: '4px',
                      display: 'inline-block',
                      color: '#0A0A14',
                      mr: { xs: '8px', md: '10px' },
                      mb: { xs: '8px', md: '10px' },
                    }}
                  >
                    {item.name}
                  </Box>
                ))}
              </Box>
            </div>
          </Box>
        </Grid>

        {/* Image displayed on larger devices */}
        <Grid item xxl={4} xl={4} lg={4} md={4} sx={{ display: { xxs: 'none', md: 'block' } }}>

        <Box 
  sx={{ 
    height: { md: '288px', lg: '341px', xl: '467px'},  
    px: 0, 
    py: 0 
  }}
>
  <img 
    style={{ objectFit: 'cover', height: '100%' }} 
    width="100%" 
    src={olga} 
    alt="Olga" 
  />
</Box>

        </Grid>
      </Grid>
    </Box>
  );
};

export default withScrollEffect(MainSectionOne);
