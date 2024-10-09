import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProfWorldAnalyticsOne from './ProfWorldAnalyticsOne';
import SliderDiv from '../Metlife/SliderDiv';
import ProfWorldAnalyticsTwo from './ProfWorldAnalyticsTwo';

const ProfWorldAnalytics = () => {
  const slides=[
    <ProfWorldAnalyticsOne/>,
    <ProfWorldAnalyticsTwo/>
  ]
  return (
    <Container id="profWorldAnalytics" disableGutters maxWidth={false}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
        <Grid item sm={12} xxs={12} md={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: '32px',
            }}
          >
            Analytics
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{display: {
        md: 'block',
        xxs: 'none'
      }}}>
<SliderDiv slides={slides}/>
</Box>
<Box sx={{display: {
        md: 'none',
        xxs: 'block'
      }}}>
<ProfWorldAnalyticsOne/>
<ProfWorldAnalyticsTwo/>
</Box>
      {/* Container for analytics cards that is 8 columns wide */}
    

      {/* Conclusion paragraph */}
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
             During project initiation, several questions were addressed to determine the goal or need to be fulfilled. Research was conducted, and it was decided how to effectively achieve the goal. How does the project meet the need? 
             </Typography>
             <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
              color: '#0A0A14',
            }}
          >
             When designing UX in recruiting, it is important to find a balance between innovation and user experience, taking into account both the strengths and weaknesses of each tool and method.
             </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfWorldAnalytics;
