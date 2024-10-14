import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ProfWorldAnalyticsTwo = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={12} xs={12} md={12}>
        <Grid container spacing={{ xxs: 2, sm: 2, md: 2, lg: 3, xl: 4 }} alignItems="stretch">
          {/* Each analytics card will be 6 columns wide */}
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
                  pb: '16px', // Consistent gap between heading and paragraph
                }}
              >
                5. Candidate assessment methods
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Calibre Regular',
                  fontSize: '18px',
                  pb: '8px',
                }}
              >
                Success of structured interviews: they can increase the accuracy of candidate selection by <b>up to 80%.</b>
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Calibre Regular',
                  fontSize: '18px',
                }}
              >
                Use of big data and analytical tools helps evaluate resumes and predict candidate success.
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
                  pb: '16px', // Consistent gap between heading and paragraph
                }}
              >
                6. Collaboration tools
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Calibre Regular',
                  fontSize: '18px',
                  pb: '8px',
                }}
              >
                Platforms such as Slack, Microsoft Teams or Asana help ensure transparency and accessibility of information between teams.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Calibre Regular',
                  fontSize: '18px',
                }}
              >
                Integration with calendars makes it easy to track employee availability in real time.
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
                  pb: '16px', // Consistent gap between heading and paragraph
                }}
              >
                7. Data Encryption
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Calibre Regular',
                  fontSize: '18px',
                  pb: '8px',
                }}
              >
                Many companies use state-of-the-art encryption technology to keep candidates' personal information secure.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Calibre Regular',
                  fontSize: '18px',
                }}
              >
                Compliance with GDPR and other regulations ensures that candidates' data is securely protected.
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
                  pb: '16px', // Consistent gap between heading and paragraph
                }}
              >
                8. Data leakage risks
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Calibre Regular',
                  fontSize: '18px',
                  pb: '8px',
                }}
              >
                Even with high security measures, there is a risk of data leakage due to employee error or hacker attacks.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Calibre Regular',
                  fontSize: '18px',
                }}
              >
                The need to balance the availability of employee data with its security can be challenging.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfWorldAnalyticsTwo;
