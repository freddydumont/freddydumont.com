import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortfolioCard from '../../../../src/components/PortfolioCard';

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

  return <PortfolioCard {...nodes[0]} />;
};

export default PortfolioCardSample;
