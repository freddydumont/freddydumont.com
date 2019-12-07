/**
 * Add new tags here. Format is `name: [backgroundColor, textColor]`
 * Name must match with a tag found in `portfolio.json`.
 */
const TAG_COLORS = {
  javascript: ['bg-yellow-vivid-400', 'text-gray-900'],
  react: ['bg-blue-400', 'text-gray-900'],
  gatsby: ['bg-purple-700', 'text-purple-100'],
  bulma: ['bg-teal-vivid-200', 'text-teal-vivid-900'],
  redux: ['bg-purple-600', 'text-purple-100'],
  jest: ['bg-red-vivid-800', 'text-white'],
  emotion: ['bg-pink-400', 'text-gray-900'],
  bootstrap: ['bg-purple-800', 'text-purple-100'],
  sass: ['bg-pink-500', 'text-gray-900'],
  'redux-saga': ['bg-green-500', 'text-gray-900'],
  phaser: ['bg-orange-600', 'text-gray-900'],
  typescript: ['bg-blue-700', 'text-white'],
  xstate: ['bg-black', 'text-gray-050'],
  'rot.js': ['bg-black', 'text-gray-050'],
  tachyons: ['bg-gray-050', 'text-gray-900'],
  howler: ['bg-yellow-700', 'text-gray-050'],
};

/**
 * Tag object with name and tailwind color
 * @typedef {Object} Tag
 * @property {String} name
 * @property {String} color
 */

/**
 * Transform an array of tag names into an object.
 * @param {String[]} tags array of tag names for a portfolio card
 * @returns {Tag}
 */
const tagsStringToObject = (tags) =>
  tags.map((name) => ({
    name,
    color: TAG_COLORS[name],
  }));

/**
 * Whitelist for purgeCSS
 */
const whitelistedClasses = Object.values(TAG_COLORS).reduce(
  (whitelistedColors, currentColors) => [
    ...whitelistedColors,
    ...currentColors,
  ],
  []
);

module.exports = {
  tagsStringToObject,
  whitelistedClasses,
};
