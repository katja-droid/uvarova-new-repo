import { Grid, Typography } from '@mui/material';
import React from 'react';

const BeforeAfterLayout = ({ beforeImage, afterImage }) => {
  return (
    <Grid
      container
      spacing={0} // Ensure no external spacing
      sx={{
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Before Block */}
      <Grid
        item
        xs={12}
        lg={5.9} // Full width on smaller screens, 5.5/12 width on larger screens
        sx={{
          textAlign: 'center',
          padding: 0,
          margin: 0,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xxs: '24px', sm: '28px', md: '32px' },
            fontFamily: 'Playfair Display Bold',
            mb: 2,
            padding: 0,
            margin: 0,
            textAlign: 'left',
          }}
        >
          Before
        </Typography>
        <img
          src={beforeImage}
          alt="Before"
          style={{
            width: '100%',
            height: 'auto',
            padding: 0,
            margin: 0,
            boxShadow: '0 15px 20px 0 rgba(0, 0, 0, 0.1)', // Add shadow like an image
          }}
        />
      </Grid>

      {/* Gap between blocks only */}
      <Grid item xs={0} lg={0.2} sx={{ display: { xs: 'none', lg: 'block' } }} />

      {/* After Block */}
      <Grid
        item
        xs={12}
        lg={5.9} // Full width on smaller screens, 5.5/12 width on larger screens
        sx={{
          textAlign: 'center',
          padding: 0,
          margin: 0,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xxs: '24px', sm: '28px', md: '32px' },
            fontFamily: 'Playfair Display Bold',
            mb: 2,
            padding: 0,
            margin: 0,
            textAlign: 'left',
          }}
        >
          After
        </Typography>
        <img
          src={afterImage}
          alt="After"
          style={{
            width: '100%',
            height: 'auto',
            padding: 0,
            margin: 0,
            boxShadow: '0 15px 20px 0 rgba(0, 0, 0, 0.1)', // Add shadow like an image
          }}
        />
      </Grid>
    </Grid>
  );
};

export default BeforeAfterLayout;
