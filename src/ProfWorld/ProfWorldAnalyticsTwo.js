import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FormattedText from '../FormattedText'; // Adjust the import path as necessary

const ProfWorldAnalyticsTwo = () => {
  return (
    <Grid
      container
      spacing={{ xxs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}
      alignItems="stretch"
      sx={{ display: 'flex', flexWrap: 'wrap' }}
    >
      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: { xl: '32px', lg: '24px', xxs: '16px' },
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
            5. Candidate assessment methods
          </Typography>
          <Box  sx={{pl: '16px'}}>
          <FormattedText
            text="Success of structured interviews: they can increase the accuracy of candidate selection by <b>up to 80%</b>. Use of big data and analytical tools helps evaluate resumes and predict candidate success."
          />
          </Box>
        </Box>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: { xl: '32px', lg: '24px', xxs: '16px' },
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
            6. Collaboration tools
          </Typography>
          <Box  sx={{pl: '16px'}}>
          <FormattedText
            text="Platforms such as Slack, Microsoft Teams, or Asana help ensure transparency and accessibility of information between teams. Integration with calendars makes it easy to track employee availability in real time."
          />
          </Box>
        </Box>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: { xl: '32px', lg: '24px', xxs: '16px' },
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
            7. Data encryption
          </Typography>
          <Box  sx={{pl: '16px'}}>
          <FormattedText
            text="Many companies use state-of-the-art encryption technology to keep candidates' personal information secure. Compliance with GDPR and other regulations ensures that candidates' data is securely protected."
          />
          </Box>
        </Box>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: { xl: '32px', lg: '24px', xxs: '16px' },
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
            8. Data leakage risks
          </Typography>
          <Box  sx={{pl: '16px'}}>
          <FormattedText
            text="Even with high security measures, there is a risk of data leakage due to employee error or hacker attacks. The need to balance the availability of employee data with its security can be challenging."
          />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfWorldAnalyticsTwo;
