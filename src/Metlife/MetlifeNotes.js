import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import withScrollEffect from '../withScrollEffect.js';

const MetLifeNotes = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{pb: { xl: '80px', lg: '60px', xxs: '0' }}}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0}>
        <Grid item xl={8} lg={10} md={12} sm={12} xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: {xl: '32px', xxs: '24px'},
            }}
          >
            Notes
          </Typography>
        </Grid>
      </Grid>

      {/* Content for notes */}
      <Grid
        container
        justifyContent="center"
        sx={{ fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid item xxl={8} xl={8} lg={10} md={12} sm={12} xs={12}>
          <Box
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                paddingLeft: 0,
                '& li': {
                  display: 'flex',
                  alignItems: 'start',
                  mb: '8px', // Add 8px margin bottom for spacing between items
                },
                mt: 0
              }}
            >
              <li>
                <Typography component="span" sx={{ pl: 1 }}>
                <span style={{fontFamily: 'Calibre Medium', fontSize: '18px'}}> 1.</span> Usually transforming print to digital by replicating forms 1:1 is a suboptimal idea since digital is a very different medium: it’s dynamic, we can provide users with timely feedback, and we can guide them towards answers and solutions with our interfaces. This isn’t an exercise in responsive layouts, but really rethinking the digital forms UX.
                </Typography>
              </li>
              <li>
                <Typography component="span" sx={{ pl: 1 }}>
                <span style={{fontFamily: 'Calibre Medium', fontSize: '18px'}}> 2.</span> You can challenge absolutely everything (as long as you meet constraints and drive KPIs).
                </Typography>
              </li>
              <li>
                <Typography component="span" sx={{ pl: 1 }}>
                <span style={{fontFamily: 'Calibre Medium', fontSize: '18px'}}> 3.</span> Think of how we can avoid displaying irrelevant or inapplicable questions to customers. We need to surface the right questions and formulate them in the right way — but only if the questions actually make sense or apply to the context in which a user currently is.
                </Typography>
              </li>
              <li>
               
                <Typography component="span" sx={{ pl: 1 }}>
                <span style={{fontFamily: 'Calibre Medium', fontSize: '18px'}}> 4.</span> Think about useful features that will give users confidence about their progress and the safety of their data/input.
                </Typography>
              </li>
              <li>
                <Typography component="span" sx={{ pl: 1 }}>
                 <span style={{fontFamily: 'Calibre Medium', fontSize: '18px'}}>5.</span> Think about the layout on mobile and on desktop. Ideally, we’d love to increase completion rates on both, but it’s going to be more challenging on mobile.
                </Typography>
              </li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withScrollEffect (MetLifeNotes);
