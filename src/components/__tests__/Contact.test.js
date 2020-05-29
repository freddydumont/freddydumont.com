import React from 'react';
import { render } from '../../../test/test-utils';
import Contact from '../Contact';

describe('Contact form', () => {
  const { getByLabelText, getByText, getByTestId } = render(<Contact />);
  const title = getByText('Contact');
  const button = getByTestId('button');
  const firstName = getByLabelText('First Name*');
  const lastName = getByLabelText('Last Name');
  const email = getByLabelText('Email address*');
  const message = getByLabelText('Message*');

  it('should display a title', () => {
    expect(title).toBeInTheDocument();
  });

  it('should have a required first name field', () => {
    expect(firstName).toBeRequired();
  });

  it('should have an optional last name field', () => {
    expect(lastName).not.toBeRequired();
  });

  it('should have a required email field', () => {
    expect(email).toBeRequired();
  });

  it('should have a required message field', () => {
    expect(message).toBeRequired();
  });

  it('should have a send button', () => {
    expect(button).toHaveTextContent('Send');
  });

  it('should match snapshot', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
