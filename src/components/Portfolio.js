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
              fluid(maxWidth: 384) {
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
      <h1 className="text-4xl md:text-5xl text-gray-100 font-semibold mb-4">
        Portfolio
      </h1>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start">
        {nodes.map((card) => (
          <PortfolioCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
