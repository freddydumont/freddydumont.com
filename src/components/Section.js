import React from 'react';
import { Container } from '@theme-ui/components';

/**
 * Section with margin and container
 * @param {Object} props
 * @param {string} props.htmlId
 * @param {string} props.withContainer wraps children in a predefined container
 */
const Section = ({ htmlId, withContainer, children }) => (
  <section id={htmlId} className="h-full text-gray-200 my-16 sm:my-32">
    {withContainer ? <Container>{children}</Container> : children}
  </section>
);

/**
 * Section title with styles
 */
Section.Title = ({ children }) => (
  <h1 className="text-4xl md:text-5xl text-gray-100 font-semibold mb-4">
    {children}
  </h1>
);

/**
 * Section body text with styles
 */
Section.Body = ({ children }) => (
  <p className="text-xl font-body sm:text-2xl mb-12">{children}</p>
);

export default Section;
