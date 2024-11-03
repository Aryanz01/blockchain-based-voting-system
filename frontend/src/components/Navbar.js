import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';



const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/register" style={styles.link}>Register</Link>
      <Link to="/vote" style={styles.link}>Vote</Link>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '15px 20px',
    background: 'linear-gradient(90deg, #1f1f1f, #3a3a3a)',
    display: 'flex',
    justifyContent: 'space-around',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  link: {
    color: '#f2f2f2',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  linkHover: {
    color: '#00d8ff',
    transform: 'scale(1.1)',
  },
};

export default Navbar;
