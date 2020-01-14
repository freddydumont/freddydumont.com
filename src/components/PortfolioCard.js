/** @jsx jsx **/
import { jsx } from 'theme-ui';
import { useState, Fragment } from 'react';
import Img from 'gatsby-image';
import { SlideDown } from 'react-slidedown';
import { Text, Box, Button, Flex } from '@theme-ui/components';
import ButtonLink from './ButtonLink';

/**
 * Tag object with name and tailwind color
 * @typedef {Object} Tag
 * @property {String} name
 * @property {String} color
 */

/**
 * Turn portfolio data into a card component.
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.category
 * @param {String} props.description
 * @param {String} props.technology
 * @param {String} props.link
 * @param {String} props.alt
 * @param {Object} props.image
 * @param {Tag[]} props.tags
 */
const PortfolioCard = ({
  title,
  category,
  description,
  technology,
  link,
  alt,
  image,
  tags,
}) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="max-w-xs min-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl bg-gray-800 border-teal-vivid-600 border-t-4 font-body mb-8 mx-auto relative">
      <Box px={6} pt={4} pb={3}>
        <Text as="h2" variant="title">
          {title}
        </Text>
      </Box>
      <Img
        fluid={image.childImageSharp.fluid}
        alt={alt}
        sx={{
          marginBottom: 4,
          marginX: 2,
          borderRadius: 'sm',
        }}
      />
      <SlideDown
        transitionOnAppear={false}
        sx={{
          transition: `transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
        }}
      >
        <Box px={6} py={4}>
          <Text as="h3" mb={4} variant="category">
            {category}
          </Text>
          <Flex
            mb={2}
            css={{
              flexWrap: 'nowrap',
              overflowX: 'scroll',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {tags.map((tag) => (
              <Tag key={tag.name} name={tag.name} color={tag.color} />
            ))}
          </Flex>
          <Text as="p" variant="description">
            {description}
          </Text>
          {isExpanded && (
            <Fragment>
              <Text
                as="h3"
                mt={4}
                mb={1}
                color="gray.1"
                sx={{ fontSize: 'lg' }}
              >
                Technology
              </Text>
              <Text as="p" variant="description">
                {technology}
              </Text>
            </Fragment>
          )}
        </Box>
        {isExpanded ? (
          <ButtonLink link={link}>go to project</ButtonLink>
        ) : (
          <Button
            data-testid="expand-button"
            sx={{
              position: 'absolute',
              right: 0,
              left: 0,
              bottom: 0,
              filter: `drop-shadow(0 0 20px)`,
            }}
            onClick={() => setExpanded(true)}
          >
            See More
          </Button>
        )}
      </SlideDown>
    </div>
  );
};

export const Tag = ({ name, color }) => (
  <span
    className={`${color[0]} ${color[1]} inline-block rounded-lg px-3 py-1 text-sm font-semibold mr-2 mb-2 whitespace-no-wrap`}
  >
    {name}
  </span>
);

export default PortfolioCard;
