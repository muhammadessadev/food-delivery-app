const pool = require('../../database/database');

const deleteCartItem = async (req, res) => {
  const { id } = req.params; // Changed from req.params.cartId to req.params.id

  if (!id) {
    return res.status(400).json({ error: 'Cart item ID is required.' });
  }

  try {
    const result = await pool.query(
      `DELETE FROM cart_items WHERE cart_item_id = $1 RETURNING *`,
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    return res.json({ message: 'Cart item deleted successfully', deletedItem: result.rows[0] });
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = deleteCartItem;