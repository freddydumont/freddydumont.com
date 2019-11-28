import React from 'react';

const Button = ({ children, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    role="button"
    className="inline-block w-full py-6 text-center text-lg font-bold font-mono uppercase tracking-wider bg-teal-vivid-800 text-teal-vivid-300 hover:bg-teal-vivid-400 hover:text-teal-vivid-900 cursor-pointer transition-all transition-faster ease-in-out"
  >
    {children}
  </a>
);

export default Button;
