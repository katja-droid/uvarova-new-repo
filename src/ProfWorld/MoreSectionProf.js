import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

import image1 from '../assets/more-nutritionist.png'; // Replace with your image paths
import image2 from '../assets/more-met.png';
import image3 from '../assets/more-forum.png';
import { Link } from 'react-router-dom';

const MoreSectionProf = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#fff',
        color: '#0A0A14',
        py: { 
          xxs: '24px', 
          xs: '48px', 
          sm: '60px', 
          md: '84px', 
          lg: '84px', 
          xl: '84px', 
          xxl: '97px' 
        },
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
            }}
          >
            More Projects
          </Typography>
        </Box>

        {/* Responsive Grid */}
        <Grid container spacing={2}>
          {/* Item 1: Image + Text */}
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box>
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
            <Box>
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
            <Box>
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

export default MoreSectionProf;
