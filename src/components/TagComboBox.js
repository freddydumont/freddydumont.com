import React, { useContext } from 'react';
import { Box, Label } from '@theme-ui/components';
import Select from 'react-select';
import { SelectedTagsContext } from './SelectedTagsProvider';

const TagComboBox = () => {
  const [state] = useContext(SelectedTagsContext);

  return (
    <Box mb={12}>
      <Label id="tag-select">Filter by technology tags</Label>
      <Select
        isMulti
        isSearchable
        isClearable
        name="tags"
        aria-labelledby="tag-select"
        options={state.tags}
      />
    </Box>
  );
};

export default TagComboBox;
