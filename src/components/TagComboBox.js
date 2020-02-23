import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Label, Input } from '@theme-ui/components';
import { useCombobox } from 'downshift';

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

export const PureTagComboBox = ({ tags: tagData }) => {
  const [tags, setTags] = useState(tagData);
  const {
    isOpen,
    openMenu,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: tags.map((item) => item.name),
  });

  return (
    <Box mb={12}>
      <Label {...getLabelProps()}>Filter by technology tags</Label>
      <Input
        {...getInputProps({
          onFocus: openMenu,
        })}
      />
      <ul {...getMenuProps()}>
        {isOpen &&
          tags.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
              }
              key={`${item.name}${index}`}
              {...getItemProps({ item: item.name, index })}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </Box>
  );
};

export default TagComboBox;
