/** @jsx jsx **/
import { jsx, useThemeUI } from 'theme-ui';
import { useContext } from 'react';
import { Box, Label } from '@theme-ui/components';
import Select from 'react-select';
import { SelectedTagsContext } from './SelectedTagsProvider';

const TagComboBox = () => {
  const [state, dispatch] = useContext(SelectedTagsContext);
  const { theme: themeUI } = useThemeUI();

  return (
    <Box mb={12}>
      <Label id="tag-select" sx={{ pl: '2px' }}>
        Search and filter by technology tags
      </Label>
      <Select
        isMulti
        isSearchable
        isClearable
        name="tags"
        aria-labelledby="tag-select"
        options={state.tags}
        onChange={(updatedState) => {
          dispatch({
            type: 'UPDATE_TAGS',
            updatedState,
          });
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            // colors for components here:
            // https://github.com/JedWatson/react-select/tree/master/packages/react-select/src/components
            ...theme.colors,
            primary25: themeUI.colors.primaryHover,
            primary50: themeUI.colors.teal_vivid[3],
            primary75: themeUI.colors.teal_vivid[4],
            primary: themeUI.colors.primary,
            danger: themeUI.colors.red_vivid[4],
            dangerLight: 'transparent',
            neutral0: themeUI.colors.gray[9],
            neutral5: themeUI.colors.gray[8],
            neutral10: themeUI.colors.gray[7],
            neutral20: themeUI.colors.gray[6],
            neutral30: themeUI.colors.gray[5],
            neutral40: themeUI.colors.gray[4],
            neutral50: themeUI.colors.gray[3],
            neutral60: themeUI.colors.gray[2],
            neutral70: themeUI.colors.gray[1],
            neutral80: themeUI.colors.gray[0],
            neutral90: themeUI.colors.gray[0],
          },
        })}
        // text in dropdown inherits color set here
        sx={{
          color: 'gray.0',
        }}
      />
    </Box>
  );
};

export default TagComboBox;
