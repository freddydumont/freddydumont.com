import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from './Section';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const {
    allPortfolioCard: { nodes },
  } = useStaticQuery(graphql`
    query {
      allPortfolioCard {
        nodes {
          image {
            childImageSharp {
              fluid(maxHeight: 256) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          alt
          category
          description
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
      <h1 className="text-4xl text-gray-100 font-semibold mb-8">Portfolio</h1>
      {nodes.map((card) => (
        <PortfolioCard key={card.title} {...card} />
      ))}
    </Section>
  );
};

export default Portfolio;
