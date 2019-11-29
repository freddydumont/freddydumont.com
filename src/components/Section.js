import React from 'react';
import Container from './Container';

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

export default Section;
