import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FormattedText from '../FormattedText'; // Adjust the import path as necessary

const ProfWorldConstraintsTwo = () => {
  return (
    <Grid item sm={12} xs={12} md={12}>
      <Box
        sx={{
          border: '1px solid #EFEFF8',
          paddingTop: 0, // Remove default padding on top
          paddingBottom: 0, // Remove default padding on bottom
          padding: { xl: '32px', lg: '24px', xxs: '16px' }, // Custom padding for horizontal axes
          height: { xxl: '417px', lg: '414px', md: '447px', sm: '547px', xxs: 'auto' },
          display: 'flex', // Ensure flexbox layout
          alignItems: 'flex-start', // Align content to the top
        }}
      >
        <Box
          sx={{
            fontFamily: 'Calibre Regular',
            fontSize: '16px', // Adjusted font size to 16px
            lineHeight: '1.4', // Apply line-height of 1.4 for consistent spacing
            paddingTop: 0, // Remove default padding on top
            paddingBottom: 0, // Remove default padding on bottom
            margin: 0, // Remove any default margin
          }}
        >
          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              paddingLeft: 0, // Remove default padding on the left
              paddingTop: 0, // Remove default padding on top
              paddingBottom: 0, // Remove default padding on bottom
              margin: 0, // Remove any default margin
            }}
          >
            {/* Technological Limitations */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '18px',
                  fontFamily: 'Calibre Regular',
                  marginTop: 0, // Ensure no top margin
                }}
              >
                Technological limitations:
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
                    text="Compatibility with existing power supplies: Integrating a new system with existing HR solutions may be a control unit due to incompatibility or unstable technologies."
                  />
                </Box>
                <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: '16px', pl: '11px' }}>
                  <Typography sx={{ fontSize: '18px', lineHeight: '1.4', marginRight: '11px' }}>•</Typography>
                  <FormattedText
                    text="Technology Availability: Some functions may require technologies that have not yet been implemented within the organization, which can add time and cost to the project."
                  />
                </Box>
              </Box>
            </li>

            {/* Human Resources */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '18px',
                  fontFamily: 'Calibre Regular',
                  marginTop: 0, // Ensure no top margin
                }}
              >
                Human resources:
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
                    text="Insufficient qualifications of employees: Implementation of the system requires testers and HR specialists to have certain skills in the field of IT and analytics, which can lead to additional time for training or hiring new specialists."
                  />
                </Box>
                <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: '16px', pl: '11px' }}>
                  <Typography sx={{ fontSize: '18px', lineHeight: '1.4', marginRight: '11px' }}>•</Typography>
                  <FormattedText
                    text="Resistance to Change: Employees may be resistant to new processes and technologies, so a change management plan needs to be developed to minimize the negative impact."
                  />
                </Box>
              </Box>
            </li>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProfWorldConstraintsTwo;
