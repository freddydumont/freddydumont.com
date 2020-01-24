/** @jsx jsx **/
import { jsx } from 'theme-ui';
import { IconButton } from '@theme-ui/components';

/**
 * SVG Icon to use with Logos etc. Pass the path as children.
 * @param {Object} props
 * @param {String} props.title
 * @param {*} props.children the svg path
 */
function SvgIcon({ title, children, ...props }) {
  return (
    <IconButton>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        sx={{
          width: 'inherit',
          height: 'inherit',
          transition: 'all 100ms ease-in-out',
        }}
        {...props}
      >
        {title && <title>{title}</title>}
        {children}
      </svg>
    </IconButton>
  );
}

export default SvgIcon;
