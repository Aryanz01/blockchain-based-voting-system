import React from 'react';
import '../styles/Button.css';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Blockchain Voting System</h1>
      <p style={styles.subtitle}>Your vote, secured and transparent.</p>
      <button className="button">Get Started</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    color: '#f2f2f2',
    background: 'linear-gradient(145deg, #2e2e2e, #4b4b4b)',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    width: '80%',
    margin: 'auto',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.2em',
    marginBottom: '30px',
  }
};

export default Home;
