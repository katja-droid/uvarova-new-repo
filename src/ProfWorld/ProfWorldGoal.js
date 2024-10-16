import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const ProfWorldGoal = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        paddingBottom: { xl: '40px', lg: '32px', sm: '32px', xxs: '16px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      {/* Container for the title */}
      <Grid
        container
        justifyContent="center"
        spacing={0}
        sx={{ margin: 0, padding: 0 }}
      >
        <Grid
          item
          xl={8}
          xxs={12}
          lg={10}
          sx={{
            padding: 0,
            margin: 0,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              paddingBottom: { xl: '32px', lg: '24px', xxs: '24px' },
            }}
          >
            Goals of the Project
          </Typography>
        </Grid>
      </Grid>

      {/* Content for goals description */}
      <Grid
        container
        justifyContent="center"
        sx={{ fontFamily: 'Calibre Regular', fontSize: '18px', margin: 0, padding: 0 }}
      >
        <Grid
          item
          xl={8}
          xxs={12}
          lg={10}
          sx={{
            padding: 0,
            margin: 0,
          }}
        >
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                paddingLeft: 0,
                margin: 0,
              }}
            >
              <li>
                <Typography sx={{ fontWeight: 'bold', marginBottom: '16px',   fontSize: '18px', }}>
                  1. Main objectives of the project:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: 'disc',
                    paddingBottom: { xl: '32px', lg: '24px', xxs: '24px' },
                    '& li': {
                      marginBottom: '8px',
                      fontWeight: 'normal', // Set normal font weight for sub-items
                     
                    },
                  }}
                >
                  <li>
                    <b>Automating the personnel selection process:</b> creating a system to ensure an effective match between an employee’s personality profile, job profile, and company profile.
                  </li>
                  <li >
                    <b>Profile definition:</b> development of methods to accurately define the personality profile, job profile, and company profile for successful recruitment.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold', marginBottom: '16px',   fontSize: '18px' }}>
                  2. Secondary goals of the project:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: 'disc',
                    paddingBottom: { xl: '32px', lg: '24px', xxs: '24px' },
                    '& li': {
                      marginBottom: '8px',
                      fontWeight: 'normal', // Set normal font weight for sub-items
                      
                    },
                  }}
                >
                  <li>
                    <b>Psychodiagnostics and testing:</b> implementation of tools for testing candidates and determining risks, compatibility with corporate culture, and team characteristics.
                  </li>
                  <li>
                    <b>Automation of HR functions:</b> integration of personnel assessment, administration, adaptation, and analytics functions to improve the efficiency of the HR department.
                  </li>
                  <li>
                    <b>HR planning and management:</b> creation of tools for building organizational structure, team building, and vacancy planning.
                  </li>
                  <li>
                    <b>Optimization of the recruitment process:</b> integration with job sites, automation of resume search and processing, advanced candidate search.
                  </li>
                  <li>
                    <b>Evaluation and development:</b> development of a system for performance evaluation, training, and development of employees.
                  </li>
                  <li>
                    <b>Analytics and reporting:</b> creation of functions to analyze the reasons for rejections, recruitment timelines, and other key performance indicators of the recruitment department.
                  </li>
                </Box>
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect(ProfWorldGoal);
