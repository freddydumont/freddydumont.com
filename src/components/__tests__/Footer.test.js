import React from 'react';
import { render } from '../../../test/test-utils';
import Footer from '../Footer';

describe('Footer', () => {
  it('should match snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
