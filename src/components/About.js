/** @jsx jsx **/
import { jsx } from 'theme-ui';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Section from './Section';
import { Text } from '@theme-ui/components';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      author(name: { eq: "Frederick Morin" }) {
        avatar {
          childImageSharp {
            fluid(maxWidth: 522) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  return (
    <Section htmlId="about" withContainer>
      <Img
        fluid={data.author.avatar.childImageSharp.fluid}
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
        <button onClick={() => scrollTo('#contact')} className="link">
          Contact me now
        </button>{' '}
        to learn how I can help you grow your business.
      </Section.Body>
    </Section>
  );
};

export default About;
