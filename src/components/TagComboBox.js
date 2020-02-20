import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Label, Input } from '@theme-ui/components';

const TagComboBox = () => {
  const {
    allTag: { nodes: tags },
  } = useStaticQuery(graphql`
    query {
      allTag {
        nodes {
          bg
          color
          name
        }
      }
    }
  `);

  return <PureTagComboBox tags={tags} />;
};

export const PureTagComboBox = ({ tags }) => {
  const [items, setItems] = useState(tags);

  return (
    <Box mb={12}>
      <Label htmlFor="tags">Filter by technology tags</Label>
      <Input name="tags" id="tags" />
    </Box>
  );
};

export default TagComboBox;
