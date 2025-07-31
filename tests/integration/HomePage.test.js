import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/HomePage';

describe('HomePage', () => {
  test('displays welcome message', () => {
    render(<HomePage />);
    expect(screen.getByText(/Welcome to Coding Ninjas Clone/i)).toBeInTheDocument();
  });
});
