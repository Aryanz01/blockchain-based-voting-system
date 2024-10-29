import React, { useState } from 'react';
import { voteParty } from '../services/api';

const Vote = () => {
  const [partyId, setPartyId] = useState('');

  const handleVote = async () => {
    const response = await voteParty({ partyId });
    console.log(response.data); // Log the response for now
  };

  return (
    <div>
      <h2>Cast Your Vote</h2>
      <select onChange={(e) => setPartyId(e.target.value)}>
        <option value="">Select Party</option>
        <option value="party1">Party 1</option>
        <option value="party2">Party 2</option>
        {/* Add more parties as needed */}
      </select>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
};

export default Vote;
