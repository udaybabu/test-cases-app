// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Login from './login';

// describe('Login Component (using data-testid)', () => {
//   test('renders login form elements', () => {
//     render(<Login onLogin={jest.fn()} />);
    
//     expect(screen.getByTestId('login-form')).toBeInTheDocument();
//     expect(screen.getByTestId('email-input')).toBeInTheDocument();
//     expect(screen.getByTestId('password-input')).toBeInTheDocument();
//     expect(screen.getByTestId('login-button')).toBeInTheDocument();
//   });

//   test('calls onLogin with email and password when submitted', () => {
//     const mockLogin = jest.fn();
//     render(<Login onLogin={mockLogin} />);

//     fireEvent.change(screen.getByTestId('email-input'), {
//       target: { value: 'test@example.com' },
//     });

//     fireEvent.change(screen.getByTestId('password-input'), {
//       target: { value: 'secret123' },
//     });

//     fireEvent.click(screen.getByTestId('login-button'));

//     expect(mockLogin).toHaveBeenCalledWith({
//       email: 'test@example.com',
//       password: 'secret123',
//     });
//   });

//   test('does not call onLogin if fields are empty', () => {
//     const mockLogin = jest.fn();
//     render(<Login onLogin={mockLogin} />);

//     fireEvent.click(screen.getByTestId('login-button'));

//     expect(mockLogin).not.toHaveBeenCalled();
//   });
// });
