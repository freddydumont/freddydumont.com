import React from 'react';
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
    <Section htmlId="about">
      <Img
        fluid={data.author.avatar.childImageSharp.fluid}
        className="rounded-full h-24 w-24 mb-8 -ml-1 shadow-outline-teal"
        alt="frederick morin"
      />
      <h1 className="text-gray-050 text-2xl sm:text-4xl font-semibold mb-4">
        Hi!{' '}
        <span role="img" aria-label="Waving Hand Sign">
          👋
        </span>{' '}
        I'm Frederick Morin.
      </h1>
      <h3 className="text-xl sm:text-2xl mb-4">
        I'm a full stack web application developer helping teams and startups
        turn ideas into reality.{' '}
        <a
          href="https://www.linkedin.com/in/freddydumont/"
          className="text-teal-vivid-500 hover:text-teal-vivid-400 hover:underline cursor-pointer"
        >
          Get in touch now
        </a>{' '}
        to learn how I can help you grow your business with software.
      </h3>
    </Section>
  );
};

export default About;
