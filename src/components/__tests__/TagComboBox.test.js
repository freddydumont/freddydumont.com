import React from 'react';
import { render } from '@testing-library/react';
import { PureTagComboBox } from '../TagComboBox';
import tags from './fixtures/tags.json';

describe('PortfolioCard', () => {
  const { container } = render(<PureTagComboBox tags={tags} />);

  it('should render without crashing', () => {
    expect(container).toBeInTheDocument();
  });
});
