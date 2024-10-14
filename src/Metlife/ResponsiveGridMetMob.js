import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import image1 from '../assets/threecol1.png';
import image2 from '../assets/threecol2.png';
import image3 from '../assets/threecol3.png';
import withScrollEffect from '../withScrollEffect.js';

const ResponsiveGridMetMob = () => {
  return (
    <Grid container spacing={4}>
      {/* Image 1 and description */}
      <Grid container item xxs={12} spacing={2}>
        <Grid item xxs={12} md={6}>
        <Box sx={{borderRadius: {xl: '30px', sm: '35px', xxs: '26.31px'}, boxShadow: {xl: '0px 14.55px 36.37px 0px #0000001A',
ld:  '0px 20px 50px 0px #0000001A',
md:  '0px 20px 50px 0px #0000001A',
xxs:  '0px 17.54px 43.85px 0px #0000001A'


}
}}>    <img 
              src={image1} 
              alt="Image 1" 
              style={{ width: '100%' }} 
            />
          </Box>
        </Grid>
        <Grid item xxs={12} md={6}>
        <Box sx={{padding: '8px',
                mt: {lg: '24px', md: 0, sm: '24px'}}}>
            <Typography 
              variant="body2" 
              align="left" 
              
              sx={{ fontFamily: 'Calibre, sans-serif', fontSize: '14px', mt: {xxs: '24px', md: 0}, pb: '8px'
               
               }}
            >
              Required and Optional Input
              </Typography>
              <Typography 
              variant="body2" 
              align="left" 
              sx={{ fontFamily: 'Calibre Regular', fontSize: '14px',  }}
            >
              By explicitly denoting both optional and required fields the user isn’t forced to infer anything; 
              they can progress seamlessly throughout the entire form without any back-and-forth scanning of previous fields.
            </Typography>
            </Box>
        </Grid>
      </Grid>

      {/* Image 2 and description */}
      <Grid container item xxs={12} spacing={2}>
        <Grid item xxs={12} md={6}>
        <Box sx={{borderRadius: {xl: '30px', sm: '35px', xxs: '26.31px'}, boxShadow: {xl: '0px 14.55px 36.37px 0px #0000001A',
ld:  '0px 20px 50px 0px #0000001A',
md:  '0px 20px 50px 0px #0000001A',
xxs:  '0px 17.54px 43.85px 0px #0000001A'


}
}}>     <img 
              src={image2} 
              alt="Image 2" 
              style={{ width: '100%' }} 
            />
          </Box>
        </Grid>
        <Grid item xxs={12} md={6}>
        <Box sx={{ padding: '8px', mt: { lg: '24px', md: 0, sm: '24px' } }}>
              <Typography variant="body2" align="left" sx={{ fontFamily: 'Calibre, sans-serif', fontSize: '14px', mt: {xxs: '24px', md: 0}, pb: '8px' }}>
                Marking Fields
              </Typography>
              <ol style={{ marginTop: '8px', textAlign: 'left', listStylePosition: 'inside', paddingLeft: '8px' }}>
                <li style={{ fontFamily: 'Calibre Regular', fontSize: '14px', marginBottom: '8px', paddingLeft: '0' }}>
                  Don’t rely on visual symbols/colors for optional input.
                </li>
                <li style={{ fontFamily: 'Calibre Regular', fontSize: '14px', marginBottom: '8px', paddingLeft: '0' }}>
                  Usually labeling (optional) in bold isn’t necessary.
                </li>
                <li style={{ fontFamily: 'Calibre Regular', fontSize: '14px', marginBottom: '8px', paddingLeft: '0' }}>
                  Some people don’t understand asterisks.
                </li>
                <li style={{ fontFamily: 'Calibre Regular', fontSize: '14px', marginBottom: '8px', paddingLeft: '0' }}>
                  Some people get confused with required and optional input.
                </li>
                <li style={{ fontFamily: 'Calibre Regular', fontSize: '14px', marginBottom: '8px', paddingLeft: '0' }}>
                  Some people try to guess optional input.
                </li>
                <li style={{ fontFamily: 'Calibre Regular', fontSize: '14px', marginBottom: '8px', paddingLeft: '0' }}>
                  Keep optional inputs to a minimum.
                </li>
                <li style={{ fontFamily: 'Calibre Regular', fontSize: '14px', marginBottom: '8px', paddingLeft: '0' }}>
                  Shorter forms always perform better.
                </li>
              </ol>
            </Box>
        </Grid>
      </Grid>

      {/* Image 3 and description */}
      <Grid container item xxs={12} spacing={2}>
        <Grid item xxs={12} md={6}>
        <Box sx={{borderRadius: {xl: '30px', sm: '35px', xxs: '26.31px'}, boxShadow: {xl: '0px 14.55px 36.37px 0px #0000001A',
ld:  '0px 20px 50px 0px #0000001A',
md:  '0px 20px 50px 0px #0000001A',
xxs:  '0px 17.54px 43.85px 0px #0000001A'


}
}}>      <img 
              src={image3} 
              alt="Image 3" 
              style={{ width: '100%' }} 
            />
          </Box>
        </Grid>
        <Grid item xxs={12} md={6}>
        <Typography 
              variant="body2" 
              align="left" 
              
              sx={{ fontFamily: 'Calibre Medium', fontSize: '14px', mt: {xxs: '24px', md: 0}, pb: '8px' }}
            >
              Error 
              </Typography>
              <Typography 
              variant="body2" 
              align="left" 
              sx={{ fontFamily: 'Calibre Regular', fontSize: '14px',  mt:  '8px'}}
            >
              We use embedded accordions for tooltips above input fields. As our form is short, 
              we can show the error message after clicking the «Next» button.
            </Typography>
            <Typography 
              variant="body2" 
              align="left" 
              sx={{ fontFamily: 'Calibre Regular', fontSize: '14px',  mt:  '8px'}}
            >
             As we do not have very long form we can show error message after clicking the «Next» button
            </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withScrollEffect (ResponsiveGridMetMob);
