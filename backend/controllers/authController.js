// backend/controllers/authController.js

const User = require('../models/User'); // Import the User model
const bcrypt = require('bcrypt'); // For hashing passwords
const jwt = require('jsonwebtoken'); // For generating JWT tokens

// Register function
exports.register = async (req, res) => {
  try {
    const { rollNumber, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ rollNumber });
    if (user) {
      return res.status(400).json({ message: 'User already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    user = new User({
      rollNumber,
      password: hashedPassword,
      uniqueId: `${rollNumber}-${Date.now()}`
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login function
exports.login = async (req, res) => {
  try {
    const { rollNumber, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ rollNumber });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};
