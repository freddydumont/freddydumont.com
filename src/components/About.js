/** @jsx jsx **/
import { jsx } from 'theme-ui';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Section from './Section';
import { Text, Link } from '@theme-ui/components';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(original: { src: { regex: "/freddydumont/i" } }) {
        fluid(maxWidth: 522) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);

  return <AboutPure avatar={data.imageSharp.fluid} />;
};

export const AboutPure = ({ avatar }) => {
  return (
    <Section htmlId="about" withContainer>
      <Img
        fluid={avatar}
        alt="frederick morin"
        sx={{
          borderRadius: 'full',
          height: '24',
          width: '24',
          marginBottom: 8,
          marginLeft: -1,
          boxShadow: 'outline-teal',
        }}
      />
      <Text
        variant="heading"
        mb={4}
        sx={{
          fontSize: ['2xl', '4xl'],
        }}
      >
        Hi!{' '}
        <span role="img" aria-label="Waving Hand Sign">
          👋
        </span>{' '}
        I'm Frederick Morin.
      </Text>
      <Section.Body>
        I'm a full stack web application developer helping teams and startups
        turn ideas into reality.{' '}
        <Link as="button" onClick={() => scrollTo('#contact')}>
          Contact me now
        </Link>{' '}
        to learn how I can help you grow your business.
      </Section.Body>
    </Section>
  );
};

export default About;
