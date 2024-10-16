import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import email from './assets/contact-email.svg';
import linkedin from './assets/contact-linkedin.svg';
import telegram from './assets/contact-telegram.svg';
import facebook from './assets/contact-facebook.svg';
import withScrollEffect from './withScrollEffect.js';

const Contact = () => {
  // Array of icon image URLs and corresponding links
  const icons = [
    { imgSrc: email, alt: 'Email', link: 'mailto:olga.uvva@gmail.com' },
    { imgSrc: linkedin, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/olga-uvarova/' },
    { imgSrc: telegram, alt: 'Telegram', link: 'https://t.me/olgauvva' },
    { imgSrc: facebook, alt: 'Facebook', link: 'https://www.facebook.com/Olga.uvva' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#0A0A14',
        paddingTop: '104px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontSize: { xs: '44px', sm: '48px' },
            fontFamily: 'Calibre Regular',
            lineHeight: '32px',
            color: '#0A0A14',
            padding: 0,
            margin: 0,
          }}
        >
          Let's Connect
        </Typography>
        <Typography
          className='contactText'
          variant="body1"
          component="p"
          sx={{
            fontSize: '20px',
            textAlign: 'center',
            fontFamily: 'Calibre Regular',
            color: '#939393',
            padding: 0,
            margin: 0,
            width: {
              lg: '100%',
              md: '66.67%',
              xxs: '100%',
            },
          }}
        >
          Please feel free to reach out to me for collaboration and friendly greetings.
        </Typography>
      
        <Grid
          container
          justifyContent={{ lg: 'space-between', xs: 'center' }} // Space between for lg, centered for others
          spacing={2}
          sx={{ marginTop: '16px' }}
          columns={{ xxs: 4, xs: 4, sm: 8, md: 12, lg: 12, xl: 8, xxl: 8 }}
        >
          {icons.map((item, index) => (
            <Grid
              item
              key={index}
              xxs={2} // Each icon takes 1/2 (50%) of width for xxs (2 columns out of 4)
              xs={2} // Takes 1/2 (50%) of the width for xs and below
              sm={4} // Takes 1/2 (50%) of the width for sm
              md={5} // Takes 5 columns out of 12 for md
              lg={2} // Takes 2 columns out of 12 for lg
              xl={2} // Takes 2 columns out of 8 for xl
              xxl={2} // Takes 2 columns out of 8 for xxl
              display="flex"
              justifyContent="center" // Center icons in their grid cells
              minWidth={{
                xxs: '156px',
                xs: '156px',
                sm: '175px',
                md: '175px',
                lg: '175px', // Ensure consistent width for lg
                xl: '175px',
                xxl: '175px',
              }}
            >
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src={item.imgSrc}
                  alt={item.alt}
                  className='contactSocial'
                  sx={{
                    width: {
                      xxs: '156px',
                      xs: '156px',
                      sm: '175px',
                      md: '175px',
                      lg: '175px', // Keep width consistent for lg
                      xl: '175px',
                      xxl: '175px',
                    },
                    height: {
                      xxs: '160px',
                      xs: '160px',
                      sm: '160px',
                      md: '160px',
                      lg: '160px', // Keep height consistent for lg
                      xl: '160px',
                      xxl: '160px',
                    },
                  }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default withScrollEffect(Contact);
