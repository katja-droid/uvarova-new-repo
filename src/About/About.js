import React from 'react';
import { Grid, Box } from '@mui/material';
import communityEvent from '../assets/community-event.png';
import AboutMe from './AboutMe';
import MajorProject from './MajorProject';
import Mentorship from './Mentorship';
import Certificates from './Certificates';
import SelfDevelopment from './SelfDevelopment';
import VideosAndPresentations from './VideosAndPresentations';
import withScrollEffect from '../withScrollEffect.js';

// Wrap the components with the HOC
const AboutMeWithScroll = withScrollEffect(AboutMe);
const MajorProjectWithScroll = withScrollEffect(MajorProject);
const MentorshipWithScroll = withScrollEffect(Mentorship);

const About = () => {
  return (
    <Grid
      container
      spacing={0} // Remove default spacing between grid items
      alignItems="center"
      justifyContent="center"
      sx={{
        my: 0,
        mx: 0,
        px: 0,
        py: 0,
      }}
    >
      <Grid item xxl={8} xl={8} lg={8} md={12} sm={12} xs={12} sx={{ p: 0 }}>
        <Grid container spacing={0} sx={{ p: 0, m: 0 }}>
          <Grid item xs={12} sx={{ mb: '24px' }}> {/* 48px margin bottom */}
            <Box sx={{ height: 'auto', p: 0 }}>
              <img src={communityEvent} width="100%" alt="Community Event" style={{ height: 'auto', objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mb: '48px' }}> {/* 48px margin bottom */}
            <AboutMeWithScroll />
          </Grid>
          <Grid item xs={12} sx={{ mb: '48px' }}> {/* 48px margin bottom */}
            <MajorProjectWithScroll />
          </Grid>
          <Grid item xs={12} sx={{ mb: '24px' }}> {/* 48px margin bottom */}
            <MentorshipWithScroll />
          </Grid>
        </Grid>
        <Grid container spacing={0} sx={{ p: 0, m: 0 }}>
          <Grid item xs={12} sx={{ mb: '48px' }}> {/* 48px margin bottom */}
            <Certificates />
          </Grid>
          <Grid item xs={12} sx={{ mb: '24px' }}> {/* 48px margin bottom */}
            <SelfDevelopment />
          </Grid>
          <Grid item xs={12} sx={{ mb: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' } }}> {/* 48px margin bottom */}
            <VideosAndPresentations />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
