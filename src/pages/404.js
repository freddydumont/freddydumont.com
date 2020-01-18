import React from 'react';
import Home from '../components/Home';
import CommandLineText from '../components/CommandLineText';
import ThemeProvider from '../components/ThemeProvider';
import MainMenuItem from '../components/MainMenuItem';

const NotFoundPage = () => (
  <ThemeProvider>
    <Home>
      <CommandLineText withPrompt>
        cd {window.location.pathname}
      </CommandLineText>
      <CommandLineText>404 - page not found</CommandLineText>
      <CommandLineText withPrompt withError>
        ls
      </CommandLineText>
      <CommandLineText>
        <ul>
          <MainMenuItem to="/">home</MainMenuItem>
          <MainMenuItem to="/blog">blog</MainMenuItem>
        </ul>
      </CommandLineText>
    </Home>
  </ThemeProvider>
);

export default NotFoundPage;
