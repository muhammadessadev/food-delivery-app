const pool = require('../database/database');

exports.createCustomer = async (req, res) => {
  const { restaurent_id, name, email, phone } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO restaurent_customers (restaurent_id, name, email, phone)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [restaurent_id, name, email, phone]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error inserting customer:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// GET all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM restaurent_customers ORDER BY customer_id ASC`);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET customer by ID
exports.getCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM restaurent_customers WHERE customer_id = $1`,
      [id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// UPDATE customer
exports.updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const result = await pool.query(
      `UPDATE restaurent_customers
       SET name = $1, email = $2, phone = $3, updated_at = CURRENT_TIMESTAMP
       WHERE customer_id = $4
       RETURNING *`,
      [name, email, phone, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// DELETE customer
exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `DELETE FROM restaurent_customers WHERE customer_id = $1 RETURNING *`,
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
