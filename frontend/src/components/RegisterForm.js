import React from 'react';

const RegisterForm = ({ onSubmit, rollNumber, setRollNumber, password, setPassword }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Roll Number"
      value={rollNumber}
      onChange={(e) => setRollNumber(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Register</button>
  </form>
);

export default RegisterForm;
