import React from 'react';
import { render } from '../../../test/test-utils';
import { AboutPure } from '../About';
import avatar from './fixtures/avatar.json';

describe('About section', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <AboutPure avatar={avatar.data.imageSharp.fluid} />
    );
    expect(container).toMatchSnapshot();
  });
});
