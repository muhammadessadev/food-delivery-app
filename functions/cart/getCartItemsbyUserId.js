const pool = require('../../database/database');

const getCartItemsByUserId = async (req, res) => {
 
  const { userId } = req.params;

  try {
    const result = await pool.query(`
      SELECT 
        ci.cart_item_id,
        ci.quantity,
        ci.note,
        ci.price,
        ci.total_price,
        mi.item_id AS menu_item_id,
        mi.name AS item_name,
        mi.image_url AS item_image,
        mi.price AS current_price,
        r.restaurent_id,
        r.restaurent_name,
        r.image_url AS restaurent_image,
        c.category_name AS restaurent_category
      FROM cart_items ci
      JOIN menu_items mi ON ci.menu_item_id = mi.item_id
      JOIN restaurents r ON mi.restaurent_id = r.restaurent_id
      JOIN categories c ON r.category_id = c.category_id
      WHERE ci.user_id = $1
    `, [userId]);

    res.status(200).json({ cartItems: result.rows });
  } catch (err) {
    console.error('Error fetching cart items:', err);
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

module.exports = getCartItemsByUserId;