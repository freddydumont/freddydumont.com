import React from 'react';
import Masonry from 'react-masonry-css';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Link } from '@theme-ui/components';
import Section from './Section';
import PortfolioCard from './PortfolioCard';
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
        <Section.Body>
          Here's a non-exhaustive collection of stuff I've worked on. I also
          have a few{' '}
          <Link
            href="https://www.npmjs.com/~freddydumont"
            title="freddydumont's npm packages"
          >
            published npm packages
          </Link>{' '}
          and some{' '}
          <Link
            href="https://github.com/freddydumont"
            title="freddydumont's GitHub profile"
          >
            more work on GitHub
          </Link>
          .
        </Section.Body>
      </Container>
      <Masonry
        breakpointCols={{
          default: 3,
          1279: 2,
          767: 1,
        }}
        className="flex md:max-w-2xl md:mx-auto lg:max-w-4xl xl:max-w-7xl"
        columnClassName="mx-auto"
      >
        {nodes.map((card, index, arr) => {
          // add the "see more" button with last item to avoid breaking the masonry library
          if (index === arr.length - 1) {
            return (
              <React.Fragment key={card.title}>
                <PortfolioCard {...card} />
                <div className="max-w-xs min-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl mb-8 mx-auto">
                  <Button link="https://github.com/freddydumont">
                    See more on GitHub
                  </Button>
                </div>
              </React.Fragment>
            );
          }

          return <PortfolioCard key={card.title} {...card} />;
        })}
      </Masonry>
    </Section>
  );
};

export default Portfolio;
