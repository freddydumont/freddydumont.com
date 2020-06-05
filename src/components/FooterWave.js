/** @jsx jsx **/
import { jsx } from 'theme-ui';

function FooterWave(props) {
  return (
    <svg
      sx={{ mt: [null, null, '-t8', -16] }}
      viewBox="0 0 1440 319"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        sx={{
          fill: 'gray.8',
        }}
        d="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,213.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  );
}

export default FooterWave;
