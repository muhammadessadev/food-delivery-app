const pool = require('../database/database');
const bcrypt = require('bcrypt');


// Create user api,(http://localhost:3000/users)
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING user_id, username, email, created_at`,
      [username, email, hashedPassword]
    );
    res.status(200).json({ user: result.rows[0] });
  } catch (err) {
    if (err.code === '23505') { // unique_violation
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Get All users

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'SELECT user_id, username, email, created_at FROM users WHERE user_id = $1 AND deleted_at IS NULL',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Delete user by ID
exports.deleteUser = async (req, res) => {
  const { id } = req.params; // Get the ID from the URL parameter

  try {
    // Implement a soft delete by setting deleted_at timestamp
    const result = await pool.query(
      'UPDATE users SET deleted_at = NOW() WHERE user_id = $1 RETURNING user_id, username, email',
      [id]
    );


    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found or already deleted.' });
    }

    res.status(200).json({ message: `User with ID ${id} deleted successfully.`, deletedUser: result.rows[0] });

  } catch (err) {
    console.error('Error deleting user:', err); // Log the error for debugging
    res.status(500).json({ message: 'Internal server error' });
  }
};