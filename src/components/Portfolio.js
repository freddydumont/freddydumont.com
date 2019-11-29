import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from './Section';
import PortfolioCard from './PortfolioCard';
import Container from './Container';

const Portfolio = () => {
  const {
    allPortfolioCard: { nodes },
  } = useStaticQuery(graphql`
    query {
      allPortfolioCard {
        nodes {
          image {
            childImageSharp {
              fluid(maxWidth: 384) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          alt
          category
          description
          technology
          link
          tags {
            color
            name
          }
          title
        }
      }
    }
  `);

  return (
    <Section htmlId="portfolio">
      <Container>
        <h1 className="text-4xl md:text-5xl text-gray-100 font-semibold mb-4">
          Portfolio
        </h1>
      </Container>
      <div className="mx-auto flex flex-col items-center md:flex-row md:justify-center md:items-start md:flex-wrap xl:max-w-7xl">
        {nodes.map((card) => (
          <PortfolioCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
