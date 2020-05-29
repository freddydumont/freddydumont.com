import React from 'react';
import { render } from '../../../test/test-utils';
import Home from '../Home';
import MainMenu from '../MainMenu';

describe('Home with main menu', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Home>
        <MainMenu />
      </Home>
    );
    expect(container).toMatchSnapshot();
  });
});
