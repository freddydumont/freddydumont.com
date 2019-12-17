import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PortfolioCard from '../PortfolioCard';
import data from './fixtures/card_data.json';

describe('PortfolioCard', () => {
  const { getByText, queryByTestId } = render(<PortfolioCard {...data} />);
  const technology = getByText(/technology/i);
  const expandButton = queryByTestId('expand-button');

  it('should hide the technology section before expanding', () => {
    expect(technology).not.toBeVisible();
  });

  it('should have an expand button', () => {
    expect(expandButton).toBeVisible();
  });

  it('should expand when clicking the expand button', () => {
    fireEvent.click(expandButton);

    expect(technology).toBeVisible();
    expect(expandButton).not.toBeVisible();
  });
});
