import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../../pages/Login';

describe('Login Page', () => {
  test('renders login form', () => {
    render(<Login />);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  test('submits form', () => {
    render(<Login />);
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    // Expectation depends on your implementation (e.g., API call mock or redirect)
  });
});
