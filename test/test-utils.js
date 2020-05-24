import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import theme from '../src/gatsby-plugin-theme-ui/index';
import SelectedTagsProvider from '../src/components/SelectedTagsProvider';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SelectedTagsProvider>{children}</SelectedTagsProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
