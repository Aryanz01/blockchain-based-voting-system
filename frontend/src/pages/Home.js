import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Blockchain Voting System</h1>
      <p>
        <Link to="/register">Register Here</Link> to participate in voting, or 
        <Link to="/vote"> Vote Now</Link> if you are already registered.
      </p>
    </div>
  );
};

export default Home;
