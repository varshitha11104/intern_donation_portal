const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/dashboard', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });
        const randomDonation = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      name: user.name,
      referralCode: user.name + '2025',
      totalDonations: randomDonation,
    });
  } catch (err) {
    console.error('Dashboard error:', err);
    res.status(500).json({ message: "Error fetching dashboard data" });
  }
});

module.exports = router;

