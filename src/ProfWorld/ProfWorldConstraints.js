import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProfWorldConstraintsOne from './ProfWorldConstraintsOne';
import ProfWorldConstraintsTwo from './ProfWorldConstraintsTwo';
import ProfWorldConstraintsThree from './ProfWorldConstraintsThree';
import ProfWorldConstraintsCombined from './ProfWorldConstraintsCombined';
import SliderDivWide from '../Metlife/SliderDivWide';
import withScrollEffect from '../withScrollEffect.js';

const ProfWorldConstraints = () => {
  const slides = [
    <ProfWorldConstraintsOne />,
    <ProfWorldConstraintsTwo />,
    <ProfWorldConstraintsThree />
  ];

  return (
    <>
    <Box sx={{pb: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' }}}>
      {/* Container for the title and first text section */}
      <Container disableGutters maxWidth={false} justifyContent="center" >
        {/* Title Section */}
        <Grid container justifyContent="center" spacing={0} >
          <Grid item  xxs={12} md={12} lg={9.6} xl={8}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xxs: '30px', sm: '34px', md: '40px' },
                fontFamily: 'Playfair Display Bold',
                pb: {
                  xxs: '24px', // 24px for lg
                  
                  xl: '32px'
                },
              }}
            >
              Project's Constraints
            </Typography>
          </Grid>
        </Grid>

        {/* First Text Section */}
        <Grid container justifyContent="center" sx={{ fontFamily: 'Calibre Regular', fontSize: '18px' }}>
          <Grid item  xxs={12} md={12} lg={9.6} xl={8}>
            <Box sx={{ fontFamily: 'Calibre Regular', fontSize: '18px', lineHeight: '26px' }}>
              <Typography sx={{  pb: {
                  lg: '24px', // 24px for lg
                  xxs: '24px', // 24px for lg
                  
                  xl: '32px'
                }, color: '#646470' }}>
                When analyzing a project to automate the personnel training process, several key limitations (constraints) can be identified that can contribute to its successful implementation. Below are the possible options and their descriptions:
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Container for the Image Slider */}
     
        {/* Desktop Slider */}
        <Box sx={{ display: { sm: 'flex', xxs: 'none' }, justifyContent: 'center' }}>
          <SliderDivWide slides={slides} />
        </Box>

      {/* Container for the combined content on mobile */}
      <Container disableGutters maxWidth={false} justifyContent="center">
        {/* Mobile View: Combined content */}
        <Box sx={{ display: { sm: 'none', xxs: 'block' } }}>
          <ProfWorldConstraintsCombined />
        </Box>
      </Container>

      {/* Container for the second text section */}
      <Container disableGutters maxWidth={false} justifyContent="center">
        {/* Second Text Section */}
        <Grid container justifyContent="center" sx={{ py: 2 }}>
          <Grid item xxs={12} md={12} lg={9.6} xl={8}>
            <Typography
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '18px',
                lineHeight: '26px',
                color: '#0A0A14',
                pt: '24px'
              }}
            >
              <b>Conclusion</b>
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '18px',
                lineHeight: '26px',
                color: '#0A0A14',
                pb: '8px'
              }}
            >
              As discussed above, it is necessary to take into account all possible limitations when planning and implementing a project in order to avoid possible problems and achieve the set goals as efficiently as possible.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </>
  );
};

export default withScrollEffect (ProfWorldConstraints);
