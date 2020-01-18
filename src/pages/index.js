import React from 'react';
import SEO from '../../node_modules/@narative/gatsby-theme-novela/src/components/SEO';
import social_header from '../assets/dumont_digital_logo.png';
import { Box } from '@theme-ui/components';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Home from '../components/Home';
import MainMenu from '../components/MainMenu';
import ThemeProvider from '../components/ThemeProvider';

const Index = () => (
  <ThemeProvider>
    <SEO
      title="freddydumont | Full stack web application development"
      description="I'm a full stack web application developer helping teams and startups turn ideas into reality. Click to find out how I can help you grow your business now!"
      image={social_header}
    />
    <Box
      as="main"
      bg="background"
      pb={[16, 32]}
      sx={{
        height: 'full',
      }}
    >
      <Home>
        <MainMenu />
      </Home>
      <About />
      <Portfolio />
      <Contact />
    </Box>
  </ThemeProvider>
);

export default Index;
