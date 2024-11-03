// Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';
import '../styles/Button.css'; // Ensure this path matches your actual CSS file location

const Register = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        rollNumber: String(rollNumber), // Ensure rollNumber is sent as a string
        password: password // Password is typically sent as a string
      };
      const response = await registerUser(userData);
      console.log(response?.data);
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      alert("Registration failed. Please try again.");
    }
  };
  
  return (
    <div style={styles.container}>
      <h2>Register to Vote</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '30px',
    borderRadius: '10px',
    background: 'linear-gradient(145deg, #2e2e2e, #4b4b4b)',
    color: '#f2f2f2',
    margin: '20px auto',
    width: '80%',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
  input: {
    display: 'block',
    margin: '10px auto',
    padding: '10px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
  },
};

export default Register;
