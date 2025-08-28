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

test('does not render Twitter links in social networks', () => {
  render(<App />);
  // Check that Twitter link is not present in the footer
  const twitterLinks = screen.queryAllByText(/Twitter/i);
  expect(twitterLinks).toHaveLength(0);
  
  // Verify that other social networks are still present
  const githubLinks = screen.getAllByText(/GitHub/i);
  expect(githubLinks.length).toBeGreaterThan(0);
  
  const linkedinLinks = screen.getAllByText(/LinkedIn/i);
  expect(linkedinLinks.length).toBeGreaterThan(0);
});
