import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Footer from '../Footer';
import theme from '../theme';  // Your custom theme
import ReadingProgressBar from '../ReadingProgressBar';  // Progress bar component
import cover from '../assets/nutritionist-cover.png';  // Your cover image

import ClientOverview from './ClientOverview';  // Subcomponent
import TimelineAndContribution from './TimelineAndContribution';  // Subcomponent
import FullWidthSection from './FullWidthSection';  // Subcomponent
import NavbarProject from '../NavbarProject';
import NutritionistProblem from './NutritionistProblem';
import NutritionistUsers from './NutritionistUsers';  // Importing the new component
import NutritionistGoal from './NutritionistGoal';
import NutritionistConstraints from './NutritionistConstraints';
import NutritionistKPIs from './NutritionistKPIs';
import NutritionistAnalytics from './NutritionistAnalytics';
import SolutionSection from './SolutionSection';
import LoginSection from './LoginSection';
import PersonalInformationSection from './PersonalInformationSection';
import QuestionsSection from './QuestionsSection';
import ProfileSection from './ProfileSection';
import AnalysesSection from './AnalysesSection';
import SettingsSection from './SettingsSection';
import GoalSection from './GoalSection';
import ActivitySection from './ActivitySection';
import CalendarSection from './CalendarSection';
import DesignSystemSection from './DesignSystemSection';
import { CacheProvider } from '@emotion/react';
import TestingColorSection from './TestingColorSection';
import AccessibilitySection from './AccessibilitySection';
import MoreSection from './MoreSection';
import FixedHeader from '../FixedHeader';
import FixedNavbar from '../FixedNavbar';

const contribution = [
  { id: 1, name: 'User Research', color: '#FFE9E3' },
  { id: 2, name: 'Competitive App Analysis', color: '#E4DBEA' },
  { id: 3, name: 'User Surveys', color: '#E7EDFF' },
  { id: 4, name: 'Prototype Testing', color: '#FAF6C8' },
  { id: 5, name: 'User Experience Analysis', color: '#E7EDFF' },
  { id: 6, name: 'Research on User Needs and Preferences', color: '#E4DBEA' },
  { id: 7, name: 'Evaluation of Interface Accessibility and Usability', color: '#FFE9E3' },
  { id: 8, name: 'Studying Modern Trends in Health and Fitness', color: '#FAF6C8' },
];

const tools = [
  { id: 1, name: 'Figma', href: '#', color: '#FFE9E3' },
  { id: 2, name: 'OptimalSort', href: '#', color: '#E4DBEA' },
  { id: 3, name: 'System Usability Score', href: '#', color: '#E7EDFF' },
  { id: 4, name: 'Human Interface Guidelines', href: '#', color: '#FAF6C8' },
  { id: 5, name: 'Material Design', href: '#', color: '#E7EDFF' },
];
const sections = [
  { id: 'problem', label: 'Problem' },
  { id: 'users', label: 'Users' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'goal', label: 'Goal' },
  { id: 'constraints', label: "Project's Constraints" },
  { id: 'designKPIs', label: 'Design KPIs' },
];
const sections_ = [
  { id: 'solution-v', label: 'Solution' },
  { id: 'login-v', label: 'Log In' },
  { id: 'profile-v', label: 'Profile' },
  { id: 'analyses-v', label: 'Analyses' },
  { id: 'settings-v', label: 'Settings' },
  { id: 'goal-v', label: 'Goal' },
  { id: 'calendar-v', label: 'Calendar' },
];


const VirtualNutritionist = () => {
  const [activeSection, setActiveSection] = useState('problem'); // Default section
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);  // Navbar initially hidden
  const [activeLink, setActiveLink] = useState('');
// Function to handle section selection
const handleSelectSection = (section) => {
  setActiveSection(section);
};
const handleSelectSection_ = (sectionId) => {
  setActiveLink(sectionId);
};

const navbarRef = useRef(null);
const calendarRef = useRef(null);
const mainLayoutRef = useRef(null);  // Ref for MainLayout section 
useEffect(() => {
  const handleScroll = () => {
    const mainLayoutTop = mainLayoutRef.current?.offsetTop || 0; 
    const calendarTop = calendarRef.current?.offsetTop || 0;  // Use top of CalendarSection

    const scrollY = window.scrollY - 73;  // Adjust scrollY by 73px

    // Show fixed navbar if adjusted scrollY is between the top of MainLayout and the top of CalendarSection
    if (scrollY >= mainLayoutTop && scrollY < calendarTop) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }
  };

  // Call handleScroll immediately after component mounts to ensure correct initial state
  handleScroll();

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Cleanup scroll event listener on component unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


// Dynamic rendering of sections based on selected section
const renderSection = () => {
  switch (activeSection) {
    case 'problem':
      return <NutritionistProblem />;
    case 'users':
      return <NutritionistUsers />;
    case 'analytics':
      return <NutritionistAnalytics />;
    case 'goal':
      return <NutritionistGoal />;
    case 'constraints':
      return <NutritionistConstraints />;
    case 'designKPIs':
      return <NutritionistKPIs />;
    default:
      return <NutritionistProblem />;
  }
};

  return (
    <ThemeProvider theme={theme}>
      <ReadingProgressBar />  {/* Reading Progress Bar */}
      <Container disableGutters maxWidth={false} sx={{  color: '#0A0A14', backgroundColor: '#E5F9EC' }}>
        {/* Navbar */}
        <Grid container>
          <Grid item xxs={12}>
            <Navbar />
          </Grid>
        </Grid>

        {/* Main content */}
        <Grid container direction="column">
          <Grid item xs={12}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography variant='h1' sx={{ textAlign: 'center', fontSize: {lg: '64px', md: '54px', xxs: '44px'}, fontFamily: 'DMSerifText-Regular', fontWeight: 'normal', pb: '30px', pt: {lg: '66px', md: '64px', xxs: '24px' } }}>Virtual Nutritionist</Typography>
              <Typography sx={{ textAlign: 'center', fontSize: {md: '20px', xxs: '18px'}, fontFamily: 'Calibre Medium', pb: {lg: '91px', md: '55px', xxs: '76px' }, width: {md: '100%', sm: '182px', xxs: '184px'} }}>
                Health monitoring apps for iOS platform
              </Typography>
              
            </Box>
          </Grid>
          <Grid container spacing={2} justifyContent="center" sx={{ py: 0, my: 0 }}>
          <Grid item xs={12} md={8}  xxs={12}  sx={{  py: 0, my: 0}}>
            <Box sx={{
      width: { xs: '100%', lg: '100%', md: '348px', py: 0, my: 0 } // For example, take full width on small screens and 80% on large screens
    }}>
  <img
    src={cover}
    alt="Virtual Nutritionist Cover"
    style={{ width: '100%' }} // Ensure image takes 100% width of the grid item
  />
  </Box>
</Grid>
</Grid>
</Grid>
</Container>
<Container disableGutters maxWidth={false} sx={{ minHeight: '100vh', color: '#0A0A14', pb: {md: '80px', xxs: '16px'} }}>
<Grid container spacing={2} justifyContent="space-between">
  {/* First Column - Takes full width on small screens, and 5 out of 12 columns on medium screens and up */}
  <Grid item xs={12} lg={5}>
    <ClientOverview />
  </Grid>

  {/* Spacer Column - Empty column that only appears after the md breakpoint */}
  <Grid item xs={0} lg={1} />

  {/* Second Column - Takes full width on small screens, and 5 out of 12 columns on medium screens and up */}
  <Grid item xs={12} lg={5}>
    <TimelineAndContribution contribution={contribution} tools={tools} />
  </Grid>
</Grid>

    
      </Container>

      {/* Full-width section */}
      <FullWidthSection />

      {/* Centered NavbarProject */}
       {/* Navbar Project */}
     

{/* Render Selected Section */}
<Grid container justifyContent="center" spacing={0} sx={{  py: {md: '80px', xxs: '16px'}  }}>
<Grid item xxs={12} lg={10} >
<NavbarProject activeLink={activeSection} sections={sections} onSelectSection={handleSelectSection} />
      {renderSection()}
      </Grid>
      </Grid>

      {/* Fixed Navbar */}
      <div ref={navbarRef} style={{
  position: 'fixed',
  top: '0',
  display: isNavbarVisible ? 'block' : 'none',  // Show or hide based on isNavbarVisible
  zIndex: 1000,
  width: '100%',
}}>
  <FixedNavbar sections={sections_} onSelectSection={handleSelectSection_} />
</div> 
<div ref={mainLayoutRef}>
        <SolutionSection />
        </div>
        <LoginSection/>
        <PersonalInformationSection/>
        <QuestionsSection/>
        <ProfileSection/>
       
        <AnalysesSection/>
        <Grid container justifyContent="center" spacing={0} sx={{  py: {md: '80px', xxs: '16px'}  }}>
<Grid item xxs={12} lg={10} >
        <SettingsSection/>
        </Grid>
        </Grid>
        <GoalSection/>
        <ActivitySection/>
        <div ref={calendarRef}>
        <CalendarSection /></div>
        <DesignSystemSection/>
        <TestingColorSection/>
        <AccessibilitySection/>
  
       
        <MoreSection/>
       
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
};

export default VirtualNutritionist;
