import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: { lg: '80px', md: '40px', sm: '32px', xxs: '16px' } }}>
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
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>May — Nov 2023</b> ~ 7 months
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
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        <b>UX/UI Designer</b>
      </Typography>
      <Typography sx={{ fontSize: '18px', lineHeight: '26px', pb: '8px', fontFamily: 'Calibre Regular' }}>
        Throughout the project, I worked with designers and developers to create a specification process.
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
              mb: { xs: '8px', md: '10px' },
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

export default TimelineAndContributionMetlife;
