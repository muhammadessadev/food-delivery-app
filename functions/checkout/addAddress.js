// backend/checkout/addAddress.js
const pool = require('../../database/database');

const addAddress = async (req, res) => {
  const { country, address } = req.body;
  const userId = req.user?.id;

  if (!userId || !country || !address) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await pool.query(
      `INSERT INTO user_addresses (user_id, country, address)
       VALUES ($1, $2, $3)
       ON CONFLICT (user_id) DO UPDATE SET country = $2, address = $3`,
      [userId, country, address]
    );
    res.status(200).json({ message: 'Address saved' });
  } catch (error) {
    console.error('Error saving address:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = addAddress;
