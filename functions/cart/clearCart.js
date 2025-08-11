const pool = require('../../database/database');

const clearCart = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required.' });
  }

  try {
    await pool.query(`DELETE FROM cart_items WHERE user_id = $1`, [userId]);
    return res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = clearCart;
