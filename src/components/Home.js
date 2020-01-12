/** @jsx jsx **/
import { jsx } from 'theme-ui';
import Logo from '../@narative/gatsby-theme-novela/components/Logo';
import { Box, Flex, Container } from '@theme-ui/components';
import MenuItem from '../components/MainMenuItem';
import circuitBg from '../assets/background.svg';

const Home = () => (
  <Flex
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
      bg="background"
      p={6}
      mt={-32}
      sx={{
        maxWidth: 'xs',
        fontSize: '2xl',
        lineHeight: 'relaxed',
      }}
    >
      <Box pb="6">
        <Logo />
      </Box>
      <ul>
        <MenuItem clickDestination="#about">about</MenuItem>
        <MenuItem to="/blog">blog</MenuItem>
        <MenuItem clickDestination="#portfolio">portfolio</MenuItem>
        <MenuItem clickDestination="#contact">contact</MenuItem>
      </ul>
    </Container>
  </Flex>
);

export default Home;
