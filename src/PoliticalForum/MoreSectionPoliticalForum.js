import React from 'react';
import { Box, Grid, Typography, Container, useMediaQuery } from '@mui/material';

import image1 from '../assets/more-nutritionist.png'; // Default image
import image2 from '../assets/more-met.png'; // Default image
import image3 from '../assets/more-prof.png'; // Default image
import image1Md from '../assets/more-nutritionist-md.png'; // Image for md breakpoint
import image2Md from '../assets/more-met-md.png'; // Image for md breakpoint
import image3Md from '../assets/more-prof-md.png'; // Image for md breakpoint

import { Link } from 'react-router-dom';
import withScrollEffect from '../withScrollEffect.js';
import { useTheme } from '@mui/material/styles';

const MoreSectionPoliticalForum = () => {
  // Access the theme object to use breakpoints
  const theme = useTheme();

  // Detect if the current breakpoint is md
  const isMd = useMediaQuery(theme.breakpoints.only('md'));

  // Determine the images to use based on the current screen size
  const imageSrc1 = isMd ? image1Md : image1;
  const imageSrc2 = isMd ? image2Md : image2;
  const imageSrc3 = isMd ? image3Md : image3;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#fff',
        color: '#0A0A14',
        py: { xl: '80px', sm: '60px', xxs: '48px' },
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
              mb: '32px',
            }}
          >
            More Projects
          </Typography>
        </Box>

        {/* Responsive Grid */}
        <Grid container spacing={2}>
          {/* Item 1: Image + Text */}
          <Grid item xs={12} sm={12} lg={6} xl={4}>
            <Box sx={{ boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)', pb: '32px', borderRadius: '16px' }}>
              <img src={imageSrc3} alt="ProfWorld: Automated Recruiting" style={{ width: '100%' }} />
              <Typography sx={{ px: '30px' }} mt={2}>
                <Link
                  to="/prof-world"
                  underline="none"
                  style={{
                    fontFamily: 'Calibre Regular',
                    fontWeight: 400, // Calibre Regular
                    fontSize: '18px',
                    color: '#0A0A14',
                    textDecoration: 'none',
                  }}
                >
                  <b>Prof.world:</b> Automated Recruiting
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Item 2: Image + Text */}
          <Grid item xs={12} sm={12} lg={6} xl={4}>
            <Box sx={{ boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)', pb: '32px', borderRadius: '16px' }}>
              <img src={imageSrc1} alt="Virtual Nutritionist: Health Monitoring" style={{ width: '100%' }} />
              <Typography sx={{ px: '30px' }} mt={2}>
                <Link
                  to="/virtual-nutritionist"
                  underline="none"
                  style={{
                    fontFamily: 'Calibre Regular',
                    fontWeight: 400, // Calibre Regular
                    fontSize: '18px',
                    color: '#0A0A14',
                    textDecoration: 'none',
                  }}
                >
                  <b>VN:</b> Health monitoring apps
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Item 3: Image + Text */}
          <Grid item xs={12} sm={12} lg={6} xl={4}>
            <Box sx={{ boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)', pb: '32px', borderRadius: '16px' }}>
              <img src={imageSrc2} alt="Metlife: Digital Forms" style={{ width: '100%' }} />
              <Typography sx={{ px: '30px' }} mt={2}>
                <Link
                  to="/metlife"
                  underline="none"
                  style={{
                    fontFamily: 'Calibre Regular',
                    fontWeight: 400, // Calibre Regular
                    fontSize: '18px',
                    color: '#0A0A14',
                    textDecoration: 'none',
                  }}
                >
                  <b>Metlife:</b> Digital Forms
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default withScrollEffect(MoreSectionPoliticalForum);
