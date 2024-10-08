import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ProfWorldAnalytics = () => {
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

      {/* Container for analytics cards that is 8 columns wide */}
      <Grid container justifyContent="center" sx={{ py: 2 }}>
        <Grid item sm={12} xs={12} md={12}>
          <Grid container spacing={4}>
            {/* Each analytics card will be 4 columns wide */}
            <Grid item sm={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  1. Automation of Processes
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  Approximately <b>70% of SMBs</b> use CRM systems to manage customer and candidate data, making it much easier to interact and analyze.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                  }}
                >
                  Automation can prevent you from creating a personal touch with candidates, which is sometimes important in the hiring process.
                </Typography>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  2. Dependence on Technology
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  By iterating information from different sources, it's easier to access data. However, technological errors can lead to loss of candidate data or difficult interactions.
                </Typography>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  3. CRM Systems for Recruiters
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  According to reports, about <b>75% of recruiters</b> say that using an ATS increases their efficiency. Data helps improve candidate selection, allowing HR to track key metrics and evaluate the effectiveness of different candidate sources.
                </Typography>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  4. Complexity of Implementation
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  The CRM implementation process can be lengthy and costly, and not all companies can afford it. Employees need to be trained on the new software, which can slow down workflows.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Conclusion paragraph */}
      <Grid container justifyContent="center" sx={{ py: 2 }}>
        <Grid item sm={12} xs={12} md={12}>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
              color: '#0A0A14',
            }}
          >
            <b>Conclusion after initiation and analysis:</b> During project initiation, several questions were addressed to determine the goal or need to be fulfilled. Research was conducted, and it was decided how to effectively achieve the goal. How does the project meet the need? When designing UX in recruiting, it is important to find a balance between innovation and user experience, taking into account both the strengths and weaknesses of each tool and method.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfWorldAnalytics;
