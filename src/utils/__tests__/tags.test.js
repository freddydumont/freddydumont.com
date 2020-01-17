import { tagsStringToObject } from '../tags';

const fixtures = {
  strings: ['javascript', 'react', 'gatsby', 'bulma'],
  objects: [
    {
      name: 'javascript',
      color: 'gray.9',
      bg: 'yellow_vivid.4',
    },
    { name: 'react', color: 'gray.9', bg: 'blue.4' },
    { name: 'gatsby', color: 'purple.1', bg: 'purple.7' },
    { name: 'bulma', color: 'teal_vivid.9', bg: 'teal_vivid.2' },
  ],
};

describe('tagsArrayToObject', () => {
  it('should return an array of Tag objects when given an array of tag names', () => {
    expect(tagsStringToObject(fixtures.strings)).toEqual(fixtures.objects);
  });
});
