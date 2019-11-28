import React from 'react';
import Img from 'gatsby-image';
import Button from './Button';

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
 * @param {String} props.link
 * @param {String} props.alt
 * @param {Object} props.image
 * @param {Tag[]} props.tags
 */
const PortfolioCard = ({
  title,
  category,
  description,
  link,
  alt,
  image,
  tags,
}) => {
  return (
    <div className="max-w-xs sm:max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl bg-gray-800 border-teal-vivid-600 border-t-4 font-body m-4">
      <div className="px-6 pt-4 pb-3">
        <div className="font-semibold text-gray-050 text-2xl tracking-wide">
          {title}
        </div>
      </div>
      <Img
        fluid={image.childImageSharp.fluid}
        alt={alt}
        className="mb-4 mx-2 rounded-sm"
      />
      <div className="px-6 py-4">
        <div className="text-xl text-gray-100 mb-4">{category}</div>
        <div className="mb-2 flex flex-no-wrap overflow-x-scroll scrolling-touch">
          {tags.map((tag) => (
            <Tag key={tag.name} name={tag.name} color={tag.color} />
          ))}
        </div>
        <p className="text-gray-300 text-base text-justify hyphens">
          {description}
        </p>
      </div>
      <Button link={link}>go to project</Button>
    </div>
  );
};

const Tag = ({ name, color }) => (
  <span
    className={`${color} inline-block rounded-lg px-3 py-1 text-sm font-semibold mr-2 mb-2 whitespace-no-wrap`}
  >
    {name}
  </span>
);

export default PortfolioCard;
