import React from 'react';
import { Text } from '@theme-ui/components';

/**
 * Monospace line of text with optional prompt
 *
 * @param {Object} props
 * @param {boolean} props.withPrompt
 * @param {boolean} props.withError colors the prompt red
 */
const CommandLineText = ({ children, withPrompt, withError }) => (
  <Text
    sx={{
      fontSize: 'lg',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }}
  >
    {withPrompt ? (
      <Text as="span" color={withError ? 'error' : 'primary'}>
        >
      </Text>
    ) : (
      ' '
    )}{' '}
    {children}
  </Text>
);

export default CommandLineText;
