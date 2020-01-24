import React from 'react';
import FooterWave from './FooterWave';
import { Box, Container, Text } from '@theme-ui/components';

const Footer = () => {
  return (
    <>
      <FooterWave />
      <Box as="footer" bg="gray.8" pb={[16, 32]}>
        <Container>
          <Text
            as="h2"
            variant="heading"
            pt={2}
            mb={4}
            sx={{
              fontSize: ['2xl', '4xl'],
            }}
          >
            Elsewhere on the internet
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
