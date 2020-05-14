import React, { useContext } from 'react';
import Masonry from 'react-masonry-css';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Link, Card } from '@theme-ui/components';
import { Global } from '@emotion/core';
import Section from './Section';
import PortfolioCard from './PortfolioCard';
import ButtonLink from './ButtonLink';
import TagComboBox from './TagComboBox';
import SelectedTagsProvider, {
  SelectedTagsContext,
} from './SelectedTagsProvider';

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
            bg
          }
          title
        }
      }
    }
  `);
  return (
    <SelectedTagsProvider>
      <PortfolioPure cards={nodes} />
    </SelectedTagsProvider>
  );
};

export const PortfolioPure = ({ cards }) => {
  const [state] = useContext(SelectedTagsContext);

  let filteredCards = cards;

  if (state.selectedTags?.length > 0) {
    // reset filteredCards
    filteredCards = [];

    // go through all cards
    cards.forEach((card) => {
      const cardTags = card.tags.map((tag) => tag.name);

      // for a card to be accepted, it has to contain all selectedTags
      if (
        state.selectedTags.every((selectedTag) =>
          cardTags.includes(selectedTag.value)
        )
      ) {
        filteredCards.push(card);
      }
    });
  }

  return (
    <Section htmlId="portfolio">
      {/* Injecting global here because Masonry expects actual classnames */}
      <Global
        styles={(theme) => ({
          '.masonry': {
            display: 'flex',
            [`@media (min-width: ${theme.breakpoints[1]})`]: {
              maxWidth: theme.sizes['2xl'],
              marginLeft: 'auto',
              marginRight: 'auto',
            },
            [`@media (min-width: ${theme.breakpoints[2]})`]: {
              maxWidth: theme.sizes['4xl'],
            },
            [`@media (min-width: ${theme.breakpoints[3]})`]: {
              maxWidth: theme.sizes['7xl'],
            },
          },
          '.masonry_column': {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        })}
      />
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
        <TagComboBox />
      </Container>
      <Masonry
        breakpointCols={{
          default: 3,
          1279: 2,
          767: 1,
        }}
        className="masonry"
        columnClassName="masonry_column"
      >
        {filteredCards.map((card, index, arr) => {
          // add the "see more" button with last item to avoid breaking the masonry library
          if (index === arr.length - 1) {
            return (
              <React.Fragment key={card.title}>
                <PortfolioCard {...card} />
                <Card>
                  <ButtonLink link="https://github.com/freddydumont">
                    See more on GitHub
                  </ButtonLink>
                </Card>
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
