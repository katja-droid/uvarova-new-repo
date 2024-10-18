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
import withScrollEffect from '../withScrollEffect.js';
const contribution = [
  { id: 1, name: 'User Research', color: '#FFE9E3' },
  { id: 2, name: 'In-depth Interviews', color: '#E4DBEA' },
  { id: 3, name: 'Sketching', color: '#E7EDFF' },
  { id: 4, name: 'Prototyping', color: '#FAF6C8' },
  { id: 5, name: 'Usability Testing', color: '#E7EDFF' },
  { id: 6, name: 'MVP', color: '#E4DBEA' },
  { id: 7, name: 'UX Writing', color: '#FFE9E3' },
  { id: 8, name: 'Dashboards', color: '#FAF6C8' },
  { id: 9, name: 'Compiling Specifications', color: '#E4DBEA' },
  { id: 10, name: 'Search Design', color: '#E7EDFF' },
  { id: 11, name: 'Web and Mobile Design', color: '#FAF6C8' },
  { id: 12, name: 'Onboarding', color: '#FFE9E3' },
  { id: 13, name: 'Design System', color: '#E7EDFF' }
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
  const [isNavbarProjectVisible, setIsNavbarProjectVisibleVisible] = useState(false);  // Navbar initially hidden
  const navbarRef = useRef(null);
  const calendarRef = useRef(null);
  const navbarProjectRef = useRef(null);
  const navbarProjectStartRef = useRef(null);
  const navbarProjectEndRef = useRef(null);
  const mainLayoutRef = useRef(null);  // Ref for MainLayout section
  const [activeSection_, setActiveSection_] = useState('problem'); // Default section
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
  useEffect(() => {
    const handleScrollProject = () => {
      // Get the positions of the start and end of the navbar project section
      const navbarProjectStartTop = navbarProjectStartRef.current?.offsetTop || 0;
      const navbarProjectEndTop = navbarProjectEndRef.current?.offsetTop || document.body.scrollHeight; // Fallback to end of document
      
      const scrollY = window.scrollY; // Current scroll position
      
      // Display NavbarProject if within the correct scroll range
      if (scrollY >= navbarProjectStartTop && scrollY < navbarProjectEndTop) {
        setIsNavbarProjectVisibleVisible(true);
      } else {
        setIsNavbarProjectVisibleVisible(false);
      }
  
      // Highlight active section based on scroll position
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
  
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };
  
    // Add the scroll event listener
    window.addEventListener('scroll', handleScrollProject);
  
    // Cleanup the scroll listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScrollProject);
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
        <Grid container justifyContent="space-between" sx={{pb: { xl: '80px', sm: '60px', xxs: '48px' }}}>
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
          <Grid item xs={0} lg={1} />
        </Grid>
        
          {/* Spacer Column */}
       
      </Container>

      <Container  disableGutters maxWidth={false} sx={{ color: '#0A0A14' }}>
        <FinalDesignSection />
      </Container>
 
      {/* Full-width section */}
      <ProfFullWidthSection />
      {activeSection !== "constraints" && activeSection !== "analytics" ? (
  <>
  <div ref={navbarProjectStartRef} style={{
  whiteSpace: 'nowrap',
  overflowX: 'auto', // CSS 'overflow-x: auto;'
  scrollbarWidth: 'none', // CSS 'scrollbar-width: none;'
  msOverflowStyle: 'none', // CSS '-ms-overflow-style: none;'
  left: 0
}}>
  <NavbarProject activeLink={activeSection} sections={sections} onSelectSection={handleSelectSection} />
  </div>
    <Grid container justifyContent="center" spacing={0}>
    <Grid container justifyContent="center" spacing={0} >
    <div
    ref={navbarProjectRef}
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      display: isNavbarProjectVisible ? 'block' : 'none',
      zIndex: 1000,
      width: '100vw', // Use viewport width
      overflowX: 'auto', // Enable horizontal scrolling
      whiteSpace: 'nowrap', // Prevent wrapping, ensuring items flow horizontally
      scrollbarWidth: 'none', // Hide scrollbar in Firefox
      msOverflowStyle: 'none', // Hide scrollbar in IE/Edge
      scrollBehavior: 'smooth', // Smooth scrolling
    }}
  >
    <Grid item xxs={12} justifyContent="center" >
        <NavbarProject activeLink={activeSection} sections={sections} onSelectSection={handleSelectSection} />
        </Grid>
        </div>
       
        {/* Apply scroll effect to the rendered section */}
        {withScrollEffect(() => renderSection())()}
       
      </Grid>
      
    </Grid>
    <div ref={navbarProjectEndRef} style={{height: '1px'}}></div>
  </>
) : (
  <>
  <div ref={navbarProjectStartRef} style={{


}}>
  <NavbarProject activeLink={activeSection} sections={sections} onSelectSection={handleSelectSection} />
  </div>
    <Grid container justifyContent="center" spacing={0} >
    
      <Grid container justifyContent="center" spacing={0} >
      <div ref={navbarProjectRef} style={{
  position: 'fixed',
  top: '0',
  left: '0', // Ensure it's positioned at the top-left of the screen
  display: isNavbarProjectVisible ? 'block' : 'none',  // Toggle visibility
  zIndex: 1000,
  width: '100%',
  overflow: 'auto',


}}>
        <Grid item xxs={12} >
          <NavbarProject activeLink={activeSection} sections={sections} onSelectSection={handleSelectSection} />
        </Grid>
        </div>
      </Grid>
      {/* Apply scroll effect to the rendered section */}
      {withScrollEffect(() => renderSection())()}
      <div ref={navbarProjectEndRef} style={{height: '1px'}}></div>
    </Grid>
   
  </>
)}
  <div ref={navbarProjectEndRef} >
      <Container disableGutters maxWidth={false} sx={{  color: '#0A0A14' }}>
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
      <Grid item  xxs={12} lg={10}>
<BeginSection/>
</Grid>
</Grid>
</Container></div>
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
        <FixedNavbar sections={sections_} onSelectSection_={handleSelectSection_} activeSection_={activeSection_} />
      </div>
      <div ref={mainLayoutRef}>
      <MainLayout />
      </div>
      {/* MainLayout Section */}
       

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
