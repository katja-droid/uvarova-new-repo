import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ProfWorldConstraintsThree = () => {
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
            {/* Legal and Ethical Restrictions */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                  fontFamily: 'Calibre Regular',
                }}
              >
                Legal and Ethical Restrictions:
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
                  Legal Compliance: It is important to be aware of health and employment laws that may affect the processing of candidate data.
                </li>
                <li>
                  Ethical considerations for selection: Testing and profiling methods must be used to ensure that they do not violate ethical standards or create bias.
                </li>
              </Box>
            </li>

            {/* Qualitative Restrictions */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                  fontFamily: 'Calibre Regular',
                }}
              >
                Qualitative Restrictions:
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
                  Data Quality: The success of the system will depend on the quality of the input data (resumes, test results, etc.). It will be necessary to ensure control of the purity and completeness of information.
                </li>
                <li>
                  Validation and updating of profiling methods: Psychodiagnostic and testing methods should be validated and updated according to current state-of-the-art research.
                </li>
              </Box>
            </li>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProfWorldConstraintsThree;
