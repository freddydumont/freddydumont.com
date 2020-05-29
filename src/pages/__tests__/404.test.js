import React from 'react';
import { render } from '../../../test/test-utils';
import NotFoundPage from '../404';

describe('404 page', () => {
  it('should match snapshot', () => {
    const { container } = render(<NotFoundPage />);
    expect(container).toMatchSnapshot();
  });
});
