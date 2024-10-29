const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
  partyId: { type: String, required: true },
  voterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Vote', VoteSchema);
