/** @jsx jsx **/
import { jsx } from 'theme-ui';
import { IconButton } from '@theme-ui/components';

/**
 * SVG Icon to use with Logos etc. Pass the path as children.
 * @param {Object} props
 * @param {String} props.title
 * @param {String} [props.viewBox="0 0 20 20"] custom viewBox
 * @param {*} props.children the svg path
 */
function SvgIcon({ title, children, viewBox, ...props }) {
  return (
    <IconButton>
      <svg
        viewBox={viewBox}
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

SvgIcon.defaultProps = {
  viewBox: '0 0 20 20',
};

export default SvgIcon;
