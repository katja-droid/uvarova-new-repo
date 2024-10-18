import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// Utility function to prevent widows by replacing spaces after conjunctions with non-breaking spaces
function preventWidows(text) {
  const widows = ['and', 'or', 'but', 'for', 'nor', 'so', 'yet', 'of', 'an', 'between', 'to', 'a', 'the'];
  const widowRegex = new RegExp(`\\b(${widows.join('|')})\\s`, 'gi');
  return text.replace(widowRegex, (match, widow) => `${widow}\u00A0`); // Replace space with non-breaking space
}

// Utility function to insert line breaks before specific articles or prepositions
function insertLineBreaks(text) {
  const articlesAndPrepositions = ['the', 'a', 'an', 'of', 'in', 'on', 'at', 'to', 'for', 'with', 'by', 'and', 'or', 'but', 'between'];
  const regex = new RegExp(`\\s+(?=(${articlesAndPrepositions.join('|')})\\s*$)`, 'gi');
  return text.replace(regex, '\n').split('\n'); // Inserts a newline character before the matched articles or prepositions
}

const ProfWorldAnalyticsOne = () => {
  // Define the text for each section
  const automationOfProcessesText = insertLineBreaks(
    'Approximately 70% of SMBs use CRM to manage customer and candidate data, making it much easier to interact and analyze. By iterating information from different sources, making it easier to access data.'
  );

  const dependenceOnTechnologyText = insertLineBreaks(
    'Technological errors can lead to loss of candidate data or difficult interactions. Automation can prevent you from creating a personal touch with candidates, which is sometimes important in the hiring process.'
  );

  const crmSystemsText = insertLineBreaks(
    'According to reports, about 75% of recruiters say that using an ATS increases their efficiency. Data helps improve candidate selection, allowing HR to track key metrics and evaluate the effectiveness of different candidate sources.'
  );

  const complexityOfImplementationText = insertLineBreaks(
    'The CRM implementation process can be lengthy and costly, and not all companies can afford it. Employees need to be trained on the new software, which can slow down workflows.'
  );

  return (
    <Grid
      container
      spacing={{ xxs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}
      alignItems="stretch"
      sx={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {/* Each analytics card will be 6 columns wide */}
      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: { xl: '32px', lg: '24px', xxs: '16px' },
            display: 'flex',
            flexDirection: 'column',
            height: { xl: '245px', md: '280px', xxs: 'auto' },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
              lineHeight: 'normal',
            }}
          >
            1. Automation of processes
          </Typography>
          {automationOfProcessesText.map((line, index) => (
            <Typography
              key={index}
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '18px',
                lineHeight: 'normal',
                pb: '8px',
                pl: '16px', // Padding left for indentation
              }}
            >
              {preventWidows(line)} {/* Apply widow prevention */}
            </Typography>
          ))}
        </Box>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: { xl: '32px', lg: '24px', xxs: '16px' },
            display: 'flex',
            flexDirection: 'column',
            height: { xl: '245px', md: '280px', xxs: 'auto' },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
              lineHeight: 'normal',
            }}
          >
            2. Dependence on technology
          </Typography>
          {dependenceOnTechnologyText.map((line, index) => (
            <Typography
              key={index}
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '18px',
                pb: '8px',
                lineHeight: 'normal',
                pl: '16px', // Padding left for indentation
              }}
            >
              {preventWidows(line)} {/* Apply widow prevention */}
            </Typography>
          ))}
        </Box>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: { xl: '32px', lg: '24px', xxs: '16px' },
            display: 'flex',
            flexDirection: 'column',
            height: { xl: '265px', lg: '249px', md: '302px', xxs: 'auto' },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
              lineHeight: '20px',
            }}
          >
            3. CRM systems for recruiters
          </Typography>
          {crmSystemsText.map((line, index) => (
            <Typography
              key={index}
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '18px',
                lineHeight: '20px',
                pb: '8px',
                pl: '16px', // Padding left for indentation
              }}
            >
              {preventWidows(line)} {/* Apply widow prevention */}
            </Typography>
          ))}
        </Box>
      </Grid>

      <Grid item md={6} xs={12} sx={{ display: 'flex', height: 'auto' }}>
        <Box
          sx={{
            border: '1px solid #EFEFF8',
            padding: { xl: '32px', lg: '24px', xxs: '16px' },
            display: 'flex',
            flexDirection: 'column',
            height: { xl: '265px', lg: '249px', md: '302px', xxs: 'auto' },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px',
              fontWeight: 'bold',
              pb: '16px',
              lineHeight: 'normal',
            }}
          >
            4. Complexity of implementation
          </Typography>
          {complexityOfImplementationText.map((line, index) => (
            <Typography
              key={index}
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '18px',
                lineHeight: 'normal',
                pl: '16px', // Padding left for indentation
              }}
            >
              {preventWidows(line)} {/* Apply widow prevention */}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfWorldAnalyticsOne;
