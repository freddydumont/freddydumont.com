const path = require('path');
const portfolio = require('./src/data/portfolio.json');
const colors = require('./src/data/tag_colors.json');

/**
 * Create custom PortfolioCard nodes.
 * Some processing is needed for the tags because the colors are stored in
 * another json file.
 *
 * We also need to 'trick' the sharp transformer to process the image file
 * by building a node with the structure of a File.
 * @see https://stackoverflow.com/a/56012718
 */
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  portfolio.forEach((card) => {
    const {
      title,
      category,
      description,
      technology,
      link,
      image,
      alt,
      tags,
    } = card;

    // get the name and extension of an image's relative path
    const { name, ext } = path.parse(image);

    // get the image's absolute path. The image path is from the root in the
    // json file to have the proper path here
    const absolutePath = path.resolve(__dirname, image);

    // build the data corresponding to an image node in order to have it
    // processed by sharp
    const data = {
      name,
      ext,
      absolutePath, // <-- required
      extension: ext.substring(1), // <-- required, remove the dot in `ext`
    };

    // build and create the image node
    const imageNode = {
      ...data,
      id: createNodeId(`card-image-${name}`),
      children: [],
      internal: {
        type: 'PortfolioCardImage',
        contentDigest: createContentDigest(data),
      },
    };

    actions.createNode(imageNode);

    const node = {
      title,
      category,
      description,
      technology,
      link,
      // when imageNode is created, the sharp plugin adds childImageSharp to the node
      image: imageNode,
      alt,
      tags: tags.map((name) => ({
        name,
        color: colors[name],
      })),
      id: createNodeId(`card-${title}`),
      internal: {
        type: 'PortfolioCard',
        contentDigest: createContentDigest(card),
      },
    };

    actions.createNode(node);
  });
};
