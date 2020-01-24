import React from 'react';
import FooterWave from './FooterWave';
import {
  Box,
  Container,
  Text,
  Flex,
  IconButton,
  Link,
} from '@theme-ui/components';
import Twitter from './icons/Twitter';
import GitHub from './icons/GitHub';

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
            <Link variant="icon" href="https://twitter.com/_freddydumont">
              <Twitter />
            </Link>
            <Link variant="icon" href="https://github.com/freddydumont">
              <GitHub />
            </Link>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
