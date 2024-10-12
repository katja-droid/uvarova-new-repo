import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

import image1 from '../assets/more-nutritionist.png'; // Replace with your image paths
import image2 from '../assets/more-met.png';
import image3 from '../assets/more-forum.png';
import { Link } from 'react-router-dom';
import withScrollEffect from '../withScrollEffect.js';

const MoreSectionProf = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#fff',
        color: '#0A0A14',
        py: { xl: '80px', lg: '40px', sm: '32px', xxs: '16px' },
      }}
    >
      <Container maxWidth={false}>
        {/* Heading */}
        <Box>
          <Typography
            variant="h6"
            align="center"
            sx={{
              textTransform: 'uppercase',
              fontFamily: 'Calibre, sans-serif',
              fontWeight: 600, // Calibre Semibold
              fontSize: '16px',
              color: '#0A0A14',
             mb:   '32px'
            }}
          >
            More Projects
          </Typography>
        </Box>

        {/* Responsive Grid */}
        <Grid container spacing={2}>
          {/* Item 1: Image + Text */}
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box  sx={{boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)', pb: '32px', borderRadius: '16px'}}>
              <img src={image1} alt="Prof.world: automated recruiting" style={{ width: '100%' }} />
              <Typography align="center" mt={2}>
                <Link
                  to="/virtual-nutritionist"
                  underline="none"
                  style={{
                    fontFamily: 'Calibre Regular',
                    fontWeight: 400, // Calibre Regular
                    fontSize: '18px',
                    color: '#0A0A14',
                    
                    textDecoration: 'none'
                  }}
                >
                  <b>VN:</b>  Health monitoring apps 
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Item 2: Image + Text */}
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box  sx={{boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)', pb: '32px', borderRadius: '16px'}}>
              <img src={image2} alt="Metlife: digital forms" style={{ width: '100%' }} />
              <Typography align="center" mt={2}>
                <Link
                  to="/metlife"
                  underline="none"
                  style={{
                    fontFamily: 'Calibre Regular',
                    fontWeight: 400, // Calibre Regular
                    fontSize: '18px',
                    color: '#0A0A14',
                    
                    textDecoration: 'none'
                  }}
                >
                  <b> Metlife:</b> Digital Forms
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Item 3: Image + Text */}
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box  sx={{boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)', pb: '32px', borderRadius: '16px'}}>
              <img src={image3} alt="Forum: Multi-Level Navigation" style={{ width: '100%' }} />
              <Typography align="center" mt={2}>
                <Link
                  to="/political-forum"
                  underline="none"
                  style={{
                    fontFamily: 'Calibre Regular',
                    fontWeight: 400, // Calibre Regular
                    fontSize: '18px',
                    color: '#0A0A14',
                    textDecoration: 'none'
                  }}
                >
                  <b>Forum:</b>  Multi-Level Navigation
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default withScrollEffect (MoreSectionProf);
