const path = require('path');
const portfolio = require('./src/data/portfolio.json');
const { tagsStringToObject } = require('./src/utils/tags');
const kebabCase = require(`lodash.kebabcase`);

const IMAGE_PATH = './src/assets/';

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

    // name, extension and absolute path are required to build a File node
    const { name, ext } = path.parse(image);
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, image);

    // this data corresponds to a File node that Sharp can process
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
      // so it will be available under the `image` field.
      image: imageNode,
      alt,
      tags: tagsStringToObject(tags),
      id: createNodeId(`card-${title}`),
      internal: {
        type: 'PortfolioCard',
        contentDigest: createContentDigest(card),
      },
    };

    actions.createNode(node);
  });
};

/**
 * Customizing blog posts path
 * @see https://github.com/LekoArts/gatsby-themes/issues/428
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions;

  /** If the slug is provided, append `blog/` to it else create slug from title */
  const customSlug = (source) => {
    const title = kebabCase(source.title);
    const slug = source.slug ? `blog/${source.slug}` : `blog/${title}`;

    return `/${slug}`.replace(/\/\/+/g, `/`);
  };

  createFieldExtension({
    name: `customSlug`,
    extend() {
      return {
        resolve: customSlug,
      };
    },
  });

  createTypes(`
    interface Post @nodeInterface {
      slug: String! @customSlug
    }
    
    type MdxPost implements Node & Post {
      slug: String! @customSlug
    }
  `);
};
