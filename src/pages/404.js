/** @jsx jsx **/
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import Home from '../components/Home';
import CommandLineText from '../components/CommandLineText';
import ThemeProvider from '../components/ThemeProvider';
import MainMenuItem from '../components/MainMenuItem';

const NotFoundPage = () => {
  const [path, setPath] = useState('/404');
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <ThemeProvider>
      <Home>
        <CommandLineText withPrompt>cd {path}</CommandLineText>
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
};

export default NotFoundPage;
