import React from 'react';

/**
 * Section with margin and container
 * @param {Object} props
 * @param {string} props.htmlId
 */
const Section = ({ htmlId, children }) => (
  <section id={htmlId} className="h-full text-gray-100 my-16 sm:my-32">
    <div className="container mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl px-6">
      {children}
    </div>
  </section>
);

export default Section;
