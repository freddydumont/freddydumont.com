import React from 'react';
import { render, fireEvent } from '../../../test/test-utils';
import { PortfolioPure as Portfolio } from '../Portfolio';
import json from './fixtures/allPortfolioCard.json';
import tags from './fixtures/tags.json';

describe('Portfolio', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <Portfolio cards={json.data.allPortfolioCard.nodes} />
    );
    expect(container).toBeInTheDocument();
  });

  async function renderAndSelect() {
    const methods = render(
      <Portfolio cards={json.data.allPortfolioCard.nodes} />
    );

    // get a tag that's only present in 2 cards: emotion
    const selectedTag = tags.find((tag) => tag.name === 'emotion');

    // get input and focus it to trigger dropdown
    const input = methods.getAllByLabelText(/tags/i)[0];
    fireEvent.click(input);

    // get html element corresponding with tag and click on it
    const htmlTag = await methods.findAllByText(selectedTag.name);
    // should be the first one in the tree
    fireEvent.click(htmlTag[0]);

    return {
      ...methods,
      input,
      htmlTag,
      selectedTag,
    };
  }

  async function renderAndSelectMultiple() {
    const methods = render(
      <Portfolio cards={json.data.allPortfolioCard.nodes} />
    );

    // get two tags
    const selectedTags = tags.filter(
      (tag) => tag.name === 'react' || tag.name === 'redux'
    );

    // get input and focus it to trigger dropdown
    const input = methods.getAllByLabelText(/tags/i)[0];
    fireEvent.click(input);

    // get html element corresponding with tag and click on it
    const htmlTag = await methods.findAllByText(selectedTags[0].name);
    // should be the first one in the tree
    fireEvent.click(htmlTag[0]);

    // repeat for the second one
    const htmlTag1 = await methods.findAllByText(selectedTags[1].name);
    fireEvent.click(htmlTag1[0]);

    return {
      ...methods,
      input,
      htmlTags: [htmlTag, htmlTag1],
      selectedTags,
    };
  }

  it('should only render cards with matching selectedTag', async () => {
    const { getAllByTestId, selectedTag } = await renderAndSelect();
    // find all card tag containers and expect them to have the selected tag
    const allTagContainers = getAllByTestId('card-tag-container');
    allTagContainers.forEach((container) => {
      expect(container).toHaveTextContent(selectedTag.name);
    });
  });

  it('should only render cards that have ALL matching tags', async () => {
    const { getAllByTestId, selectedTags } = await renderAndSelectMultiple();

    // find all card tag containers and expect them to have the selected tag
    const allTagContainers = getAllByTestId('card-tag-container');
    allTagContainers.forEach((container) => {
      expect(container).toHaveTextContent(selectedTags[0].name);
      expect(container).toHaveTextContent(selectedTags[1].name);
    });
  });
});
