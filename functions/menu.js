exports.createMenuItem = async (req, res) => {
  const { restaurent_id, name, description, price } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO menu_items (restaurent_id, name, description, price)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [restaurent_id, name, description, price]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(" Error creating menu item:", error.message);
    res.status(500).json({ error: error.message });
  }
};
exports.getMenuItemsByRestaurentId = async (req, res) => {
  const { restaurentId } = req.params;

  try {
    const result = await pool.query(
      `SELECT * FROM menu_items WHERE restaurent_id = $1 ORDER BY item_id ASC`,
      [restaurentId]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(" Error fetching menu items:", error.message);
    res.status(500).json({ error: error.message });
  }
};
exports.updateMenuItem = async (req, res) => {
  const { itemId } = req.params;
  const { name, description, price } = req.body;

  try {
    const result = await pool.query(
      `UPDATE menu_items
       SET name = $1,
           description = $2,
           price = $3,
           updated_at = CURRENT_TIMESTAMP
       WHERE item_id = $4
       RETURNING *`,
      [name, description, price, itemId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(" Error updating menu item:", error.message);
    res.status(500).json({ error: error.message });
  }
};
exports.deleteMenuItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    const result = await pool.query(
      `DELETE FROM menu_items WHERE item_id = $1`,
      [itemId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    console.error(" Error deleting menu item:", error.message);
    res.status(500).json({ error: error.message });
  }
};
