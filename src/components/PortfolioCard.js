import React from 'react';
import Img from 'gatsby-image';
import { useMachine } from '@xstate/react';
import { Machine } from 'xstate';
import Button from './Button';

const cardMachine = Machine({
  id: 'portfolioCard',
  initial: 'minified',
  states: {
    minified: {
      on: { EXPAND: 'expanded' },
    },
    expanded: {
      type: 'final',
    },
  },
});

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
  const [current, send] = useMachine(cardMachine);

  let button;

  switch (current.value) {
    case 'minified':
      button = (
        <button
          data-testid="expand-button"
          className="btn btn-primary absolute inset-x-0 bottom-0 filter-drop"
          onClick={() => send('EXPAND')}
        >
          See More
        </button>
      );
      break;
    case 'expanded':
      button = <Button link={link}>go to project</Button>;
      break;

    default:
      button = null;
      break;
  }

  return (
    <div className="break-avoid max-w-xs min-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl bg-gray-800 border-teal-vivid-600 border-t-4 font-body mb-8 mx-auto relative">
      <div className="px-6 pt-4 pb-3">
        <h2 className="font-semibold text-gray-050 text-2xl tracking-wide">
          {title}
        </h2>
      </div>
      <Img
        fluid={image.childImageSharp.fluid}
        alt={alt}
        className="mb-4 mx-2 rounded-sm"
      />
      <div className="px-6 py-4">
        <h3 className="text-xl text-gray-100 mb-4">{category}</h3>
        <div className="mb-2 flex flex-no-wrap overflow-x-scroll scrolling-touch">
          {tags.map((tag) => (
            <Tag key={tag.name} name={tag.name} color={tag.color} />
          ))}
        </div>
        <p className="text-gray-300 text-base text-justify hyphens">
          {description}
        </p>
        {current.value === 'expanded' && (
          <>
            <h3 className="text-lg text-gray-100 mt-4 mb-1">Technology</h3>
            <p className="text-gray-300 text-base text-justify hyphens">
              {technology}
            </p>
          </>
        )}
      </div>
      {button}
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
