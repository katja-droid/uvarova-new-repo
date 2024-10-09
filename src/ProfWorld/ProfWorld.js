import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Footer from '../Footer';
import theme from '../theme';  // Your custom theme
import ReadingProgressBar from '../ReadingProgressBar';  // Progress bar component
import FullWidthSection from '../VirtualNutritionist/FullWidthSection';
import TimelineAndContribution from '../VirtualNutritionist/TimelineAndContribution';
import ClientOverview from '../VirtualNutritionist/ClientOverview';
import CoverSection from './CoverSection';
import ProfClientOverview from './ProfClientOverview';
import ProfTimelineAndContribution from './ProfTimelineAndContribution';
import Slider from './Slider';
import ProfFullWidthSection from './ProfFullWidthSection';
import FinalDesignSection from './FinalDesignSection';
import NavbarProject from '../NavbarProject';
import ProfWorldProblem from './ProfWorldProblem';
import ProfWorldUsers from './ProfWorldUsers';
import ProfWorldAnalytics from './ProfWorldAnalytics';
import ProfWorldGoal from './ProfWorldGoal';
import ProfWorldConstraints from './ProfWorldConstraints';
import ProfWorldKPIs from './ProfWorldKPIs';
import BeginSection from './BeginSection';
import CompanyRegistrationSection from './CompanyRegistrationSection';
import SecurityServiceSection from './SecurityServiceSection';
import CompanyRegistrationAfterSection from './CompanyRegistrationAfterSection';
import MainLayout from './MainLayout';
import TestingSection from './TestingSection';
import EvaliuationSection from './EvaliuationSection';
import RecruitmentSelectionSection from './RecruitmentSelectionSection';
import CandidateCardSection from './CandidateCardSection';
import CorporateCultureSection from './CorporateCultureSection';
import CorporateEventsSection from './CorporateEventsSection';
import CompanyStandardsSection from './CompanyStandardsSection';
import StaffTrainingSection from './StaffTrainingSection';
import HRAnalyticsSection from './HRAnalyticsSection';
import SurveysSection from './SurveysSection';
import CompanyProfileSection from './CompanyProfileSection';
import CalendarSection from './CalendarSection';
import ReflectionSection from './ReflectionSection';
import ResultsSection from './ResultsSection';
import DesignSystemSectionProf from './DesignSystemSectionProf';
import MoreSectionProf from './MoreSectionProf';
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
  { id: 1, name: 'UserInterviews', href: 'https://www.userinterviews.com/', color: '#FFE9E3' },
  { id: 2, name: 'Carbon Design System', href: 'https://carbondesignsystem.com/', color: '#E4DBEA' },
  { id: 3, name: 'PoC', href: 'https://formlabs.com/asia/blog/proof-of-concept-poc/', color: '#E7EDFF' },
  { id: 4, name: 'NPS', href: 'https://www.surveysensum.com/blog/good-nps-score-for-saas', color: '#FAF6C8' },
  { id: 5, name: 'Excel', href: '#', color: '#E7EDFF' },
  { id: 5, name: 'Figma', href: '#', color: '#E7EDFF' },
  { id: 5, name: 'Optimal Sort', href: 'https://www.card-sorting.com/optimalsort/', color: '#E7EDFF' },
  { id: 5, name: 'Material System Guidelines', href: 'https://m2.material.io/design', color: '#E7EDFF' },
  { id: 5, name: 'Google Forms', href: '#', color: '#E7EDFF' },
  { id: 5, name: 'Core Web Vitals', href: 'https://speedvitals.com/', color: '#E7EDFF' },
  
  { id: 5, name: 'System Usability Score', href: 'https://stuart-cunningham.github.io/sus/', color: '#E7EDFF' },
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
  { id: 'main-p', label: 'Main' },
  { id: 'testing-p', label: 'Testing' },
  { id: 'recruitment-p', label: 'Recruitment' },
  { id: 'corporate-culture-p', label: 'Corporate Culture' },
  { id: 'staff-training-p', label: 'Staff Training' },
  { id: 'hr-analytics-p', label: 'HR Analytics' },
  { id: 'surveys-p', label: 'Surveys' },
  { id: 'company-profile-p', label: 'Company Profile' },
  { id: 'calendar-p', label: 'Calendar' },
];



const ProfWorld = () => {
  const [activeSection, setActiveSection] = useState('problem'); // Default section
  const [activeLink, setActiveLink] = useState('');
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);  // Navbar initially hidden
  
  const navbarRef = useRef(null);
  const calendarRef = useRef(null);
  const mainLayoutRef = useRef(null);  // Ref for MainLayout section

  // Function to handle section selection
  const handleSelectSection = (section) => {
    setActiveSection(section);
  };

  const handleSelectSection_ = (sectionId) => {
    setActiveLink(sectionId);
  };

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
        return <ProfWorldProblem />;
      case 'users':
        return <ProfWorldUsers />;
      case 'analytics':
        return <ProfWorldAnalytics />;
      case 'goal':
        return <ProfWorldGoal />;
      case 'constraints':
        return <ProfWorldConstraints />;
      case 'designKPIs':
        return <ProfWorldKPIs />;
      default:
        return <ProfWorldProblem />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ReadingProgressBar />  {/* Reading Progress Bar */}
      <Container disableGutters maxWidth={false} sx={{ color: '#0A0A14', backgroundColor: '#FAF6C8' }}>
        {/* Navbar */}
        <Grid container>
          <Grid item xxs={12}>
            <Navbar />
          </Grid>
        </Grid>

        {/* Main content */}
        <Grid container direction="column" sx={{ py: 0 }}>
          <Grid item xs={12} sx={{ padding: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
              <Typography variant='h1' sx={{ textAlign: 'center', fontSize: { lg: '64px', md: '54px', xxs: '44px' }, fontFamily: 'DMSerifText-Regular', fontWeight: 'normal', pb: '30px', pt: { lg: '66px', md: '64px', xxs: '24px' } }}>
                Prof.world
              </Typography>
              <Typography sx={{
                textAlign: 'center',
                fontSize: '20px',
                lineHeight: '28px',
                fontFamily: 'Calibre Medium',
                width: {
                  xl: '574px',
                  lg: '563px',
                  md: '100%',
                  sm: '336px',
                  xs: '328px',
                },
                pb: '28px',
              }}>
                SaaS: automated professional recruiting, training and payroll system for B2B segment
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <CoverSection />

      <Container disableGutters maxWidth={false} sx={{ color: '#0A0A14' }}>
        <Grid container spacing={2} justifyContent="space-between">
          {/* First Column */}
          <Grid item xs={12} lg={5}>
            <ProfClientOverview />
          </Grid>

          {/* Spacer Column */}
          <Grid item xs={0} lg={1} />

          {/* Second Column */}
          <Grid item xs={12} lg={5}>
            <ProfTimelineAndContribution contribution={contribution} tools={tools} />
          </Grid>
        </Grid>
      </Container>

      <Container disableGutters maxWidth={false} sx={{ color: '#0A0A14' }}>
        <FinalDesignSection />
      </Container>

      {/* Full-width section */}
      <ProfFullWidthSection />
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
        <Grid item xxs={12} lg={10} >
          <NavbarProject activeLink={activeSection} sections={sections} onSelectSection={handleSelectSection}  />
          {renderSection()}
        </Grid>
      </Grid>
      <Container disableGutters maxWidth={false} sx={{ minHeight: '100vh', color: '#0A0A14' }}>
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
      <Grid item  xxs={12} lg={10}>
<BeginSection/>
</Grid>
</Grid>
</Container>
      <CompanyRegistrationSection />
      <SecurityServiceSection />
      <CompanyRegistrationAfterSection />

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
        <Box sx={{height: {
            xxs: '24px',
            xs: '48px',
            sm: '60px',
            md: '84px',
            lg: '84px',
            xl: '84px',
            xxxl: '97px',
          }}}></Box>
      </div>
      {/* MainLayout Section */}
        <MainLayout />

      <TestingSection />
      <EvaliuationSection />
      <RecruitmentSelectionSection />
      <CandidateCardSection />
      <CorporateCultureSection />
      <CompanyStandardsSection />
      <CorporateEventsSection />
      <StaffTrainingSection />
      <HRAnalyticsSection />
      <SurveysSection />
      <CompanyProfileSection />

      {/* Calendar Section */}
     
        <CalendarSection />
    
 <div ref={calendarRef}></div>
      <ReflectionSection />
      <ResultsSection />
      <DesignSystemSectionProf />
      <MoreSectionProf />
      
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
};

export default ProfWorld;
