import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortfolioCard from '../../../../src/components/PortfolioCard';
import ThemeProvider from '../../../../src/components/ThemeProvider';

const PortfolioCardSample = () => {
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
            bg
          }
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider>
      <PortfolioCard {...nodes[0]} />
    </ThemeProvider>
  );
};

export default PortfolioCardSample;
