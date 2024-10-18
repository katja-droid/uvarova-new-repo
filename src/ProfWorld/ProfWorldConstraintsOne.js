import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FormattedText from '../FormattedText'; // Adjust the import path as necessary

const ProfWorldConstraintsOne = () => {
  return (
    <Grid item sm={12} xs={12} md={12}>
      <Box
        sx={{
          border: '1px solid #EFEFF8',
          paddingTop: 0,
          paddingBottom: 0,
          padding: { xl: '32px', lg: '24px', xxs: '16px' },
          height: { xxl: '417px', lg: '414px', md: '447px', sm: '547px', xxs: 'auto' },
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            fontFamily: 'Calibre Regular',
            fontSize: '16px',
            lineHeight: '24px',
            paddingTop: 0,
            paddingBottom: 0,
            margin: 0,
          }}
        >
          {/* Temporary Restrictions */}
          <Box sx={{ mb: '24px' }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                mb: '8px',
                fontSize: '18px',
                fontFamily: 'Calibre Regular',
                marginTop: 0,
              }}
            >
              Temporary restrictions:
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyleType: 'none', // Remove default bullet points
                margin: 0,
                padding: 0,
              }}
            >
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: '16px', pl: '11px' }}>
                <Typography sx={{ fontSize: '18px', lineHeight: '1.4', marginRight: '11px' }}>•</Typography>
                <FormattedText
                  text="Project deadline: Setting strict deadlines at each stage of development can create pressure and affect the quality of solutions. You will have to carefully plan the time needed to test and implement systems."
                />
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: '16px', pl: '11px' }}>
                <Typography sx={{ fontSize: '18px', lineHeight: '1.4', marginRight: '11px' }}>•</Typography>
                <FormattedText
                  text="Vendor Alignment and Integration: Time constraints can also make it difficult for software or tool vendors to determine delivery dates."
                />
              </Box>
            </Box>
          </Box>

          {/* Budget Restrictions */}
          <Box>
            <Typography
              sx={{
                fontWeight: 'bold',
                mb: '8px',
                fontSize: '18px',
                fontFamily: 'Calibre Regular',
                marginTop: 0,
              }}
            >
              Budget restrictions:
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyleType: 'none', // Remove default bullet points
                margin: 0,
                padding: 0,
              }}
            >
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: '16px', pl: '11px' }}>
                <Typography sx={{ fontSize: '18px', lineHeight: '1.4', marginRight: '11px' }}>•</Typography>
                <FormattedText
                  text="Financial resource: The budget may be limited, which may reduce the ability to purchase expensive software or attract highly qualified specialists to implement the intended functions of the system."
                />
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: '16px', pl: '11px' }}>
                <Typography sx={{ fontSize: '18px', lineHeight: '1.4', marginRight: '11px' }}>•</Typography>
                <FormattedText
                  text="Limitations on additional expenses: Possible unaccounted costs for employee training or technical support after retirement, which are also worth considering in planning."
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProfWorldConstraintsOne;
