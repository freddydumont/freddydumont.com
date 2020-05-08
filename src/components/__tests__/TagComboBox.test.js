import React from 'react';
import { render, fireEvent } from '../../../test/test-utils';
import TagComboBox from '../TagComboBox';
import tags from './fixtures/tags.json';

describe('TagComboBox', () => {
  it('should render without crashing', () => {
    const { container } = render(<TagComboBox />);
    expect(container).toBeInTheDocument();
  });

  it('should display a tag dropdown when focusing input', async () => {
    const { getAllByLabelText, findByText } = render(<TagComboBox />);

    // get input and make sure it's rendered
    const input = getAllByLabelText(/tags/i)[0];
    expect(input).toBeInTheDocument();

    // send focus event to input, it should trigger dropdown
    fireEvent.focus(input);

    // if dropdown is triggered, the items should be in the document
    const item = await findByText(tags[0].name);
    expect(item).toBeInTheDocument();
  });

  it('should display a tag dropdown when clicking input', async () => {
    const { getAllByLabelText, findByText } = render(<TagComboBox />);

    // get input and make sure it's rendered
    const input = getAllByLabelText(/tags/i)[0];
    expect(input).toBeInTheDocument();

    // send focus event to input, it should trigger dropdown
    fireEvent.click(input);

    // if dropdown is triggered, the items should be in the document
    const item = await findByText(tags[0].name);
    expect(item).toBeInTheDocument();
  });

  it('should display ONLY the tags that include the search field input value', () => {
    const { container, getAllByLabelText, findByText, debug } = render(
      <TagComboBox />
    );

    // write something in the input eg. red
    const value = 'red';

    const input = getAllByLabelText(/tags/i)[0];
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value } });

    // go through all individual <li />
    const listItems = container.querySelectorAll(
      '[data-testid="dropdown"] > li'
    );

    // assert that the text content includes 'red'
    listItems.forEach((li) => expect(li).toHaveTextContent(value));
  });
});

async function renderAndSelect() {
  const methods = render(<TagComboBox />);

  // get a random tag from the list
  const selectedTag = tags[Math.floor(Math.random() * tags.length)];

  // get input and focus it to trigger dropdown
  const input = methods.getAllByLabelText(/tags/i)[0];
  fireEvent.click(input);

  // get html element corresponding with tag and click on it
  const htmlTag = await methods.findByText(selectedTag.name);
  fireEvent.click(htmlTag);

  return {
    ...methods,
    input,
    htmlTag,
    selectedTag,
  };
}

describe('When selecting a tag', () => {
  it('dropdown should be closed', async () => {
    const { getByTestId } = await renderAndSelect();
    // firstChild should be null when dropdown is closed
    expect(getByTestId('dropdown').firstChild).not.toBeInTheDocument();
  });

  it('tag should be displayed under input', async () => {
    const { selectedTag, findByTestId } = await renderAndSelect();
    const tagContainer = await findByTestId('tag-container');
    expect(tagContainer).toHaveTextContent(selectedTag.name);
  });

  it('tag should be removed from the dropdown list', async () => {
    const { getByTestId, input, selectedTag } = await renderAndSelect();

    // click triggers dropdown again
    fireEvent.click(input);

    expect(getByTestId('dropdown')).not.toHaveTextContent(selectedTag.name);
  });

  it('input should be empty', async () => {
    const { input } = await renderAndSelect();
    expect(input).not.toHaveValue();
  });
});

describe('When clicking a selected tag in the list', () => {
  it('should remove the tag from the list', async () => {
    const { selectedTag, findByTestId, getByText } = await renderAndSelect();

    // find the tag in tag-container and click it
    const tag = getByText(selectedTag.name);
    fireEvent.click(tag);

    // tag-container should not include the removed tag
    const tagContainer = await findByTestId('tag-container');
    expect(tagContainer).not.toHaveTextContent(selectedTag.name);
  });

  it('should add the tag back in the dropdown', async () => {
    const {
      getByTestId,
      input,
      selectedTag,
      getByText,
    } = await renderAndSelect();

    // find the tag in tag-container and click it
    const tag = getByText(selectedTag.name);
    fireEvent.click(tag);

    // click triggers dropdown again
    fireEvent.click(input);

    expect(getByTestId('dropdown')).toHaveTextContent(selectedTag.name);
  });
});
