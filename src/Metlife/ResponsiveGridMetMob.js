import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import image1 from '../assets/threecol1.png';
import image2 from '../assets/threecol2.png';
import image3 from '../assets/threecol3.png';

const ResponsiveGridMetMob = () => {
  return (
    <Grid container spacing={4}>
      {/* Image 1 and description */}
      <Grid container item xxs={12} spacing={2}>
        <Grid item xxs={12} md={6}>
          <Box>
            <img 
              src={image1} 
              alt="Image 1" 
              style={{ width: '100%', boxShadow: '0 15px 20px 0 rgba(0, 0, 0, 0.1)' }} 
            />
          </Box>
        </Grid>
        <Grid item xxs={12} md={6}>
        <Typography 
              variant="body2" 
              align="left" 
              mt={2} 
              sx={{ fontFamily: 'Calibre, sans-serif', fontSize: '14px' }}
            >
              Required and Optional Input
              </Typography>
              <Typography 
              variant="body2" 
              align="left" 
              mt={2} 
              sx={{ fontFamily: 'Calibre Medium', fontSize: '14px' }}
            >
              By explicitly denoting both optional and required fields the user isn’t forced to infer anything; 
              they can progress seamlessly throughout the entire form without any back-and-forth scanning of previous fields.
            </Typography>
        </Grid>
      </Grid>

      {/* Image 2 and description */}
      <Grid container item xxs={12} spacing={2}>
        <Grid item xxs={12} md={6}>
          <Box>
            <img 
              src={image2} 
              alt="Image 2" 
              style={{ width: '100%', boxShadow: '0 15px 20px 0 rgba(0, 0, 0, 0.1)' }} 
            />
          </Box>
        </Grid>
        <Grid item xxs={12} md={6}>
        <Typography 
              variant="body2" 
              align="left" 
              mt={2} 
              sx={{ fontFamily: 'Calibre, sans-serif', fontSize: '14px' }}
            >
                 
              Marking Fields
              </Typography>
              <Typography 
              variant="body2" 
              align="left" 
              mt={2} 
              sx={{ fontFamily: 'Calibre Medium', fontSize: '14px', pb: '8px'  }}
            >
              1. Don’t rely on visual symbols/colors for optional input.
              </Typography> 
              <Typography 
              variant="body2" 
              align="left" 
              sx={{ fontFamily: 'Calibre Medium', fontSize: '14px', pb: '8px'  }}
            >2. Usually labelling (optional) in bold isn’t necessary.</Typography>
            <Typography 
              variant="body2" 
              align="left" 
              sx={{ fontFamily: 'Calibre Medium', fontSize: '14px', pb: '8px' }}
            >
             3. Some people don’t understand asterisks. Some people get confused with required and optional input.</Typography>
              <Typography 
              variant="body2" 
              align="left" 
              sx={{ fontFamily: 'Calibre Medium', fontSize: '14px', pb: '8px' }}
            >4. Keep optional inputs to minimum, as shorter forms always perform better.
            </Typography>
        </Grid>
      </Grid>

      {/* Image 3 and description */}
      <Grid container item xxs={12} spacing={2}>
        <Grid item xxs={12} md={6}>
          <Box>
            <img 
              src={image3} 
              alt="Image 3" 
              style={{ width: '100%', boxShadow: '0 15px 20px 0 rgba(0, 0, 0, 0.1)' }} 
            />
          </Box>
        </Grid>
        <Grid item xxs={12} md={6}>
          <Typography 
            variant="body2" 
            align="left" 
            mt={2} 
            sx={{ fontFamily: 'Calibre, sans-serif', fontSize: '14px' }}
          >
            Error Handling
            We use embedded accordions for tooltips above input fields. As our form is short, 
            we can show the error message after clicking the «Next» button.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResponsiveGridMetMob;
