import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PureTagComboBox } from '../TagComboBox';
import tags from './fixtures/tags.json';

describe('TagComboBox', () => {
  it('should render without crashing', () => {
    const { container } = render(<PureTagComboBox tags={tags} />);
    expect(container).toBeInTheDocument();
  });

  it('should display a tag dropdown when focusing input', async () => {
    const { getAllByLabelText, findByText } = render(
      <PureTagComboBox tags={tags} />
    );

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
    const { getAllByLabelText, findByText } = render(
      <PureTagComboBox tags={tags} />
    );

    // get input and make sure it's rendered
    const input = getAllByLabelText(/tags/i)[0];
    expect(input).toBeInTheDocument();

    // send focus event to input, it should trigger dropdown
    fireEvent.click(input);

    // if dropdown is triggered, the items should be in the document
    const item = await findByText(tags[0].name);
    expect(item).toBeInTheDocument();
  });
});

describe('When selecting a tag', () => {
  async function renderAndSelect() {
    const methods = render(<PureTagComboBox tags={tags} />);

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
