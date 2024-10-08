import React from 'react';
import communityEvent from './assets/community-event.png';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import certificate1 from './assets/certificate1.png';
import certificate2 from './assets/certificate2.png';
import certificate3 from './assets/certificate3.png';
import certificate4 from './assets/certificate4.png';
import presenter from './assets/presenter.png';

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
            <img src={communityEvent} width="100%" alt="Community Event" style={{ height: 'auto' }} />
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
              I am Olga, a UX/UI designer with 4 years of experience, specializing in the B2B and B2C segment, with a focus on SaaS, websites, ERP, and mobile/web application creation.
            </Typography>
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
              I am Olga, a UX/UI designer with 4 years of experience, specializing in the B2B and B2C segment, with a focus on SaaS, websites, ERP, and mobile/web application creation.
            </Typography>
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
              I am Olga, a UX/UI designer with 4 years of experience, specializing in the B2B and B2C segment, with a focus on SaaS, websites, ERP, and mobile/web application creation.
            </Typography>
          </Grid>
        </Grid>

        {/* Certificates section */}
        <Grid container spacing={2} justifyContent="space-between" sx={{ py: { xxs: '16px', xs: '24px' } }}>
          <Grid item xxl={6} xl={4} lg={4} md={4} sm={12} xs={12}>
            <img src={certificate1} width="100%" style={{ height: 'auto', objectFit: 'cover' }} />
          </Grid>
          <Grid item xxl={6} xl={4} lg={4} md={4} sm={12} xs={12}>
            <img src={certificate2} width="100%" style={{ height: 'auto', objectFit: 'cover' }} />
          </Grid>
          <Grid item xxl={6} xl={4} lg={4} md={4} sm={12} xs={12}>
            <img src={certificate3} width="100%" style={{ height: 'auto', objectFit: 'cover' }} />
          </Grid>
          <Grid item xxl={6} xl={4} lg={4} md={4} sm={12} xs={12}>
            <img src={certificate4} width="100%" style={{ height: 'auto', objectFit: 'cover' }} />
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
                '& b': { fontFamily: 'Calibre Medium' },
              }}
            >
              In addition to my professional activities, I actively strive for self-development by participating in thematic events and master classes in UX/UI design, public speaking, and English language learning. I also strive to continuously improve my skills and knowledge by publishing articles on Medium and completing basic HTML/CSS courses.
            </Typography>
          </Grid>
        </Grid>

        {/* Video and Image sections in the same row */}
        <Grid container spacing={2} sx={{ pt: { xxs: '16px', xs: '24px' }, pb: { xxs: '16px', xs: '24px' }, mb: { xxs: '26px', xs: '40px' } }}>
          <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} display="flex" alignItems="center">
            <iframe
              width="100%"
              height="auto"
              style={{ aspectRatio: '16/9', flexGrow: 1 }}
              src="https://www.youtube.com/embed/TfTJv_vHurA?si=83lK2nd067vfq2RX"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </Grid>
          <Grid item xxl={6} xl={4} lg={4} md={6} sm={12} xs={12} display="flex" alignItems="center">
            <img
              src={presenter}
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16/9',
                objectFit: 'cover',
                flexGrow: 1,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
