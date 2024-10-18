import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ProfWorldAnalyticsOne = () => {
  return (
    <Grid
      container
      spacing={{ xxs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}
      alignItems="stretch"
      sx={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {/* Each analytics card will be 6 columns wide */}
      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: {xl: '32px', lg: '24px', xxs: '16px'},
            display: 'flex',
            flexDirection: 'column',
            height: { xl: '245px', md: '280px', xxs: 'auto' },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
              lineHeight: 'normal'
            }}
          >
            1. Automation of processes
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: 'normal',
              pb: '8px'
            }}
          >
            Approximately <b>70% of SMBs</b> use CRM to manage customer and candidate data, making it much easier to interact and analyze.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: 'normal'
            }}
          >
          
          By iterating information from different sources, making it easier to access data.
          </Typography>
        </Box>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: {xl: '32px', lg: '24px', xxs: '16px'},
            display: 'flex',
            flexDirection: 'column',
            height: { xl: '245px', md: '280px', xxs: 'auto' },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
              lineHeight: 'normal'
            }}
          >
            2. Dependence on technology
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              pb: '8px',
              lineHeight: 'normal'
            }}
          >
            Technological errors can lead to loss of candidate data or difficult interactions.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: 'normal'
            }}
          >
            
            Automation can prevent you from creating a personal touch with candidates, which is sometimes important in the hiring process.
          </Typography>
        </Box>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: {xl: '32px', lg: '24px', xxs: '16px'},
            display: 'flex',
            flexDirection: 'column',
            height: { xl: '265px', lg: '249px', md: '302px', xxs: 'auto' },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
              lineHeight: '20px'
            }}
          >
            3. CRM systems for recruiters
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '20px',
              pb: '8px'
            }}
          >
            According to reports, about <b>75% of recruiters</b> say that recruiters say that using an ATS increases their efficiency.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: 'normal'
            }}
          >
          Data helps improve candidate selection, allowing HR to track key metrics and evaluate the effectiveness of different candidate sources.
          </Typography></Box>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: {xl: '32px', lg: '24px', xxs: '16px'},
            display: 'flex',
            flexDirection: 'column',
            height: { xl: '265px', lg: '249px', md: '302px', xxs: 'auto' },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
              lineHeight: 'normal'
            }}
          >
           4. Complexity of implementation
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: 'normal'
            }}
          >
         The CRM implementation process can be lengthy and costly, and not all companies can afford it.
         </Typography>
         <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: 'normal',
              pb: '8px'
            }}
          >
         Employees need to be trained on the new software, which can slow down workflows.    
         </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfWorldAnalyticsOne;
