/**
 * Add new tags here. Format is `name: [backgroundColor, textColor]`
 * Name must match with a tag found in `portfolio.json`.
 */
const TAG_COLORS = {
  javascript: ['yellow_vivid.4', 'gray.9'],
  react: ['blue.4', 'gray.9'],
  gatsby: ['purple.7', 'purple.1'],
  bulma: ['teal_vivid.2', 'teal_vivid.9'],
  redux: ['purple.6', 'purple.1'],
  jest: ['red_vivid.8', 'white'],
  emotion: ['pink.4', 'gray.9'],
  bootstrap: ['purple.8', 'purple.1'],
  sass: ['pink.5', 'gray.9'],
  redux_saga: ['green.5', 'gray.9'],
  phaser: ['orange.6', 'gray.9'],
  typescript: ['blue.7', 'white'],
  xstate: ['black', 'gray.0'],
  'rot.js': ['black', 'gray.0'],
  tachyons: ['gray.0', 'gray.9'],
  howler: ['yellow.7', 'gray.0'],
};

/**
 * Tag object with name and ThemeUI color
 * @typedef {Object} Tag
 * @property {String} name
 * @property {String} color text color
 * @property {String} bg background color
 */

/**
 * Transform an array of tag names into an object.
 * @param {String[]} tags array of tag names for a portfolio card
 * @returns {Tag}
 */
const tagsStringToObject = (tags) =>
  tags.map((name) => ({
    name,
    color: TAG_COLORS[name][1],
    bg: TAG_COLORS[name][0],
  }));

module.exports = {
  tagsStringToObject,
};
