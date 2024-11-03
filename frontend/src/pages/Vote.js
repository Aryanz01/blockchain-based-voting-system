// Vote.js
import React, { useState } from 'react';

import '../styles/Button.css'; // Ensures button styling matches the Register page

import { voteParty } from '../services/api';


const Vote = () => {
  const [candidateId, setCandidateId] = useState('');
  const [voterPassword, setVoterPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await voteParty({ candidateId, voterPassword });
      console.log(response?.data);
      alert("Vote submitted successfully!");
    } catch (error) {
      console.error("Error during voting:", error);
      alert("Voting failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Cast Your Vote</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Candidate ID"
          value={candidateId}
          onChange={(e) => setCandidateId(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Voter Password"
          value={voterPassword}
          onChange={(e) => setVoterPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" className="button">Submit Vote</button>
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

export default Vote;
