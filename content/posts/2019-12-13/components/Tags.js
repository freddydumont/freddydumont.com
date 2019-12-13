import React from 'react';
import { Tag } from '../../../../src/components/PortfolioCard';

const tags = [
  { name: 'javascript', color: ['bg-yellow-vivid-400', 'text-gray-900'] },
  { name: 'react', color: ['bg-blue-400', 'text-gray-900'] },
  { name: 'gatsby', color: ['bg-purple-700', 'text-purple-100'] },
  { name: 'jest', color: ['bg-red-vivid-800', 'text-white'] },
];

const Tags = () => (
  <div className="container mx-auto flex justify-center mb-8">
    {tags.map((tag) => (
      <Tag key={tag.name} name={tag.name} color={tag.color} />
    ))}
  </div>
);

export default Tags;
