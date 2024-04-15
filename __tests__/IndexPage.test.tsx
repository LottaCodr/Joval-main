// IndexPage.test.tsx

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IndexPage from '../app/page';
import { test } from '@jest/globals';


test('renders IndexPage component', () => {
  render(<IndexPage />);

  // Assert that the component renders with the correct content
  expect(screen.getByText('Joval Investment Limited')).toBeInTheDocument();
  expect(screen.getByText('We offer 7 a side football pitch, based in Lifecamp Abuja with cafe that is fired up to settle any appetite after a match or if you just want to spectate with a good meal and drink.')).toBeInTheDocument();

  // Assert that the "Get Started" link is present with the correct href
  const getStartedLink = screen.getByText('Get Started');
  expect(getStartedLink).toBeInTheDocument();
  expect(getStartedLink.getAttribute('href')).toBe('/login');
});
