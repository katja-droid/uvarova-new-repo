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
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%', // Fills the height of the tallest card
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
            }}
          >
            1. Automation of Processes
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              pb: '8px',
            }}
          >
            Approximately <b>70% of SMBs</b> use CRM systems to manage customer and candidate data, making it much easier to interact and analyze.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
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
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
            }}
          >
            2. Dependence on Technology
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              pb: '8px',
            }}
          >
            Technological errors can lead to loss of candidate data or difficult interactions.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
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
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
            }}
          >
            3. CRM Systems for Recruiters
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              pb: '8px',
            }}
          >
            According to reports, about <b>75% of recruiters</b> say that using an ATS increases their efficiency. Data helps improve candidate selection, allowing HR to track key metrics and evaluate the effectiveness of different candidate sources.
          </Typography>
        </Box>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
            }}
          >
            4. Complexity of Implementation
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              pb: '8px',
            }}
          >
            The CRM implementation process can be lengthy and costly, and not all companies can afford it. Employees need to be trained on the new software, which can slow down workflows.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfWorldAnalyticsOne;
