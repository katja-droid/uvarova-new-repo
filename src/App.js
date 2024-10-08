import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Main from './Main';
import About from './About';
import ProfWorld from './ProfWorld/ProfWorld';
import VirtualNutritionist from './VirtualNutritionist/VirtualNutritionist';
import NotFound from './NotFound';
import NoInternet from './NoInternet';
import Contact from './Contact';
import Password from './Password';
import Layout from './Layout';  
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import PoliticalForum from './PoliticalForum/PoliticalForum';
import Metlife from './Metlife/Metlife';
import ScrollToTop from './ScrollToTop';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true'; // Directly check sessionStorage

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/password" state={{ from: location.pathname }} />
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // On component mount, check if the sessionStorage has an auth flag
  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // This login function sets the isAuthenticated state to true and stores it in sessionStorage
  const login = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true');
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <ScrollToTop/>
          <NoInternet /> {/* This component checks for internet connection */}

          <Routes>
            {/* Routes that use the Layout */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            {/* Independent Routes (outside of the Layout) */}
            <Route path="*" element={<NotFound />} />
            <Route path="/virtual-nutritionist" element={<VirtualNutritionist />} />

            {/* Protected Routes */}
            <Route
              path="/prof-world"
              element={
                <ProtectedRoute>
                  <ProfWorld/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/metlife"
              element={
                <ProtectedRoute>
                  <Metlife/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/political-forum"
              element={
                <ProtectedRoute>
                 <PoliticalForum/>
                </ProtectedRoute>
              }
            />

            {/* Password Page */}
            <Route path="/password" element={<Password login={login} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
