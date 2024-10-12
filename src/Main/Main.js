import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import olga from '../assets/olga.png';
import MainSectionOne from './MainSectionOne';
import Projects from './Projects';
import ScrollToTop from '../ScrollToTop';

const Main = () => {
  const technologies = [
    { id: 1, name: 'Saas', color: '#FFE9E3' },
    { id: 2, name: 'Websites', color: '#E4DBEA' },
    { id: 3, name: 'Mobile', color: '#E7EDFF' },
    { id: 4, name: 'App', color: '#FAF6C8' },
    { id: 5, name: 'ERP', color: '#E7EDFF' },
    { id: 6, name: 'Mob App', color: '#E4DBEA' },
    { id: 7, name: 'B2B', color: '#FFE9E3' },
    { id: 8, name: 'B2C', color: '#FAF6C8' },
  ];

  return (
    <Box sx={{pb: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' }}}>
      <ScrollToTop/>
      <MainSectionOne />
     
        {/* Ensure Project components are direct children of Grid */}
        <Projects />
    </Box>
  );
};

export default Main;
