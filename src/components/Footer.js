import React from 'react';
import FooterWave from './FooterWave';
import { Box, Container, Text, Flex, Link } from '@theme-ui/components';
import Twitter from './icons/Twitter';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';

const IconLinks = [Twitter, GitHub, LinkedIn];

const Footer = () => {
  return (
    <>
      <FooterWave />
      <Box as="footer" bg="gray.8" pb={16}>
        <Container>
          <Text
            as="h2"
            variant="heading"
            pt={2}
            mb={5}
            sx={{
              fontSize: ['2xl', '4xl'],
            }}
          >
            Elsewhere on the internet
          </Text>
          <Flex>
            {IconLinks.map((Icon) => (
              <Link
                target="_blank"
                rel="noreferrer noopener"
                variant="icon"
                href={Icon.link}
                key={Icon.link}
              >
                <Icon />
              </Link>
            ))}
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
