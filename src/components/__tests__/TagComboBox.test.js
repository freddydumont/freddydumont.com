import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PureTagComboBox } from '../TagComboBox';
import tags from './fixtures/tags.json';

describe('PortfolioCard', () => {
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
});
