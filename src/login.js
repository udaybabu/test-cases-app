import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="login-form">
      <input
        data-testid="email-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        data-testid="password-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button data-testid="login-button" type="submit">Login</button>
    </form>
  );
};

export default Login;
