import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, Container, Grid, Box, InputAdornment, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';
import theme from './theme';  // Your custom theme
import image from './assets/protected.svg';
import arrow from './assets/Arrow.svg';

const Password = ({ login }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false); // Track password error state
  const navigate = useNavigate();
  const location = useLocation();
  const correctPassword = process.env.REACT_APP_PASSWORD; // Environment variable

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === correctPassword) {
      login(); // Set authentication state
      const redirectTo = location.state?.from || '/'; // Redirect to the intended page or home
      navigate(redirectTo); // Redirect after successful login
    } else {
      setError(true); // Show error message when password is incorrect
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth={false} sx={{ minHeight: '100vh' }}>
        {/* Navbar */}
        <Grid container>
          <Grid item xxs={12}>
            <Navbar />
          </Grid>
        </Grid>
        <Box sx={{ py: '104px' }}>
          <Grid container justifyContent='center'>
            <Grid item xxs={12} md={12} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Box sx={{ pb: { xxs: '32px', md: '48px' }}}>
                <img src={image} width="39px" alt="Protected Content" />
              </Box>
              <Box sx={{width: {
                    md: '100%',
                    sm: '250px',
                    xxs: '240px'
                   
                  }}} >
              <Typography 
                variant='h2' 
                sx={{ 
                  fontSize: { xxs: '44px', sm: '48px' }, 
                  fontFamily: 'Calibre Regular', 
                  width: '100%',
                  textAlign: 'center', 
                  pb: '8px'
                }}
              >
                This content is protected
              </Typography></Box>
              <Typography sx={{ 
                fontSize: '20px', 
                fontFamily: 'Calibre Regular', 
                pb: '32px',
                color: '#939393'
              }}>
                To view, please enter the password
              </Typography>
            </Grid>
          </Grid>

          {/* Centered Input Field */}
          <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} justifyContent="center">
            <Grid item xxs={12} sm={8} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                <TextField
                  variant="outlined"
                  placeholder="Enter password"
                  type="password"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setError(false); // Reset error when user starts typing again
                  }}
                  sx={{
                    width: { lg: '474px', md: '374px', sm: '370px', xs: '100%' },  // 100% width on small screens
                    maxWidth: '474px',  // Add max-width to control larger screens
                    boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.05)', // Default shadow
                    '&:hover': {
                      boxShadow: '0px 15px 20px rgba(0, 0, 0, 0.05)', // Hover shadow
                    },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px',
                      border: 'none',  // Remove border initially
                      '&.Mui-focused': {
                        boxShadow: '0px 15px 20px rgba(0, 0, 0, 0.05)', // Focused shadow
                      },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none', // No border by default
                    },
                    '& .MuiOutlinedInput-input': {
                      padding: '14px 14px 16px 8px',
                      fontSize: '17px',  // Font size
                      '&::placeholder': {
                        color: '#D9D9D9',  // Placeholder color
                        opacity: 1, // Ensures the color is not reduced by default browser styles
                      },
                      color: '#0A0A14',  // Color for password dots
                    },
                    '& .MuiInputBase-input': {
                      outline: 'none',
                      boxShadow: 'none',
                      '&::before': {
                        content: "''",
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#0A0A14',
                        borderRadius: '50%',
                        marginRight: '2px',
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <button
                          type="submit"
                          style={{
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            padding: 0,
                          }}
                        >
                          <img src={arrow} alt="Submit" style={{ width: "58px", height: "20px" }} />
                        </button>
                      </InputAdornment>
                    ),
                  }}
                />

             {/* Error message below the input */}
             {error && (
                
                <Box sx={{
                  width: { lg: '474px', md: '374px', sm: '370px', xs: '100%' }, py: '8px', letterSpacing: '1.5px'}}>
                  <Typography sx={{ color: '#F14C4C', fontSize: '15px', textAlign: 'left' }}>
                    Incorrect password
                  </Typography>
                  </Box>
                )}
              </form>
            </Grid>
          </Grid>
             
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Password;
