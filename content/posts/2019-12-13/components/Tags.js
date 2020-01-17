import React from 'react';
import { Tag } from '../../../../src/components/PortfolioCard';

const tags = [
  {
    name: 'javascript',
    color: 'gray.9',
    bg: 'yellow_vivid.4',
  },
  { name: 'react', color: 'gray.9', bg: 'blue.4' },
  { name: 'gatsby', color: 'purple.1', bg: 'purple.7' },
  { name: 'jest', color: 'red_vivid.8', bg: 'white' },
];

const Tags = () => (
  <div className="container mx-auto flex justify-center mb-8">
    {tags.map((tag) => (
      <Tag key={tag.name} {...tag} />
    ))}
  </div>
);

export default Tags;
