import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid2 import for newer Material-UI version
import NavbarOverlay from './NavbarOverlay';

const TestLay = ({closeOverlay}) => {
  return (
    <Grid
      container // Adds space between items for better visualization
      sx={{ width: '100%' }} // Ensure the container takes up full width
      spacing={0}
      justifyContent={'flex-end'}
    >
      {/* <Grid item xs={0} sm={3}  sx={{ backgroundColor: 'transparent' ,  px: 0, py: 0, display: {xs: 'none'}  }} >
        <Box sx={{ height: '100vh', display: {xs: 'none'} }}>
          
        </Box>
      </Grid> */}

      <Grid item  xs={12} sx={{ backgroundColor: 'lightcoral', width: {xxs: '100vw'} }} >
        <Box sx={{ height: '100vh' ,
       
        width: '100%', // 100vw for devices smaller than 360px
        }}>
          <NavbarOverlay closeOverlay={closeOverlay}/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TestLay;
