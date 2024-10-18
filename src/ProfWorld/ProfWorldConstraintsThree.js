import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ProfWorldConstraintsThree = () => {
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
          <Box sx={{ mb: '24px' }}>
            {/* Legal and Ethical Restrictions */}
            <Typography
              sx={{
                fontWeight: 'bold',
                mb: '8px',
                fontSize: '18px',
                fontFamily: 'Calibre Regular',
                marginTop: 0,
              }}
            >
              Legal and ethical restrictions:
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
                <Typography sx={{ fontSize: '18px', lineHeight: '1.4' }}>
                  Legal Compliance: It is important to be aware of health and employment laws that may affect the processing of candidate data.
                </Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: '16px', pl: '11px' }}>
                <Typography sx={{ fontSize: '18px', lineHeight: '1.4', marginRight: '11px' }}>•</Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '1.4' }}>
                  Ethical considerations for selection: Testing and profiling methods must be used to ensure that they do not violate ethical standards or create bias.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            {/* Qualitative Restrictions */}
            <Typography
              sx={{
                fontWeight: 'bold',
                mb: '8px',
                fontSize: '18px',
                fontFamily: 'Calibre Regular',
                marginTop: 0,
              }}
            >
              Qualitative restrictions:
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
                <Typography sx={{ fontSize: '18px', lineHeight: '1.4' }}>
                  Data Quality: The success of the system will depend on the quality of the input data (resumes, test results, etc.). It will be necessary to ensure control of the purity and completeness of information.
                </Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: '16px', pl: '11px' }}>
                <Typography sx={{ fontSize: '18px', lineHeight: '1.4', marginRight: '11px' }}>•</Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '1.4' }}>
                  Validation and updating of profiling methods: Psychodiagnostic and testing methods should be validated and updated according to current state-of-the-art research.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProfWorldConstraintsThree;
