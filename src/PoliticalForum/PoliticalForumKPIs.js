import { Box, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const PoliticalForumKPIs = () => {
  return (
    <div id="nutritionistDesignKPIs" style={{ width: '100%' }}>
       <Box sx={{ pb: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' } }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xxs: '30px', sm: '34px', md: '40px' },
          fontFamily: 'Playfair Display Bold',
          pb: { xxs: '16px', sm: '24px', lg: '32px' }, // Responsive padding after heading
        }}
      >
        Design KPIs
      </Typography>

      {/* Additional blocks styled like Analytics */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '24px', pb: '32px' }}>
        <Box sx={{ border: '1px solid #EFEFF8', padding: '32px', flex: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px', // Headings 20px
              fontWeight: 'bold',
              pb: '8px',
            }}
          >
            1. How many people find what they are looking for
          </Typography>
        </Box>

        <Box sx={{ border: '1px solid #EFEFF8', padding: '32px', flex: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px', // Headings 20px
              fontWeight: 'bold',
              pb: '8px',
            }}
          >
            2. How much time people need to find what they are looking for
          </Typography>
        </Box>
      </Box>

 
     

      <Typography sx={{ fontSize: '18px', fontFamily: 'Calibre Regular', pt: '16px' }}>
        In detail, these attributes could be measured and tracked across a variety of user’s touch points:
      </Typography>

      <Box
        component="ul"
        sx={{
          fontSize: '18px',
          color: '#0A0A14',
          lineHeight: '26px',
          listStyleType: 'disc', // Enables bullet points
          paddingLeft: '20px', // Adjust padding to align bullet points
          fontFamily: 'Calibre Regular',
        }}
      >
        <li><b>top tasks completion rates</b> for internal and external users<br /></li>
        <li><b>top tasks completion times</b> on or off the website<br /></li>
        <li><b>% of screen dedicated for content</b>  (mobile/desktop)<br /></li>
        <li><b>overall satisfaction</b>  with the content and experience on the site (clarity and speed of navigation)<br /></li>
        <li><span style={{textDecoration: 'underline'}}>System Usability Scale Score</span> &gt; 70<br /></li>
        <li><b>rate of errors</b> and mistakes in navigation, search, and data input (e.g., filters, forms, search queries)<br /></li>
        <li><b>accuracy of data</b> successfully submitted by users (how difficult it is to make mistakes)<br /></li>
        <li><b>frequency of dead ends</b> (404s, empty search/filtering results, lock-out rates due to poor validation)<br /></li>
        <li><b>time to production</b>, or how quickly users can publish quality content that matches content and design requirements<br /></li>
        <li><b>search query iterations</b>, or how much time people spend refining keywords to find relevant results<br /></li>
        <li><span style={{textDecoration: 'underline'}}>Carbon footprint impact</span>, or how sustainable the website is in light of climate challenges<br /></li>
      
     
      </Box>
      <Typography sx={{ fontSize: '18px', fontFamily: 'Calibre Regular', pt: '16px' }}>
      All design KPIs are explained and specified in a separate documents on design KPIs targets.
      </Typography>
      </Box>
    </div>
  );
};

export default withScrollEffect (PoliticalForumKPIs);
