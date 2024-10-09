import React from 'react';
import communityEvent from './assets/community-event.png';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import certificate1 from './assets/certificate1.png';
import certificate2 from './assets/certificate2.png';
import certificate3 from './assets/certificate3.png';
import certificate4 from './assets/certificate4.png';
import presenter from './assets/presenter.png';
import youtube from './assets/youtubeImage.png';
import LinkedInReview from './LinkedInReview';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{
        my: 0,
        mx: 0,
      }}
    >
      <Grid item xxl={8} xl={8} lg={8} md={8} sm={12} xs={12} sx={{ px: 0, py: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{height: {
              xl: '343px',
              xx: '249px',

            }}}>
            <img src={communityEvent} width="100%" alt="Community Event" style={{ height: 'auto', objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: 'Calibre Semibold',
                fontSize: '20px',
                color: '#0A0A14',
                pt: { xxs: '16px', xs: '24px' },
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '20px',
                color: '#0A0A14',
                pb: { xxs: '16px', xs: '24px' },
                '& b': { fontFamily: 'Calibre Medium' },
              }}
            >
             I am Olga, a UX/UI designer with <b>4 years of experience</b>, specializing in the<b> B2B and B2C segment</b>, with a focus one<b> SaaS, websites, ERP and mobile/web application</b> creation.  </Typography>
          </Grid>
          <Grid item xs={12} sx={{ py: { xxs: '16px', xs: '24px' } }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: 'Calibre Semibold',
                fontSize: '20px',
                color: '#0A0A14',
              }}
            >
              Major Project
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '20px',
                color: '#0A0A14',
                '& b': { fontFamily: 'Calibre Medium' },
              }}
            >
              One of my major projects was the development of a <b><Link to="/prof-word" style={{color: '#0A0A14'}}>SaaS platform for automating HR processes</Link>, which reduced routine tasks by up to 70%</b>, covering all stages from defining the product’s goals to handing off the design to developers and ensuring quality.  </Typography>
          </Grid>
          <Grid item xs={12} sx={{ pt: { xxs: '16px', xs: '24px' } }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: 'Calibre Semibold',
                fontSize: '20px',
                color: '#0A0A14',
              }}
            >
              Mentorship
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '20px',
                color: '#0A0A14',
                '& b': { fontFamily: 'Calibre Medium' },
              }}
            >
             I also <b>mentored a UX/UI designer</b> for 9 months at <Link to="https://beetroot.academy/" style={{color: '#0A0A14'}}><b>Beetroot Academy</b></Link>, helping the mentee set career goals and develop an action plan to achieve them. The program taught facilitation, coaching, and goal-setting skills. </Typography>
          </Grid>
        </Grid>

        {/* Certificates section */}
        <Grid container spacing={1} justifyContent="space-between" sx={{ py: { xxs: '16px', xs: '24px' } }}>
  <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
    <Box sx={{ flexGrow: 1 }}>
      <img src={certificate1} width="100%" style={{ height: 'auto', objectFit: 'cover' }} />
    </Box>
  </Grid>
  <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
    <Box sx={{ flexGrow: 1 }}>
      <img src={certificate2} width="100%" style={{ height: 'auto', objectFit: 'cover' }} />
    </Box>
  </Grid>
  <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
    <Box sx={{ flexGrow: 1 }}>
      <img src={certificate3} width="100%" style={{ height: 'auto', objectFit: 'cover' }} />
    </Box>
  </Grid>
  <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'stretch' }}>
    <Box sx={{ flexGrow: 1 }}>
      <LinkedInReview />
    </Box>
  </Grid>
</Grid>


        {/* Self-Development Section */}
        <Grid container spacing={2} sx={{ pt: { xxs: '16px', xs: '24px' } }}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: 'Calibre Semibold',
                fontSize: '20px',
                color: '#0A0A14',
              }}
            >
              Self-Development
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: 'Calibre Regular',
                fontSize: '20px',
                color: '#0A0A14',
              }}
            >
              In addition to my professional activities, I actively strive for self-development by participating in thematic events and master classes in UX/UI design, public speaking, and English language learning. I also strive to continuously improve my skills and knowledge by publishing articles on <Link style={{color: '#0A0A14'}} to="https://medium.com/@olga.uvva/%D1%83%D1%81%D0%BF%D1%96%D1%88%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BC%D0%BE%D0%B1%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D1%85-%D0%B4%D0%BE%D0%B4%D0%B0%D1%82%D0%BA%D1%96%D0%B2-%D1%8F%D0%BA-%D1%83%D0%BD%D0%B8%D0%BA%D0%BD%D1%83%D1%82%D0%B8-%D0%BF%D0%BE%D0%BC%D0%B8%D0%BB%D0%BE%D0%BA-%D1%96-%D0%BF%D1%96%D0%B4%D0%B2%D0%B8%D1%89%D0%B8%D1%82%D0%B8-%D0%BA%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%81%D1%96%D1%8E-2f08d6aed3dd">
              Medium</Link> and completing basic <Link style={{color: '#0A0A14'}} to="https://owu.com.ua/">HTML/CSS</Link>  courses.
            </Typography>
          </Grid>
        </Grid>

        {/* Video and Image sections in the same row */}
        <Grid container spacing={2} sx={{ pt: { xxs: '16px', xs: '24px' }, pb: { xxs: '16px', xs: '24px' }, mb: { xxs: '26px', xs: '40px' } }}>
          <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} display="flex" alignItems="center">
          <Box>
          <Link to="https://www.youtube.com/watch?v=TfTJv_vHurA" style={{fontSize: '16px',
                fontFamily: 'Calibre Regular',
                color: '#646470',
                textDecoration: 'none'}}> 
          <img
              src={youtube}
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16/9',
                objectFit: 'cover',
                flexGrow: 1,
                paddingBottom: '8px'
              }}
            />
            
           
            <Typography sx={{
                fontSize: '16px',
                fontFamily: 'Calibre Regular',
                pb: '8px'}}>Beetroot Academy, the school where I studied design, asked me to provide feedback on a UI/UX design program.</Typography>
           <Typography sx={{
                fontSize: '16px',
                fontFamily: 'Calibre Regular',
                color: '#646470'}}> May 2023</Typography>
                  </Link>
            </Box>
          
          </Grid>
          <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} display="flex" alignItems="center">
            <Box>
             
            <img
              src={presenter}
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16/9',
                objectFit: 'cover',
                flexGrow: 1,
                paddingBottom: '8px'
              }}
            />
          
          <Typography sx={{
                fontSize: '16px',
                fontFamily: 'Calibre Regular',
                pb: '8px'}}>  Acted as a presenter at Offline Beetup for 150 people. Topic: «How to live and work in Ukrainian IT during the crisis?».
           </Typography>
           <Typography sx={{
                fontSize: '16px',
                fontFamily: 'Calibre Regular',
                color: '#646470'}}>July 2023</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
