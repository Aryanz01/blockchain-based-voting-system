// backend/controllers/voteController.js

const Vote = require('../models/Vote'); // Import the Vote model
const User = require('../models/User'); // Import the User model

// Vote function
exports.vote = async (req, res) => {
  try {
    const { partyId } = req.body;
    const userId = req.userId; // Assuming this comes from JWT authentication middleware

    // Check if the user has already voted
    const user = await User.findById(userId);
    if (user.hasVoted) {
      return res.status(400).json({ message: 'User has already voted' });
    }

    // Record the vote
    const vote = new Vote({
      partyId,
      voterId: userId
    });

    await vote.save();

    // Mark the user as having voted
    user.hasVoted = true;
    await user.save();

    res.status(200).json({ message: 'Vote cast successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error casting vote', error });
  }
};
