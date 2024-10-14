import { Box, Typography } from '@mui/material'
import React from 'react'
import Slider from './Slider'
import withScrollEffect from '../withScrollEffect.js'

const FinalDesignSection = () => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column',     py: { xl: '80px', sm: '60px', xxs: '48px' }}}>
           <Typography
                  sx={{
                    textAlign: 'center',
                    fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                    fontFamily: 'Playfair Display Bold', // Consistent heading font
                    pb: '24px',
                  }}
                  variant="h3"
                >Final design</Typography>
                  <Typography
                  sx={{
                    textAlign: 'center',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontFamily: 'Calibre Regular',
                    pb: { lg: '24px', xxs: '16px' },
                    width:{
                        lg: '572px',
                        md: '568px',
                        xxxs: '100%'


                    }
                  }}
                >
                 The design hierarchy is simple: start with <b>usefulness first</b>, then  <b>usability</b>, and finally <b> desirability.  </b></Typography>
        <Slider/>
    </Box>
  )
}

export default withScrollEffect (FinalDesignSection)
