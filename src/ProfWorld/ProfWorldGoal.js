import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ProfWorldGoal = () => {
  return (
    <Container disableGutters maxWidth={false}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0}  >
        <Grid item sm={12} xxs={12} md={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: '24px',
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
        sx={{  fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid item sm={12} xs={12}>
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
                '& li': {
                  mb: '8px', // Adds spacing of 8px between list items
                },
              }}
            >
              <li>
                <Typography sx={{ fontWeight: 'bold', mb: '8px' }}>
                  1. Main Objectives of the Project:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: 'disc', // Set disc markers for sub-items
                    '& li': {
                      mb: '8px', // Adds spacing of 8px between sub-items
                    },
                  }}
                >
                  <li>
                    <b>Automating the personnel selection process:</b> creating a system to ensure an effective match between an employee’s personality profile, job profile, and company profile.
                  </li>
                  <li>
                  <b>Profile definition:</b> development of methods to accurately define the personality profile, job profile, and company profile for successful recruitment.
                  </li>
                </Box>
              </li>

              <li>
                <Typography sx={{ fontWeight: 'bold',  mb: '8px' }}>
                  2. Secondary Goals of the Project:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: 'disc', // Set disc markers for sub-items
                  
                    '& li': {
                      mb: '8px', // Adds spacing of 8px between sub-items
                    },
                  }}
                >
                  <li>
                  <b> Psychodiagnostics and testing:</b> implementation of tools for testing candidates and determining risks, compatibility with corporate culture, and team characteristics.
                  </li>
                  <li>
                  <b> Automation of HR functions:</b> integration of personnel assessment, administration, adaptation, and analytics functions to improve the efficiency of the HR department.
                  </li>
                  <li>
                  <b>HR planning and management:</b> creation of tools for building organizational structure, team building, and vacancy planning.
                  </li>
                  <li>
                  <b> Optimization of the recruitment process:</b> integration with job sites, automation of resume search and processing, advanced candidate search.
                  </li>
                  <li>
                  <b> Evaluation and development:</b> development of a system for performance evaluation, training, and development of employees.
                  </li>
                  <li>
                  <b> Analytics and reporting:</b> creation of functions to analyze the reasons for rejections, recruitment timelines, and other key performance indicators of the recruitment department.
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

export default ProfWorldGoal;
