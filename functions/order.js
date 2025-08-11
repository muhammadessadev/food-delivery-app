const pool = require('../database/database');

// 1️⃣ Create a new order
exports.createOrder = async (req, res) => {
  const { customer_id, restaurent_id, total_amount, status } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO orders (customer_id, restaurent_id, total_amount, status)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [customer_id, restaurent_id, total_amount, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// 2️⃣ Get all orders for a restaurant (excluding deleted orders)
exports.getOrdersByRestaurentId = async (req, res) => {
  const { restaurent_id } = req.params;

  try {
    const result = await pool.query(
      `SELECT * FROM orders 
       WHERE restaurent_id = $1 AND is_deleted = FALSE 
       ORDER BY order_id ASC`,
      [restaurent_id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// 3️⃣ Update an order by ID (only if not deleted)
exports.updateOrderById = async (req, res) => {
  const { id } = req.params;
  const { customer_id, restaurent_id, total_amount, status } = req.body;

  try {
    const result = await pool.query(
      `UPDATE orders
       SET customer_id = $1,
           restaurent_id = $2,
           total_amount = $3,
           status = $4,
           updated_at = CURRENT_TIMESTAMP
       WHERE order_id = $5 AND is_deleted = FALSE
       RETURNING *`,
      [customer_id, restaurent_id, total_amount, status, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Order not found or already deleted' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error updating order:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// 4️⃣ Soft delete an order by ID
exports.deleteOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `UPDATE orders
       SET is_deleted = TRUE,
           updated_at = CURRENT_TIMESTAMP
       WHERE order_id = $1
       RETURNING *`,
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Order not found or already deleted' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error("Error deleting order:", error.message);
    res.status(500).json({ error: error.message });
  }
};
