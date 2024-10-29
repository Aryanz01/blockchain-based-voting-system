const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Blockchain Voting System Backend'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
