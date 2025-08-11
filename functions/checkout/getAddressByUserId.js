const pool = require('../../database/database');

// --- CORRECTED CODE ---

const getCartItems = async (req, res) => {
  // FIX 4: Get userId from URL parameters (req.params) to match the frontend call
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required in the URL.' });
  }

  try {
    // The query joins cart_items with menu_items to get all necessary details
    const result = await pool.query(
      `SELECT 
         ci.id, 
         ci.quantity, 
         mi.name AS menu_item_name, 
         mi.price, 
         mi.image_url
       FROM cart_items ci
       JOIN menu_items mi ON ci.menu_item_id = mi.id
       WHERE ci.user_id = $1`,
      [userId]
    );
    
    // The backend now correctly returns a direct array of cart items,
    // which the updated frontend code is designed to handle.
    return res.json(result.rows);

  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getCartItems;