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
      <div className="w-full inline-block mx-auto">
        <div className="col-1 md:col-2 md:max-w-2xl md:mx-auto lg:max-w-4xl xl:col-3 xl:max-w-7xl">
          {nodes.map((card) => (
            <PortfolioCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
