import React from 'react';
import { Box, Container, Text } from '@theme-ui/components';

/**
 * Section with margin and container
 * @param {Object} props
 * @param {string} props.htmlId
 * @param {string} props.withContainer wraps children in a predefined container
 */
const Section = ({ htmlId, withContainer, children }) => (
  <Box
    as="section"
    id={htmlId}
    sx={{
      height: 'full',
      color: 'gray.2',
      mt: [16, 32],
    }}
  >
    {withContainer ? <Container>{children}</Container> : children}
  </Box>
);

/**
 * Section title with styles
 */
Section.Title = ({ children }) => (
  <Text as="h1" variant="heading" mb={4}>
    {children}
  </Text>
);

/**
 * Section body text with styles
 */
Section.Body = ({ children }) => (
  <Text as="p" variant="body" mb={12}>
    {children}
  </Text>
);

export default Section;
