/** @jsx jsx **/
import { jsx } from 'theme-ui';
import Logo from './Logo';
import { Box, Flex, Container } from '@theme-ui/components';
import circuitBg from '../assets/background.svg';

const Home = ({ children }) => (
  <Flex
    id="home"
    color="gray.0"
    bg="background"
    sx={{
      fontFamily: 'mono',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'screenHeight',
      backgroundImage: `url(${circuitBg})`,
    }}
  >
    <Container
      as="nav"
      variant="box"
      bg="background"
      p={6}
      mt={-32}
      sx={{
        maxWidth: 'xs',
        fontSize: '2xl',
        lineHeight: 'relaxed',
        '@media (max-width: 360px)': {
          maxWidth: '16rem',
        },
      }}
    >
      <Box pb="6">
        <Logo />
      </Box>
      {children}
    </Container>
  </Flex>
);

export default Home;
