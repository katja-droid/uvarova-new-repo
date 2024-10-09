import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Footer from '../Footer';
import theme from '../theme';  // Your custom theme
import ReadingProgressBar from '../ReadingProgressBar';  // Progress bar component
import cover from '../assets/metlife.png';  // Your cover image

import NavbarProject from '../NavbarProject';

import CoverSectionMetLife from './CoverSectionMetLife';
import ClientOverviewMetlife from './ClientOverviewMetlife';
import TimelineAndContributionMetlife from './TimelineAndContributionMetlife';
import FullWidthSectionMetlife from './FullWidthSectionMetlife';
import MetLifeProblem from './MetLifeProblem';
import MetLifeUsers from './MetLifeUsers';
import MetGeneralImpression from './MetGeneralImpression';
import MetlifeGoal from './MetlifeGoal';
import MetLifeConstraints from './MetLifeConstraints';
import MetLifeKPIs from './MetlifeKPIs';
import MetLifeNotes from './MetlifeNotes';
import SliderDiv from './SliderDiv';
import BeforeAfterSmaller from './BeforeAfterSmaller';
import MetLifeDesignSprints from './MetLifeDesignSprints';
import MetFinalDesign from './MetFinalDesign';
import MetLifeSummary from './MetLifeSummary';
import ThreeColSection from './ThreeColSection';
import MetUsabilityTesting from './MetUsabilityTesting';
import MetDesignSystem from './MetDesignSystem';
import MoreSectionMet from './MoreSectionMet';
import TestingSection from './TestingSection';
import FixedNavbar from '../FixedNavbar';
import before1 from '../assets/before1.png'; 
import after1 from '../assets/after1.png'; 
import before2 from '../assets/before2.png'; 
import after2 from '../assets/after2.png'; 
import before3 from '../assets/before3.png'; 
import after3 from '../assets/after3.png'; 
import BeforeAfterLayout from './BeforeAfterLayout';
import SliderDivWide from './SliderDivWide';

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

// Tools data with colors
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
  { id: 'generalImpression', label: 'General Impression' },
  { id: 'goal', label: 'Goal' },
  { id: 'constraints', label: "Project's Constraints" },
  { id: 'designKPIs', label: 'Design KPIs' },
  { id: 'notes', label: 'Notes' },
];
const sections_ = [
  { id: 'design-sprints-met', label: 'Design Sprints' },
  { id: 'final-designs-met', label: 'Final Designs' },
  { id: 'summary-met', label: 'Summary' },
  { id: 'testing-summary-met', label: 'Testing Summary' },
  { id: 'usability-testing', label: 'Usability Testing' },
];
const slides = [
  <BeforeAfterLayout beforeImage={before1} afterImage={after1} />,
  <BeforeAfterLayout beforeImage={before2} afterImage={after2} />,
  <BeforeAfterLayout beforeImage={before3} afterImage={after3} />,
  // Add more BeforeAfterLayout components here if needed
];
const Metlife = () => {
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
  
      const scrollY = window.scrollY;  // Adjust scrollY by 73px
  
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
 
const renderSection = () => {
  switch (activeSection) {
    case 'problem':
      return <MetLifeProblem />;
    case 'users':
      return <MetLifeUsers />;
    case 'generalImpression':
      return <MetGeneralImpression/>;
    case 'goal':
      return <MetlifeGoal />;
    case 'constraints':
      return <MetLifeConstraints />;
    case 'designKPIs':
      return <MetLifeKPIs />;
    case 'notes':
      return <MetLifeNotes />;
    default:
      return <MetLifeProblem />;
  }
};

  return (
    <ThemeProvider theme={theme}>
      <ReadingProgressBar />  {/* Reading Progress Bar */}
      <Container disableGutters maxWidth={false} sx={{ color: '#0A0A14', backgroundColor: '#E7EDFF' }}>
        {/* Navbar */}
        <Grid container>
          <Grid item xxs={12}>
            <Navbar />
          </Grid>
        </Grid>

        {/* Main content */}
        <Grid container direction="column" sx={{ py: 2 }}>
          <Grid item xs={12}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant='h1' sx={{ textAlign: 'center', fontSize: {lg: '64px', md: '54px', xxs: '44px'}, fontFamily: 'DMSerifText-Regular', fontWeight: 'normal', pb: '30px', pt: {lg: '66px', md: '64px', xxs: '24px' } }}>Metlife</Typography>
            <Typography
  sx={{
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
    pb: '28px', // Ensure paddingBottom matches the lineHeight value
  }}
>
              UX/UI process for developing digital forms (replacing printed forms) 
              for an insurance company
              </Typography>
              
            </Box>
          </Grid>
       
</Grid>
</Container>
<CoverSectionMetLife/>
<Container disableGutters maxWidth={false} sx={{ minHeight: '100vh', color: '#0A0A14', pb: {md: '80px', xxs: '16px'} }}>
<Grid container spacing={2} justifyContent="space-between">
  {/* First Column - Takes full width on small screens, and 5 out of 12 columns on medium screens and up */}
  <Grid item xs={12} lg={5}>
    <ClientOverviewMetlife/>
  </Grid>

  {/* Spacer Column - Empty column that only appears after the md breakpoint */}
  <Grid item xs={0} lg={1} />

  {/* Second Column - Takes full width on small screens, and 5 out of 12 columns on medium screens and up */}
  <Grid item xs={12} lg={5}>
    <TimelineAndContributionMetlife contribution={contribution} tools={tools}/>
  </Grid>
</Grid>

    
      </Container>

      {/* Full-width section */}
      <FullWidthSectionMetlife/>
      <Grid item xxs={12} lg={10} >
     <NavbarProject sections={sections} onSelectSection={handleSelectSection} activeLink={activeSection} // Pass active section as prop
     ></NavbarProject>
     {renderSection()}
</Grid>
<Container disableGutters maxWidth={false}>
<Grid item xxs={12} sx={{display: {xxs: 'none', lg: 'block'

}, py: {md: '80px', xxs: '16px'}}}>
<SliderDiv slides={slides} />
</Grid>   
<Grid item xxs={12} sx={{display: {md: 'block', lg: 'none'

}, py: {md: '80px', xxs: '16px'}}}>
<BeforeAfterSmaller/>
</Grid>   
</Container>
<div ref={navbarRef} style={{
        position: 'fixed',
        top: '0',
        display: isNavbarVisible ? 'block' : 'none',
        zIndex: 1000,
        width: '100%',
      }}>
        <FixedNavbar sections={sections_} onSelectSection={handleSelectSection_} />
      </div>
      <Container disableGutters maxWidth={false} sx={{overflow: 'visible'}}>
<Grid item xxs={12} sx={{ py: {md: '80px', xxs: '16px', overflow: 'visible'}}}>
 
</Grid>
<div ref={mainLayoutRef}>
<MetLifeDesignSprints />
</div>
<MetFinalDesign/>
<MetLifeSummary/>
<TestingSection/>
</Container>
<ThreeColSection/>
<MetUsabilityTesting/>
<MetDesignSystem/>
<div ref={calendarRef}>
<MoreSectionMet/>

</div>
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
};

export default Metlife;
