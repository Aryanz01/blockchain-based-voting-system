const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  rollNumber: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  hasVoted: { type: Boolean, default: false },
  uniqueId: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
