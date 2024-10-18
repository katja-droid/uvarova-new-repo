import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const ProfWorldKPIs = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ pb: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' } }}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0}>
        <Grid item xl={8} xxs={12} md={10}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              paddingBottom: { xl: '32px', lg: '24px', xxs: '24px' },
            }}
          >
            Design KPIs
          </Typography>
        </Grid>
      </Grid>

      {/* Content for KPIs */}
      <Grid
        container
        justifyContent="center"
        sx={{ fontFamily: 'Calibre Regular' }} // Set font family for all content
      >
        <Grid item xl={8} xxs={12} md={10}>
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px', // Set base font size to 18px
              lineHeight: 'normal', // Set line height to normal for all content
            }}
          >
            <Typography sx={{color: '#646470', fontSize: '18px', lineHeight: 'normal', mb: { xl: '32px', xxs: '24px' } }}>
              For the successful implementation of the project aimed at automating the personnel preparation process, quantitative performance indicators (KPIs) were established within each category of constraints.
            </Typography>
            <Typography sx={{ fontSize: '18px', lineHeight: 'normal', fontFamily: 'Calibre Semibold' }}>
              Potential KPIs and Target Values:
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                paddingLeft: 0,
                marginBottom: { xl: '32px', xxs: '24px' }, // Space after each main list
                '& li': {
                  mb: '24px', // Adds spacing between numbered list items
                  lineHeight: 'normal', // Set line height to normal for list items
                },
              }}
            >
              {/* Time Constraints */}
              <li>
                <Typography sx={{  fontSize: '18px', lineHeight: 'normal', fontFamily: 'Calibre Medium' }}>
                  1. Time Constraints:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    '& li': {
                      mb: 0, // Removes margin between disc items
                      fontSize: '18px', // Ensure sub-item font size is 18px
                      lineHeight: 'normal', // Set line height to normal for sub-items
                    },
                  }}
                >
                  <li>
                    Project Completion Deadline: Finish 80% of tasks within 24 months; task completion time ≤ 15% of total project time.
                  </li>
                  <li>
                    Supplier Coordination: Achieve 90% on-time delivery; system integration downtime ≤ 5%.
                  </li>
                </Box>
              </li>

              {/* Budget Constraints */}
              <li>
                <Typography sx={{ fontSize: '18px', lineHeight: 'normal', fontFamily: 'Calibre Medium'  }}>
                  2. Budget Constraints:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    '& li': {
                      mb: 0, // Removes margin between disc items
                      fontSize: '18px', // Ensure sub-item font size is 18px
                      lineHeight: 'normal', // Set line height to normal for sub-items
                    },
                  }}
                >
                  <li>
                    Financial Resource: Stay within budget, saving at least 10% of planned costs.
                  </li>
                  <li>
                    Additional Expenses: Limit unaccounted expenses on training/support to 5% of the total budget.
                  </li>
                </Box>
              </li>

              {/* Technological Constraints */}
              <li>
                <Typography sx={{  fontSize: '18px', lineHeight: 'normal', fontFamily: 'Calibre Medium'  }}>
                  3. Technological Constraints:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    '& li': {
                      mb: 0, // Removes margin between disc items
                      fontSize: '18px', // Ensure sub-item font size is 18px
                      lineHeight: 'normal', // Set line height to normal for sub-items
                    },
                  }}
                >
                  <li>
                    Compatibility: Integrate with 95% of existing power sources without new interfaces.
                  </li>
                  <li>
                    Technology Implementation: Implement 80% of necessary technologies at the project’s start.
                  </li>
                </Box>
              </li>

              {/* Human Resources */}
              <li>
                <Typography sx={{ fontSize: '18px', lineHeight: 'normal',  fontFamily: 'Calibre Medium'  }}>
                  4. Human Resources:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    '& li': {
                      mb: 0, // Removes margin between disc items
                      fontSize: '18px', // Ensure sub-item font size is 18px
                      lineHeight: 'normal', // Set line height to normal for sub-items
                    },
                  }}
                >
                  <li>
                    Employee Training: Train at least 90% of employees; training effectiveness ≥ 75%.
                  </li>
                  <li>
                    Change Acceptance: Aim for an employee acceptance level of 85% post-implementation.
                  </li>
                </Box>
              </li>

              {/* Legal and Ethical Constraints */}
              <li>
                <Typography sx={{ fontSize: '18px', lineHeight: 'normal', fontFamily: 'Calibre Medium'  }}>
                  5. Legal and Ethical Constraints:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    '& li': {
                      mb: 0, // Removes margin between disc items
                      fontSize: '18px', // Ensure sub-item font size is 18px
                      lineHeight: 'normal', // Set line height to normal for sub-items
                    },
                  }}
                >
                  <li>
                    Compliance with Legislation: 100% compliance with data processing laws; conduct at least 2 compliance checks.
                  </li>
                  <li>
                    Ethical Standards: Ensure 90% compliance with ethical standards in testing/processes.
                  </li>
                </Box>
              </li>

              {/* Quality Constraints */}
              <li>
                <Typography sx={{fontSize: '18px', lineHeight: 'normal',  fontFamily: 'Calibre Medium'  }}>
                  6. Quality Constraints:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    '& li': {
                      mb: 0, // Removes margin between disc items
                      fontSize: '18px', // Ensure sub-item font size is 18px
                      lineHeight: 'normal', // Set line height to normal for sub-items
                    },
                  }}
                >
                  <li>
                    Data Quality: Input data accuracy of at least 95%; max errors in resumes/tests ≤ 5%.
                  </li>
                  <li>
                    Profiling Methods: Update or validate 100% of profiling/testing methods before implementation.
                  </li>
                </Box>
              </li>
            </Box>

            <Typography sx={{  fontSize: '18px', lineHeight: 'normal', mb: { xl: '32px', xxs: '24px' } }}>
              These performance indicators will help not only to track the project results but also to manage all constraints, thereby ensuring its successful completion.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect(ProfWorldKPIs);
