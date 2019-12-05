import { tagsStringToObject } from '../tags';

const fixtures = {
  strings: ['javascript', 'react', 'gatsby', 'bulma'],
  objects: [
    {
      color: ['bg-yellow-vivid-400', 'text-gray-900'],
      name: 'javascript',
    },
    { color: ['bg-blue-400', 'text-gray-900'], name: 'react' },
    { color: ['bg-purple-700', 'text-purple-100'], name: 'gatsby' },
    { color: ['bg-teal-vivid-200', 'text-teal-vivid-900'], name: 'bulma' },
  ],
};

describe('tagsArrayToObject', () => {
  it('should return an array of Tag objects when given an array of tag names', () => {
    expect(tagsStringToObject(fixtures.strings)).toEqual(fixtures.objects);
  });
});
