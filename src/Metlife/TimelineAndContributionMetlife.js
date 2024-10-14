import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import withScrollEffect from '../withScrollEffect.js';

const TimelineAndContributionMetlife = ({ tools }) => {
  const theme = useTheme();
  
  // Media query for `xxs` and `xs` breakpoints
  const isXxs = useMediaQuery(theme.breakpoints.only('xxs'));  // `xxs` specific
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));    // `xs` specific

  // Define the specific contributions for xxs and xs screens
  const xxsAndXsContribution = [
    { id: 1, name: 'User Research' },
    { id: 2, name: 'Market Research' },
    { id: 3, name: 'Digital Forms' },
    { id: 4, name: 'Web Design' },
    { id: 5, name: 'Design System' },
    { id: 6, name: 'Usability Testing' },
  ];

  // Full list for larger screens
  const fullContribution = [
    { id: 1, name: 'User Research' },
    { id: 2, name: 'Market Research' },
    { id: 3, name: 'Digital Forms' },
    { id: 4, name: 'Web Design' },
    { id: 5, name: 'Design System' },
    { id: 6, name: 'Usability Testing' },
  ];
  const sections = [
    { id: 'problem', label: 'Problem' },
    { id: 'users', label: 'Users' },
    { id: 'generalImpression', label: 'General Impression' },
    { id: 'goal', label: 'Goal' },
    { id: 'constraints', label: "Project's Constraints" },
    { id: 'designKPIs', label: 'Design KPIs' },
    { id: 'notes', label: 'Notes' },
  ];
  
  // Select the appropriate contribution list based on the screen size
  const selectedContribution = (isXxs || isXs) ? xxsAndXsContribution : fullContribution;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: { xl: '80px', lg: '40px', sm: '32px', xxs: '24px' } }}>
      {/* Timeline */}
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          fontFamily: 'Calibre Bold',
          pb: '8px',
          textTransform: 'uppercase',
        }}
      >
        Timeline
      </Typography>
      <Typography sx={{ fontSize: '23px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>Apr — Aug 2024</b>  ~ 5 months
          
      </Typography>

      {/* My role */}
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          fontFamily: 'Calibre Bold',
          pb: '8px',
          pt: { lg: '32px', xxs: '24px' },
          textTransform: 'uppercase',
        }}
      >
        My role
      </Typography>
      <Typography sx={{ fontSize: '23px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>UX/UI Designer</b>
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        User research to identify needs and preferences.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Creation of layouts, prototypes, and high-quality mockups to illustrate design concepts and meet project goals.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Ensuring a consistent visual style across mobile and web versions of the application with an emphasis on usability and accessibility.
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
        Work closely with developers and web development team to ensure effective design implementation and maintain constant communication to address design-related issues.
      </Typography>

      {/* Contribution */}
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          background: 'linear-gradient(90deg, #0D99FF, #99FAF4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          fontFamily: 'Calibre Bold',
          pb: '8px',
          pt: { lg: '32px', xxs: '24px' },
          textTransform: 'uppercase',
        }}
      >
        Contribution
      </Typography>
      <Box>
        {selectedContribution.map((item) => (
          <Box
            key={item.id}
            component="span"
            sx={{
              backgroundColor: '#F2F3F7',
              padding: '8px',
              borderRadius: '4px',
              display: 'inline-block',
              color: '#0A0A14',
              mr: { xs: '8px', md: '10px' },
              mb: { xs: '8px', md: 0 },
            }}
          >
            {item.name}
          </Box>
        ))}
      </Box>

      {/* Tools used */}
    
    </Box>
  );
};

export default withScrollEffect (TimelineAndContributionMetlife);
