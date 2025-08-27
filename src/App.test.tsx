import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Portafoli/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders home page content', () => {
  render(<App />);
  const programmingText = screen.getByText(/Programador Web/i);
  expect(programmingText).toBeInTheDocument();
});
