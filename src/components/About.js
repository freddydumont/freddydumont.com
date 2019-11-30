import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Section from './Section';

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
        className="rounded-full h-24 w-24 mb-8 -ml-1 shadow-outline-teal"
        alt="frederick morin"
      />
      <h1 className="text-gray-100 text-2xl sm:text-4xl font-semibold mb-4">
        Hi!{' '}
        <span role="img" aria-label="Waving Hand Sign">
          👋
        </span>{' '}
        I'm Frederick Morin.
      </h1>
      <Section.Body>
        I'm a full stack web application developer helping teams and startups
        turn ideas into reality.{' '}
        <button
          onClick={() => scrollTo('#contact')}
          className="appearance-none text-teal-vivid-500 hover:text-teal-vivid-400 hover:underline cursor-pointer"
        >
          Contact me now
        </button>{' '}
        to learn how I can help you grow your business.
      </Section.Body>
    </Section>
  );
};

export default About;
