import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

export const voteParty = async (voteData) => {
    return await axios.post(`${API_URL}/vote`, voteData);
};
