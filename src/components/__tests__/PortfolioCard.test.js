/* eslint-disable jest/expect-expect */
import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import { createModel } from '@xstate/test';
import PortfolioCard, { cardMachine } from '../PortfolioCard';
import data from './fixtures/card_data.json';

describe('PortfolioCard', () => {
  const cardModel = createModel(cardMachine).withEvents({
    EXPAND: ({ queryByTestId }) => {
      fireEvent.click(queryByTestId('expand-button'));
    },
  });

  // Get test plans to all states via simple paths
  const testPlans = cardModel.getShortestPathPlans({
    filter: (state) => console.log(state.value) || true,
  });

  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      afterEach(cleanup);
      plan.paths.forEach((path) => {
        it(path.description, () => {
          const rendered = render(<PortfolioCard {...data} />);
          return path.test({ ...rendered, wait });
        });
      });
    });
  });

  it('has full coverage', () => {
    cardModel.testCoverage();
  });
});
