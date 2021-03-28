import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<App />);
  const linkElement = screen.getByText(/Ewok/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
