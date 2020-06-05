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
      <Box as="footer" bg="gray.8" pb={'t4'}>
        <Container variant="home">
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
              pt={'t4'}
              mb={'t5'}
              sx={{
                fontSize: ['2xl', '4xl', '4xl', '4xl'],
              }}
            >
              Elsewhere on the internet
            </Text>
            <Flex mb={'t8'}>
              {IconLinks.map((Icon) => (
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="icon"
                  href={Icon.link}
                  key={Icon.link}
                  mx={'t3'}
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
                mb: 't4',
                fontFamily: 'mono',
                color: 'gray.1',
                li: {
                  mx: 't3',
                  '&:hover': {
                    color: 'primaryHover',
                  },
                },
              }}
            >
              {navLinks.map(({ name, clickDestination, to }) => (
                <li key={name}>
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
