const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/login', async (req, res) => {
    const { email_id, password } = req.body;

    if (!email_id || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
      const user = await db.collection('login').findOne({ email_id, password });

      if (user) {
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  return router;
};