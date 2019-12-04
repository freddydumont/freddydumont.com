import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from './Section';
import PortfolioCard from './PortfolioCard';
import Container from './Container';
import Button from './Button';

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
                ...GatsbyImageSharpFluid
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
        <Section.Title>Portfolio</Section.Title>
      </Container>
      <div className="w-full inline-block mx-auto">
        <div className="col-1 md:col-2 md:max-w-2xl md:mx-auto lg:max-w-4xl xl:col-3 xl:max-w-7xl">
          {nodes.map((card) => (
            <PortfolioCard key={card.title} {...card} />
          ))}
          <div className="max-w-xs min-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl mb-8 mx-auto">
            <Button link="https://github.com/freddydumont">
              See more on GitHub
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
