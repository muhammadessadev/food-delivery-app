const pool = require('../../database/database');

const addCartItem = async (req, res) => {
  const { user_id, restaurent_id, menu_item_id, quantity, note } = req.body;

  try {// Get item price from menu_items table
    const itemResult = await pool.query(
      'SELECT price FROM menu_items WHERE item_id = $1',
      [menu_item_id]
    );

    if (itemResult.rows.length === 0) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    const item_price = itemResult.rows[0].price;
    const total_price = item_price * quantity;

    const result = await pool.query(
      `INSERT INTO cart_items (user_id, restaurent_id, menu_item_id, quantity, price, total_price, note)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (user_id, menu_item_id)
       DO UPDATE SET quantity = cart_items.quantity + EXCLUDED.quantity, note = EXCLUDED.note
       RETURNING *`,
      [user_id, restaurent_id, menu_item_id, quantity, item_price, total_price, note]
    );

    res.status(200).json({ message: 'Item added/updated in cart', item: result.rows[0] });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

module.exports = addCartItem;
