import React, { useContext } from 'react';
import { Box, Label, Input } from '@theme-ui/components';
import { useCombobox } from 'downshift';
import { SelectedTagsContext } from './SelectedTagsProvider';

const TagComboBox = () => {
  const [state, dispatch] = useContext(SelectedTagsContext);
  const {
    isOpen,
    openMenu,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    setInputValue,
  } = useCombobox({
    items: state.tags,
    defaultInputValue: '',
    circularNavigation: true,
    onSelectedItemChange: (changes) => {
      setInputValue('');
      dispatch({
        type: 'SELECT_TAG',
        tag: changes.selectedItem,
      });
    },
  });

  return (
    <Box mb={12}>
      <Label {...getLabelProps()}>Filter by technology tags</Label>
      <Input
        {...getInputProps({
          onFocus: openMenu,
          onClick: openMenu,
        })}
      />
      <Box
        as="ul"
        sx={{
          border: (theme) => `solid 1px ${theme.colors.primary}`,
        }}
        {...getMenuProps({
          'data-testid': 'dropdown',
        })}
      >
        {isOpen &&
          state.tags.map((tag, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
              }
              key={`${tag}${index}`}
              {...getItemProps({ item: tag, index })}
            >
              {tag}
            </li>
          ))}
      </Box>
      <ul data-testid="tag-container">
        {state.selectedTags.length > 0 &&
          state.selectedTags.map((tag, index) => (
            <li key={`${tag}${index}`}>{tag}</li>
          ))}
      </ul>
    </Box>
  );
};

export default TagComboBox;
