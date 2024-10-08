import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';
import project4 from './assets/project4.png';
import arrow from './assets/maki_arrow.svg';

const items = [
  {
    heading: 'Prof.world',
    description: 'SaaS: automated recruiting, training, and payroll system for B2B',
    linkText: 'Enter Password', // Default text
    linkUrl: '/prof-world',
    bgColor: '#FAF6C8',
    imageUrl: project1,
  },
  {
    heading: 'Virtual Nutritionist',
    description: 'Health monitoring apps for iOS platform',
    linkText: 'Read case study', // Already this way
    linkUrl: '/virtual-nutritionist',
    bgColor: '#E5F9EC',
    imageUrl: project2,
  },
  {
    heading: 'Metlife',
    description: 'UX/UI process for developing digital forms for an insurance company',
    linkText: 'Enter Password', // Default text
    linkUrl: '/metlife',
    bgColor: '#DDEFFF',
    imageUrl: project3,
  },
  {
    heading: 'Political Forum',
    description: 'UX Assignment: Multi-Level Navigation',
    linkText: 'Enter Password', // Default text
    linkUrl: '/political-forum',
    bgColor: '#E7EDFF',
    imageUrl: project4,
  },
];

const Projects = () => {
  const [hoverState, setHoverState] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleMouseEnter = (index) => {
    setHoverState((prevState) => ({ ...prevState, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setHoverState((prevState) => ({ ...prevState, [index]: false }));
  };

  return (
    <Grid container spacing={3} justifyContent="space-between">
      {items.map((item, index) => (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
          <Box
            style={{
              backgroundColor: item.bgColor,
              color: '#0A0A14',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '16px 16px 0 0',
            }}
          >
            <Box
              sx={{
                padding: {
                  xxs: '30px',
                  xs: '30px',
                  sm: '20px',
                  md: '30px',
                  lg: '40px',
                  xl: '40px',
                },
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontFamily: 'Playfair Display Bold',
                  fontSize: {
                    xxs: '30px',
                    xs: '30px',
                    sm: '30px',
                    md: '20px',
                    lg: '30px',
                    xl: '40px',
                  },
                }}
              >
                {item.heading}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  width: {
                    xxs: '268px',
                    xs: '263px',
                    sm: '236px',
                    md: '263px',
                    lg: '334px',
                    xl: '334px',
                  },
                  height: {
                    xxs: '44px',
                    xs: '44px',
                    sm: '38px',
                    md: '50px',
                    lg: '50px',
                    xl: '50px',
                  },
                  paddingTop: '0',
                  fontFamily: 'Calibre Regular',
                  fontSize: {
                    xxs: '18px',
                    xs: '18px',
                    sm: '16px',
                    md: '18px',
                    lg: '21px',
                    xl: '21px',
                  },
                  pb: '10px',
                }}
              >
                {item.description}
              </Typography>

              {/* Conditionally change linkText based on authentication */}
              <Link href={item.linkUrl} underline="none" color="inherit">
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    position: 'relative',
                    cursor: 'pointer',
                    width: 'fit-content',
                  }}
                  sx={{
                    paddingTop: {
                      xxs: '12px',
                      xs: '12px',
                      sm: '16px',
                      md: '16px',
                      lg: '16px',
                      xl: '16px',
                    },
                    fontSize: {
                      xxs: '18px',
                      xs: '18px',
                      sm: '16px',
                      md: '18px',
                      lg: '21px',
                      xl: '21px',
                    },
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <Box display="flex" alignItems="center">
                    <span
                      style={{
                        marginRight: '8px',
                        fontFamily: 'Calibre Medium',
                        color: '#0A0A14',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        verticalAlign: 'middle',
                      }}
                    >
                      {isAuthenticated || item.heading === 'Virtual Nutritionist'
                        ? 'Read case study'
                        : item.linkText}
                      <Box>
                        <img
                          src={arrow}
                          alt="Arrow"
                          style={{
                            height: 'auto',
                            verticalAlign: 'middle',
                            marginLeft: '8px',
                          }}
                        />
                      </Box>
                    </span>
                  </Box>
                  {/* Underline animation */}
                  <Box
                    sx={{
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -2,
                      height: '0.5px',
                      width: hoverState[index] ? '100%' : '0%',
                      backgroundColor: '#0A0A14',
                      transition: 'width 0.3s ease',
                    }}
                  ></Box>
                </Box>
              </Link>
            </Box>
          </Box>
          <Box
            display="flex"
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            backgroundColor={item.bgColor}
            sx={{
              paddingTop: {
                xxl: '122px',
                xl: '50px',
                lg: '50px',
                md: '24px',
                sm: '27px',
                xs: '27px',
                xxs: '27px',
              },
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.heading}
              style={{ width: '100%', borderRadius: '16px 16px 0 0' }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
