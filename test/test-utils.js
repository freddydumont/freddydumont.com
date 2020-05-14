import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../src/components/ThemeProvider';
import SelectedTagsProvider from '../src/components/SelectedTagsProvider';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider>
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
