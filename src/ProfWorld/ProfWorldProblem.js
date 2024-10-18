import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';
import FormattedText from '../FormattedText'; // Adjust the path as necessary

const ProfWorldProblem = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        pb: { xl: '80px', sm: '60px', xxs: '48px' },
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
              lineHeight: 'normal', // Ensure line height is normal for the main heading
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
              lineHeight: 'normal', // Normal line height for all text
            }}
          >
            <Typography
              sx={{
                pb: {
                  xxs: '24px', // 24px padding for xxs
                },
                color: '#646470',
                fontSize: '18px',
                lineHeight: 'normal', // Normal line height
              }}
            >
              Based on the user interviews that were conducted, the findings include:
            </Typography>

            {/* Problem 1 */}
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', lineHeight: 'normal' }}>
              1. Inefficient Recruitment:
            </Typography>
            <Box sx={{ pb: { xxs: '24px' } }}>
              <FormattedText text="Inefficient and time-consuming recruitment process without automation." />
            </Box>

            {/* Problem 2 */}
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', lineHeight: 'normal' }}>
              2. Undefined Job Profiles:
            </Typography>
            <Box sx={{ pb: { xxs: '24px' } }}>
              <FormattedText text="Lack of clear definition of company, department, and position profiles, making it difficult to properly assess candidates." />
            </Box>

            {/* Problem 3 */}
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', lineHeight: 'normal' }}>
              3. Delayed Candidate Testing:
            </Typography>
            <Box sx={{ pb: { xxs: '24px' } }}>
              <FormattedText text="Lack of promptness in testing candidates with interpretation output, leading to overlooked risks such as theft, information leakage, and others." />
            </Box>

            {/* Problem 4 */}
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', lineHeight: 'normal' }}>
              4. Inaccurate Personality Assessment:
            </Typography>
            <Box sx={{ pb: { xxs: '24px' } }}>
              <FormattedText text="Lack of accuracy in determining whether a candidate’s personality profile matches the job profile." />
            </Box>

            {/* Problem 5 */}
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', lineHeight: 'normal' }}>
              5. Lack of Psychodiagnostics:
            </Typography>
            <Box sx={{ pb: { xxs: '24px' } }}>
              <FormattedText text="Lack of effective psychodiagnostics to help determine people compatibility, team building, and identifying informal leaders." />
            </Box>

            {/* Problem 6 */}
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', lineHeight: 'normal' }}>
              6. Insufficient HR Automation:
            </Typography>
            <Box sx={{ pb: { xxs: '24px' } }}>
              <FormattedText text="Insufficient automation of HR functions, making it difficult to evaluate personnel, build corporate culture, administration, and adaptation." />
            </Box>

            {/* Problem 7 */}
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', lineHeight: 'normal' }}>
              7. Calendar Integration Issues:
            </Typography>
            <Box sx={{ pb: { xxs: '24px' } }}>
              <FormattedText text="Non-integrated Outlook calendar creates difficulties in planning and evaluating the execution of tasks." />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect(ProfWorldProblem);
