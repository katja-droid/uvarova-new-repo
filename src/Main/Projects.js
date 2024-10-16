import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import arrow from '../assets/maki_arrow.svg';
import withScrollEffect from '../withScrollEffect.js';

const items = [
  {
    heading: 'Prof.world',
    description: 'SaaS: automated recruiting, training, and payroll system for B2B',
    linkText: 'Enter Password',
    linkUrl: '/prof-world',
    bgColor: '#FAF6C8',
    imageUrl: project1,
  },
  {
    heading: 'Virtual Nutritionist',
    description: 'Health monitoring apps for iOS platform',
    linkText: 'Read case study',
    linkUrl: '/virtual-nutritionist',
    bgColor: '#E5F9EC',
    imageUrl: project2,
  },
  {
    heading: 'Metlife',
    description: 'UX/UI process for developing digital forms for an insurance company',
    linkText: 'Enter Password',
    linkUrl: '/metlife',
    bgColor: '#DDEFFF',
    imageUrl: project3,
  },
  {
    heading: 'Political Forum',
    description: 'UX Assignment: Multi-Level Navigation',
    linkText: 'Enter Password',
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

  const getImageStyles = (index) => {
    switch (index) {
      case 0:
      case 2:
      case 3:
        return {
          justifyContent: 'flex-end',
          borderRadius: {
            xxxl: '30px 0 0 0',
            xxl: '30px 0 0 0',
            xl: '30px 0 0 0',
            lg: '16px 0 0 0',
            md: '14px 0 0 0',
            sm: '24px 0 0 0',
            xxs: '24px 0 0 0',
          },
          height: {
            xxxl: '482px',
            xxl: '441px',
            xl: '441px',
            lg: '323px',
            md: '214px',
            sm: '346px',
            xxs: '252px',
          },
        };
      case 1:
        return {
          justifyContent: 'center',
          borderRadius: {
            xxxl: '30px 30px 0 0',
            xxl: '30px 30px 0 0',
            xl: '30px 30px 0 0',
            lg: '16px 16px 0 0',
            md: '14px 14px 0 0',
            sm: '24px 24px 0 0',
            xxs: '24px 24px 0 0',
          },
          height: {
            xxxl: '482px',
            xxl: '441px',
            xl: '441px',
            lg: '323px',
            md: '214px',
            sm: '346px',
            xxs: '252px',
          },
        };
      default:
        return {};
    }
  };

  return (
    <Grid container spacing={3} justifyContent="space-between">
      {items.map((item, index) => (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
          <Box
            sx={{
              backgroundColor: item.bgColor,
              color: '#0A0A14',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
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
                flexGrow: 1,
              }}
            >
              <Typography
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
                  lineHeight: '1.5',
                  height: {
                    xxxl: '50px',
                    xxl: '50px',
                    xl: '50px',
                    lg: '44px',
                    md: 'auto',
                    sm: 'auto',
                    xs: 'auto',
                    xxs: 'auto',
                  },
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                {item.description}
              </Typography>

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
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                      borderBottom: '1px solid transparent',
                      ':hover': {
                        borderBottom: '1px solid #0A0A14',
                      },
                      paddingTop: '8px',
                      paddingBottom: '3.2px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Calibre Medium',
                        color: '#0A0A14',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        verticalAlign: 'middle',
                        padding: '0',
                        margin: '0',
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
                </Box>
              </Link>
            </Box>

            <Box
              display="flex"
              justifyContent={index === 1 ? 'center' : 'flex-end'}
              sx={{
                alignSelf: 'flex-end',
                width: '100%',
                paddingLeft: {
                  xxxl: index === 0 || index === 2 || index === 3 ? '30px' : '30px',
                  xl: index === 0 || index === 2 || index === 3 ? '30px' : '30px',
                  lg: index === 0 || index === 2 || index === 3 ? '21.97px' : '21.97px',
                  md: index === 0 || index === 2 || index === 3 ? '14px' : '14px',
                  sm: index === 0 || index === 2 || index === 3 ? '24px' : '24px',
                  xxs: index === 0 || index === 2 || index === 3 ? '16px' : '16px',
                },
                paddingRight: {
                  xxxl: index === 1 ? '30px' : '0',
                  xl: index === 1 ? '30px' : '0',
                  lg: index === 1 ? '21.97px' : '0',
                  md: index === 1 ? '14px' : '0',
                  sm: index === 1 ? '24px' : '0',
                  xxs: index === 1 ? '16px' : '0',
                },
                paddingTop: {
                  xxxl: '122px',
                  xxl: '51px',
                  xl: '51px',
                  lg: '24px',
                  md: '24px',
                  sm: '27px',
                  xxs: '12px',
                },
              }}
            >
              <Box
                component="img"
                src={item.imageUrl}
                alt={item.heading}
                sx={{
                  height: getImageStyles(index).height,
                  borderRadius: getImageStyles(index).borderRadius,
                  display: 'block',
                  maxWidth: '100%',
                }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default withScrollEffect(Projects);
