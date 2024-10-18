import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ProfWorldConstraintsOne = () => {
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
            {/* Temporary Restrictions */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                  fontFamily: 'Calibre Regular',
                }}
              >
                Temporary restrictions:
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
                  Project deadline: Setting strict deadlines at each stage of development can create pressure and affect the quality of solutions. You will have to carefully plan the time needed to test and implement systems.
                </li>
                <li>
                  Vendor Alignment and Integration: Time constraints can also make it difficult for software or tool vendors to determine delivery dates.
                </li>
              </Box>
            </li>

            {/* Budget Restrictions */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                  fontFamily: 'Calibre Regular',
                }}
              >
                Budget restrictions:
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
                  Financial resource: The budget may be limited, which may reduce the ability to purchase expensive software or attract highly qualified specialists to implement the intended functions of the system.
                </li>
                <li>
                  Limitations on additional expenses: Possible unaccounted costs for employee training or technical support after retirement, which are also worth considering in planning.
                </li>
              </Box>
            </li>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProfWorldConstraintsOne;
