import React from 'react';

const VoteForm = ({ partyId, setPartyId, onVote }) => (
  <div>
    <h2>Cast Your Vote</h2>
    <select onChange={(e) => setPartyId(e.target.value)}>
      <option value="">Select Party</option>
      <option value="party1">Party 1</option>
      <option value="party2">Party 2</option>
      {/* Add more parties as needed */}
    </select>
    <button onClick={onVote}>Vote</button>
  </div>
);

export default VoteForm;
