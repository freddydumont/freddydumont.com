import React from 'react';
import { Button } from '@theme-ui/components';

const ButtonLink = ({ children, link }) => (
  <Button
    as="a"
    variant="primary"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    role="button"
  >
    {children}
  </Button>
);

export default ButtonLink;
