import React from 'react';
import { Box } from '@theme-ui/components';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Home from '../components/Home';
import MainMenu from '../components/MainMenu';
import ThemeProvider from '../components/ThemeProvider';
import Footer from '../components/Footer';

const Index = () => (
  <ThemeProvider>
    <Box
      as="main"
      bg="background"
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
      <Footer />
    </Box>
  </ThemeProvider>
);

export default Index;
