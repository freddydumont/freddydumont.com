import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import PortfolioCard from '../PortfolioCard';
import data from './fixtures/card_data.json';

describe('PortfolioCard', () => {
  const { queryByText, queryByTestId } = render(<PortfolioCard {...data} />);
  const technology = queryByText(/technology/i);
  const expandButton = queryByTestId('expand-button');

  it('should hide the technology section before expanding', () => {
    expect(technology).not.toBeInTheDocument();
    expect(queryByText(/go to project/i)).not.toBeInTheDocument();
  });

  it('should have an expand button', () => {
    expect(expandButton).toBeVisible();
  });

  it('should expand when clicking the expand button', async () => {
    const { queryByText, queryByTestId } = render(<PortfolioCard {...data} />);

    const button = queryByTestId('expand-button');

    fireEvent.click(button);

    await wait(() => {
      expect(queryByText(/technology/i)).toBeVisible();
      expect(button).not.toBeInTheDocument();
      expect(queryByText(/go to project/i)).toBeVisible();
    });
  });
});
