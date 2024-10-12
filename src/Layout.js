import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';  // Import useLocation
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Navbar from './Navbar';
import theme from './theme';  // Import the theme from theme.js
import { useInView } from 'react-intersection-observer';  // Import Intersection Observer
import './App.css';  // Add your CSS for animations
import { Box } from '@mui/material';
import ReadingProgressBar from './ReadingProgressBar';  // Import the progress bar component
import Footer from './Footer';

const Section = ({ content }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,  // Trigger when 10% of the element is visible
    triggerOnce: true,  // Only trigger the animation once
  });

  return (
    <Box sx={{ px: 0, py: 0 }} ref={ref} className={`section ${inView ? 'show' : ''}`}>
      {content}
    </Box>
  );
};

function Layout() {
  const location = useLocation();

  // Define the routes where you don't want the footer to appear
  const hiddenRoutes = ['/contact', '/signup', '/checkout'];  // Add routes as necessary

  return (
    <ThemeProvider theme={theme}>
      <ReadingProgressBar />  {/* Add the reading progress bar at the top */}
      <Container disableGutters maxWidth={false} style={{ minHeight: '100vh' }}>
        <Grid2 container direction="column">
          <Grid2 item xxs={4} xs={4} sm={4} md={8} lg={12} xl={12} xxl={12} xxxl={12}>
            <Navbar />
          </Grid2>

          <Grid2 item xxs={4} xs={4} sx={{ py: 0, px: 0 }}>
            <Section content={<Outlet />} />
          </Grid2>
        </Grid2>

     
      </Container>
         {/* Conditionally render the footer */}
         {!hiddenRoutes.includes(location.pathname) && <Footer />}
    </ThemeProvider>
  );
}

export default Layout;
