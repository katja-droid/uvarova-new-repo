import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProfWorldConstraintsOne from './ProfWorldConstraintsOne';
import ProfWorldConstraintsTwo from './ProfWorldConstraintsTwo';
import ProfWorldConstraintsThree from './ProfWorldConstraintsThree';
import ProfWorldConstraintsCombined from './ProfWorldConstraintsCombined';
import SliderDiv from '../Metlife/SliderDiv';

const ProfWorldConstraints = () => {
  const slides=[
    <ProfWorldConstraintsOne/>,
    <ProfWorldConstraintsTwo/>,
    <ProfWorldConstraintsThree/>
  ]
  return (
    <Container disableGutters maxWidth={false}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
        <Grid item sm={12} xxs={12} md={12}>
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

      {/* Content for constraints description */}
      <Grid
        container
        justifyContent="center"
        sx={{ py: 2, fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid item sm={12} xs={12}>
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            <Typography sx={{ pb: '16px', color: '#646470' }}>
            When analyzing a project to automate the personnel training process, several key limitations (constraints) can be identified that can contribute to its successful implementation. Below are the possible options and their descriptions:
            </Typography>

     
          </Box>
        </Grid>
        <Box sx={{display: {sm: 'block', xxs: 'none'}}}>
        <SliderDiv slides={slides}/>
        </Box>
        <Box sx={{display: {sm: 'none', xxs: 'block'}}}>
        <ProfWorldConstraintsCombined/>
      
        </Box>
        <Grid container justifyContent="center" sx={{ py: 2 }}>
        <Grid item sm={12} xs={12} md={12}>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
              color: '#0A0A14',
              pt: '24px'
            }}
          >
            <b>Conclusion after initiation and analysis</b>
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
             As discussed above, it is necessary to take into account all possible limitations when planning and implementing a project in order to avoid possible problems and achieve the set goals as efficiently as possible.   </Typography>
         
        </Grid>
      </Grid>
      </Grid>
    </Container>
  );
};

export default ProfWorldConstraints;
