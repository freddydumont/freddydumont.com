/** @jsx jsx **/
import { jsx } from 'theme-ui';
import { Tag } from '../../../../src/components/PortfolioCard';
import ThemeProvider from '../../../../src/components/ThemeProvider';
import { Flex } from '@theme-ui/components';

const tags = [
  {
    name: 'javascript',
    color: 'gray.9',
    bg: 'yellow_vivid.4',
  },
  { name: 'react', color: 'gray.9', bg: 'blue.4' },
  { name: 'gatsby', color: 'purple.1', bg: 'purple.7' },
  { name: 'jest', color: 'white', bg: 'red_vivid.8' },
];

const Tags = () => (
  <ThemeProvider>
    <Flex mx="auto" mb={8}>
      {tags.map((tag) => (
        <Tag
          key={tag.name}
          {...tag}
          sx={{
            // big fontsize and margins to compensate for novela's root font size
            fontSize: 'xl',
            marginRight: 3,
            marginBottom: 3,
          }}
        />
      ))}
    </Flex>
  </ThemeProvider>
);

export default Tags;
