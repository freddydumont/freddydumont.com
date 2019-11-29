import React from 'react';

/**
 * Predefined container component
 */
const Container = ({ children }) => (
  <div className="container mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl px-6">
    {children}
  </div>
);

export default Container;
