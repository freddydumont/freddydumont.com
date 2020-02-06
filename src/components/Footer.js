import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import FooterWave from './FooterWave';
import { Box, Container, Text, Flex, Link } from '@theme-ui/components';
import Twitter from './icons/Twitter';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';
import copyright from 'copyright';

const IconLinks = [Twitter, GitHub, LinkedIn];

const navLinks = [
  { name: 'about', clickDestination: '#about' },
  { name: 'blog', to: 'blog' },
  { name: 'portfolio', clickDestination: '#portfolio' },
  { name: 'contact', clickDestination: '#contact' },
  { name: 'back to top', clickDestination: '#home' },
];

const Footer = () => {
  return (
    <>
      <FooterWave />
      <Box as="footer" bg="gray.8" pb={4}>
        <Container>
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Text
              as="h2"
              variant="heading"
              pt={4}
              mb={5}
              sx={{
                fontSize: ['2xl', '4xl', '4xl', '4xl'],
              }}
            >
              Elsewhere on the internet
            </Text>
            <Flex mb={8}>
              {IconLinks.map((Icon) => (
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="icon"
                  href={Icon.link}
                  key={Icon.link}
                  mx={3}
                >
                  <Icon />
                </Link>
              ))}
            </Flex>
            <Flex
              as="ul"
              sx={{
                flexWrap: 'wrap',
                justifyContent: 'center',
                mb: 4,
                fontFamily: 'mono',
                color: 'gray.1',
                li: {
                  mx: 3,
                  '&:hover': {
                    color: 'primaryHover',
                  },
                },
              }}
            >
              {navLinks.map(({ name, clickDestination, to }) => (
                <li>
                  {to && <a href={to}>{name}</a>}
                  {clickDestination && (
                    <button onClick={() => scrollTo(clickDestination)}>
                      {name}
                    </button>
                  )}
                </li>
              ))}
            </Flex>
            <Text
              color="gray.1"
              sx={{
                fontFamily: 'mono',
              }}
            >
              {copyright('freddydumont')}
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
