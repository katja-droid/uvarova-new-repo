import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ProfWorldConstraintsTwo = () => {
  return (
    <Grid item sm={12} xs={12} md={12}>
      <Box
        sx={{
          border: '1px solid #EFEFF8',
          padding: '32px',
        }}
      >
        <Box
          sx={{
            fontFamily: 'Calibre Regular',
            fontSize: '16px', // Adjusted font size to 16px
            lineHeight: '24px',
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
            {/* Technological Limitations */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                  fontFamily: 'Calibre Regular',
                }}
              >
                Technological Limitations:
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc', // Set disc markers for sub-items
                  paddingLeft: '20px',
                  '& li': {
                    mb: '8px', // Adds spacing of 8px between sub-items
                  },
                  pb: {
                    xl: '32px', // Correct padding for xl
                    xxs: '24px', // Correct padding for lg
                  },
                }}
              >
                <li>
                  Compatibility with existing power supplies: Integrating a new system with existing HR solutions may be a control unit due to incompatibility or unstable technologies.
                </li>
                <li>
                  Technology Availability: Some functions may require technologies that have not yet been implemented within the organization, which can add time and cost to the project.
                </li>
              </Box>
            </li>

            {/* Human Resources */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                  fontFamily: 'Calibre Regular',
                }}
              >
                Human Resources:
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc', // Set disc markers for sub-items
                  paddingLeft: '20px',
                  '& li': {
                    mb: '8px', // Adds spacing of 8px between sub-items
                  },
                }}
              >
                <li>
                  Insufficient qualifications of employees: Implementation of the system requires testers and HR specialists to have certain skills in the field of IT and analytics, which can lead to additional time for training or hiring new specialists.
                </li>
                <li>
                  Resistance to Change: Employees may be resistant to new processes and technologies, so a change management plan needs to be developed to minimize the negative impact.
                </li>
              </Box>
            </li>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProfWorldConstraintsTwo;
