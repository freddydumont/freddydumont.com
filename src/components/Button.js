import React from 'react';

const Button = ({ children, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    role="button"
    className="btn btn-primary"
  >
    {children}
  </a>
);

export default Button;
