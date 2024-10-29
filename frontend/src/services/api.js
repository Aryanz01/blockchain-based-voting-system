import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Base URL for backend API


export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/api/register', userData);
    return response; // Make sure this returns the complete response object
  } catch (error) {
    console.error("Error in registerUser:", error);
    throw error; // Rethrow the error to be caught by handleSubmit
  }
};


export const voteParty = async (voteData) => {
  try {
    const response = await axios.post(`${API_URL}/vote`, voteData);
    return response;
  } catch (error) {
    console.error('Error casting vote:', error);
  }
};
