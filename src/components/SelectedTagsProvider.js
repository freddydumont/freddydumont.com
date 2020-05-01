import React, { useReducer, createContext } from 'react';
import { TAG_COLORS } from '../utils/tags';

/** tags will move from one array to the other when selected or deleted */
const initialState = {
  /** @type {string[]} tags tags displayed in the dropdown */
  tags: Object.keys(TAG_COLORS),
  /** @type {string[]} selectedTags tags selected to be displayed under the input */
  selectedTags: [],
};

// Create Context Object
export const SelectedTagsContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_TAG':
      return {
        tags: state.tags.filter((tag) => tag !== action.tag),
        selectedTags: [...state.selectedTags, action.tag],
      };
    case 'REMOVE_TAG':
      return {
        tags: [...state.tags, action.tag],
        selectedTags: state.selectedTags.filter((tag) => tag !== action.tag),
      };
    default:
      throw new Error();
  }
}

// Create a provider for components to consume and subscribe to changes
const SelectedTagsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SelectedTagsContext.Provider value={[state, dispatch]}>
      {children}
    </SelectedTagsContext.Provider>
  );
};

export default SelectedTagsProvider;
