/** @jsx jsx **/
import { jsx } from 'theme-ui';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Flex } from '@theme-ui/components';

/**
 * Menu items
 * @param {Object} props
 * @param {string} [props.to] href destination
 * @param {string} [props.clickDestination] onClick destination for `scrollTo`
 * @param {string} props.children displayed string
 */
const MainMenuItem = ({ to, clickDestination, children }) => (
  // the div is there for the animated bg to stop when text ends
  <Flex sx={{ alignItems: 'center' }}>
    <li
      sx={{
        cursor: 'pointer',
        background: (theme) => `
          linear-gradient(
            to left,
            transparent 50%,
            ${theme.colors.teal_vivid[9]} 50%
          )
      `,
        backgroundSize: '210% 100%',
        backgroundPosition: 'right bottom',
        transition: 'all 250ms ease',
        ':hover, :focus': {
          backgroundPosition: 'left bottom',
        },
      }}
    >
      {to && <a href={to}>{children}</a>}
      {clickDestination && (
        <button onClick={() => scrollTo(clickDestination)}>{children}</button>
      )}
    </li>
  </Flex>
);

export default MainMenuItem;
