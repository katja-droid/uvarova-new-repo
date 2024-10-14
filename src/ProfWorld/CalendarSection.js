import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import img from '../assets/profcalendar.png'; // Replace with your image
import withScrollEffect from '../withScrollEffect.js';

const CalendarSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: { xl: '80px', sm: '60px', xxs: '48px' },
        }}
        id="calendar-p"
      >
        {/* Text and Image Section */}
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            width: '100%',
            py: 0, // Removed padding from container
          }}
        >
          <Grid container spacing={2} justifyContent="center" alignItems="center" xxs={12} lg={10} xl={12}  sx={{margin: '0 auto'}}>
            {/* Text Section */}
            <Grid 
              item 
              xxs={12} 
              xl={5} 
              xxl={5}
              sx={{
                order: { xxs: 1, xl: 1 }, // Text comes first on all screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xxs: 'center', lg: 'flex-start' }, // Center vertically on small screens
                alignItems: { xxs: 'center', lg: 'flex-start' }, // Center horizontally on small screens
                textAlign: 'left', // Center text on small screens, left-align on large screens
              }}
            >
              <Box>
                <Typography sx={{ fontSize: { md: '40px', sm: '34px', xxs: '25px' }, fontFamily: 'Playfair Display Bold', pb: '24px' }} variant="h3">
                Сalendar</Typography>
                <Typography sx={{ pb: { md: '24px', xxs: '16px' }, fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
                The calendar facilitates effective time management by allowing users to manage their work time, quickly navigate dates, and track days of the week.
            </Typography>
                <Typography sx={{ fontSize: '18px', lineHeight: '26px', fontFamily: 'Calibre Regular' }}>
                Users can receive notifications, share schedules with other users, add new participants, and plan meetings.
                </Typography>
               </Box>
            </Grid>
               <Grid 
              item 
              xs={12} 
              xl={7} 
              xxl={7}
              xxxl={7}
              sx={{
                order: { xxs: 2, xl: 2 }, // Image comes second on all screens
                display: 'flex',
                justifyContent: 'center',
                width:{
                }
              }}
            >
              <Box
                component="img"
                src={img}
                alt="Security Service Office"
                sx={{
                  width: '100%',
                  maxWidth: {xxxl: '673px'},
            
                  borderRadius: '8px', // Optional: add some styling to the image
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default withScrollEffect(CalendarSection);
