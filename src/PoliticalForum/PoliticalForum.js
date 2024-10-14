import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Footer from '../Footer';
import theme from '../theme';  // Your custom theme
import ReadingProgressBar from '../ReadingProgressBar';  // Progress bar component

import withScrollEffect from '../withScrollEffect.js';
import PoliticalForumClientOverview from './PoliticalForumClientOverview';  // Subcomponent
import PoliticalForumTimelineAndContribution from './PoliticalForumTimelineAndContribution';  // Subcomponent
import PoliticalForumFullWidthSection from './PoliticalForumFullWidthSection';  // Subcomponent
import NavbarProject from '../NavbarProject';
import PoliticalForumProblem from './PoliticalForumProblem';
import PoliticalForumUsers from './PoliticalForumUsers';  // Importing the new component
import PoliticalForumGoal from './PoliticalForumGoal';
import PoliticalForumConstraints from './PoliticalForumConstraints';
import PoliticalForumKPIs from './PoliticalForumKPIs';
import PoliticalForumAnalytics from './PoliticalForumAnalytics';
import BeforeAfterLayout from '../Metlife/BeforeAfterLayout';
import before from '../assets/political-before.png'
import after from '../assets/political-after.png'
import PoliticalForumDesignSection from './PoliticalForumDesignSection';
import PoliticalForumNavigationLevels from './PoliticalForumNavigationLevels';
import PoliticalForumNavIssues from './PoliticalForumNavIssues';
import PoliticalForumNavVisualized from './PoliticalForumNavVisualized';
import OverlappingImages from '../Metlife/OverlappingImages';
import ImageGrid from './ImageGrid';
import FixedNavbar from '../FixedNavbar';
import TestingSection from '../Metlife/TestingSection';
import PoliticalForumTesting from './PoliticalForumTesting';
import MoreSectionPoliticalForum from './MoreSectionPoliticalForum';
import PoliticalForumContent from './PoliticalForumContent.js';

const contribution = [
  { id: 1, name: 'User Research', color: '#FFE9E3' },
  { id: 2, name: 'Sketching', color: '#E4DBEA' },
  { id: 3, name: 'Prototyping', color: '#E7EDFF' },
  { id: 4, name: 'Web Mob Design', color: '#FAF6C8' },
  { id: 5, name: 'Compiling Specifications', color: '#E7EDFF' },
  { id: 6, name: 'Design System', color: '#E4DBEA' },
  { id: 7, name: 'Usability Testing', color: '#FFE9E3' },
];

const tools = [
  { id: 1, name: 'Excel', href: '#', color: '#FFE9E3' },
  { id: 1, name: 'Figma', href: '#', color: '#FFE9E3' },
  { id: 2, name: 'OptimalSort', href: 'https://www.optimalworkshop.com/homepage', color: '#E4DBEA' },
 
  { id: 3, name: 'Google Forms', href: '#', color: '#E7EDFF' },
  { id: 3, name: 'Core Web Vitals', href: 'https://speedvitals.com/', color: '#E7EDFF' },
  { id: 3, name: 'System Usability Score', href: 'https://stuart-cunningham.github.io/sus/', color: '#E7EDFF' },
  { id: 4, name: 'Carbon Footprint Impact', href: 'https://www.websitecarbon.com/', color: '#FAF6C8' },
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
  { id: 'design-process-pf', label: 'Design Process' },
  { id: 'nav-levels-pf', label: 'Navigation Levels' },
  { id: 'id-nav-issues-pf', label: 'Identified Navigation Issues' },
  { id: 'nav-v-pf', label: 'Nav Visualized (Mobile)' },
  { id: 'testing-pf', label: 'Testing' },
];

const PoliticalForum = () => {
  const [activeSection, setActiveSection] = useState('problem'); // Default section
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);  // Navbar initially hidden
  const [activeLink, setActiveLink] = useState('');
  const navbarRef = useRef(null);
  const calendarRef = useRef(null);
  const mainLayoutRef = useRef(null);  // Ref for MainLayout section
  const PoliticalForumNavigationLevelsWithScroll = withScrollEffect(PoliticalForumNavigationLevels);
  const PoliticalForumNavigationNavIssues = withScrollEffect(PoliticalForumNavIssues);
  
  // Function to handle section selection
  const handleSelectSection = (section) => {
    setActiveSection(section);
  };
  const [activeSection_, setActiveSection_] = useState('problem'); // Default section

// Handle section selection from navbar
const handleSelectSection_ = (sectionId) => {
  setActiveSection_(sectionId);
};

  // Scroll logic for showing/hiding the fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      const mainLayoutTop = mainLayoutRef.current?.offsetTop || 0;
      const calendarTop = calendarRef.current?.offsetTop || 0;

      const scrollY = window.scrollY ; // Adjust scrollY by 73px

      // Show fixed navbar if scrollY is between the top of MainLayout and the CalendarSection
      if (scrollY >= mainLayoutTop && scrollY < calendarTop) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    handleScroll();  // Call once on component mount

    window.addEventListener('scroll', handleScroll);  // Add scroll listener

    return () => {
      window.removeEventListener('scroll', handleScroll);  // Cleanup listener on unmount
    };
  }, []);
const renderSection = () => {
  switch (activeSection) {
    case 'problem':
      return <PoliticalForumProblem />;
    case 'users':
      return <PoliticalForumUsers />;
   
    case 'goal':
      return <PoliticalForumGoal />;
    case 'constraints':
      return <PoliticalForumConstraints />;
    case 'designKPIs':
      return <PoliticalForumKPIs />;
    case 'analytics':
      return <PoliticalForumAnalytics />;
      
    default:
      return <PoliticalForumProblem />;
  }
};

  return (
    <ThemeProvider theme={theme}>
      <ReadingProgressBar />  {/* Reading Progress Bar */}
      <Container disableGutters maxWidth={false} sx={{  color: '#0A0A14', backgroundColor: '#E7EDFF' }}>
        {/* Navbar */}
        <Grid container>
          <Grid item xxs={12}>
            <Navbar />
          </Grid>
        </Grid>

       <PoliticalForumContent/>
</Container>
<Container disableGutters maxWidth={false} sx={{ color: '#0A0A14', pb: {md: '80px', xxs: '16px'} }}>
<Grid container justifyContent="space-between">
  {/* First Column - Takes full width on small screens, and 5 out of 12 columns on medium screens and up */}
  <Grid item xs={12} lg={5}>
    <PoliticalForumClientOverview />
  </Grid>

  {/* Spacer Column - Empty column that only appears after the md breakpoint */}
  <Grid item xs={0} lg={1} />

  {/* Second Column - Takes full width on small screens, and 5 out of 12 columns on medium screens and up */}
  <Grid item xs={12} lg={5}>
    <PoliticalForumTimelineAndContribution contribution={contribution} tools={tools} />
  </Grid>
  <Grid item xs={0} lg={1} />
</Grid>

    
      </Container>

      {/* Full-width section */}
      <PoliticalForumFullWidthSection />

   

      <Grid item xxs={12} lg={10} >
     <NavbarProject sections={sections} onSelectSection={handleSelectSection} activeLink={activeSection} // Pass active section as prop
     ></NavbarProject>
     {renderSection()}
</Grid>

     <Container disableGutters maxWidth={'100vw'} sx={{ color: '#0A0A14',
          backgroundColor: '#F7F7F6' }}>
  <Grid container justifyContent="center"   >
    <Grid item xxs={12} sx={ {pb: { xl: '80px', sm: '60px', xxs: '48px' },
          overflow: 'visible'
        }} >
      <BeforeAfterLayout beforeImage={before} afterImage={after} />
    </Grid>
    </Grid>
    </Container>
    
    
    <div ref={navbarRef} style={{
        position: 'fixed',
        top: '0',
        display: isNavbarVisible ? 'block' : 'none',
        zIndex: 1000,
        width: '100%',
      }}>
        <FixedNavbar sections={sections_} onSelectSection_={handleSelectSection_} activeSection_={activeSection_}  />
      </div>
      <Container disableGutters maxWidth={'100vw'} sx={{ color: '#0A0A14' }}>

    <Grid item xxs={12}  >
    <Grid item xxs={12} sx={{ mt: 1 }}>  {/* Add margin-top to ensure spacing */}
      <div ref={mainLayoutRef}>
      <PoliticalForumDesignSection />
      </div>
    
    </Grid>
  </Grid>
  <PoliticalForumNavigationLevelsWithScroll />

</Container>

<PoliticalForumNavigationNavIssues/>
<PoliticalForumNavVisualized/>
<div ref={calendarRef}>
<Container disableGutters maxWidth={'100vw'} sx={{ color: '#0A0A14' }}>
  <Grid container justifyContent="center" spacing={4} sx={{ }}>
    <Grid item xxs={12}>
<PoliticalForumTesting/>
</Grid></Grid></Container></div>
<MoreSectionPoliticalForum/>
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
};

export default PoliticalForum;
