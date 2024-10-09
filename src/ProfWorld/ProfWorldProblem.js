import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ProfWorldProblem = () => {
  return (
    <Container disableGutters maxWidth={false}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
        <Grid item sm={12} xxs={12} md={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: '24px',
            }}
          >
            The Problem
          </Typography>
        </Grid>
      </Grid>

      {/* Content for problems */}
      <Grid
        container
        justifyContent="center"
        sx={{ py: 2, fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid item sm={12} xs={12}>
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            <Typography sx={{ pb: '16px', color: '#646470' }}>
              Based on the user interviews that were conducted, the findings include:
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                paddingLeft: 0,
                '& li': {
                  mb: '25px', // Adds spacing between list items
                },
              }}
            >
              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  1. Inefficient Recruitment:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                 Inefficient and time-consuming recruitment process without automation.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  2. Undefined Job Profiles:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  Lack of clear definition of company, department, and position profiles, making it difficult to properly assess candidates.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  3. Delayed Candidate Testing:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  Lack of promptness in testing candidates with interpretation output, leading to overlooked risks such as theft, information leakage, and others.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  4. Inaccurate Personality Assessment:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  Lack of accuracy in determining whether a candidate’s personality profile matches the job profile.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  5. Lack of Psychodiagnostics:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  Lack of effective psychodiagnostics to help determine people compatibility, team building, and identifying informal leaders.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  6. Insufficient HR Automation:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  Insufficient automation of HR functions, making it difficult to evaluate personnel, build corporate culture, administration, and adaptation.
                </Typography>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold' }}>
                  7. Calendar Integration Issues:
                </Typography>
                <Typography sx={{ pb: '8px' }}>
                  Non-integrated Outlook calendar creates difficulties in planning and evaluating the execution of tasks.
                </Typography>
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfWorldProblem;
