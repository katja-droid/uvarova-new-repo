import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const ProfWorldProblem = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
       pb:  { xl: '80px', sm: '60px', xxs: '48px' }
      }}
    >
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0}>
        <Grid item xl={8} xxs={12} lg={10}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              paddingBottom: { xl: '32px', lg: '24px', xxs: '24px' }, 
            }}
          >
            The Problem
          </Typography>
        </Grid>
      

      {/* Content for problems */}
      
        <Grid item xl={8} xxs={12} lg={10}>
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            <Typography
              sx={{
                pb: {
                  lg: '24px', // 24px for lg
                  xxs: '16px', // 16px for xxs to md
                },
                color: '#646470',
              }}
            >
              Based on the user interviews that were conducted, the findings
              include:
            </Typography>

            {/* Problem 1 */}
            <Typography sx={{ fontWeight: 'bold'}}>
              1. Inefficient Recruitment:
            </Typography>
            <Typography sx={{ mb: { lg: '24px', xxs: '16px' } }}>
              Inefficient and time-consuming recruitment process without automation.
            </Typography>

            {/* Problem 2 */}
            <Typography sx={{ fontWeight: 'bold'}}>
              2. Undefined Job Profiles:
            </Typography>
            <Typography sx={{ mb: { lg: '24px', xxs: '16px' } }}>
              Lack of clear definition of company, department, and position profiles,
              making it difficult to properly assess candidates.
            </Typography>

            {/* Problem 3 */}
            <Typography sx={{ fontWeight: 'bold' }}>
              3. Delayed Candidate Testing:
            </Typography>
            <Typography sx={{ mb: { lg: '24px', xxs: '16px' } }}>
              Lack of promptness in testing candidates with interpretation output,
              leading to overlooked risks such as theft, information leakage, and others.
            </Typography>

            {/* Problem 4 */}
            <Typography sx={{ fontWeight: 'bold' }}>
              4. Inaccurate Personality Assessment:
            </Typography>
            <Typography sx={{ mb: { lg: '24px', xxs: '16px' } }}>
              Lack of accuracy in determining whether a candidate’s personality profile
              matches the job profile.
            </Typography>

            {/* Problem 5 */}
            <Typography sx={{ fontWeight: 'bold' }}>
              5. Lack of Psychodiagnostics:
            </Typography>
            <Typography sx={{ mb: { lg: '24px', xxs: '16px' } }}>
              Lack of effective psychodiagnostics to help determine people compatibility,
              team building, and identifying informal leaders.
            </Typography>

            {/* Problem 6 */}
            <Typography sx={{ fontWeight: 'bold' }}>
              6. Insufficient HR Automation:
            </Typography>
            <Typography sx={{ mb: { lg: '24px', xxs: '16px' } }}>
              Insufficient automation of HR functions, making it difficult to evaluate
              personnel, build corporate culture, administration, and adaptation.
            </Typography>

            {/* Problem 7 */}
            <Typography sx={{ fontWeight: 'bold'}}>
              7. Calendar Integration Issues:
            </Typography>
            <Typography sx={{ mb: { lg: '24px', xxs: '16px' } }}>
              Non-integrated Outlook calendar creates difficulties in planning and
              evaluating the execution of tasks.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect(ProfWorldProblem);
