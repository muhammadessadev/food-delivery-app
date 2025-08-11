const pool = require('../database/database');

exports.createRestaurent = async (req, res) => {
  console.log(' POST  restaurents called');
  console.log('Request body:', req.body);

  const { name, address, phone, email } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO restaurents (name, address, phone, email)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, address, phone, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(" DB Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};


// GET all restaurents
exports.getRestaurents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM restaurents WHERE is_deleted = FALSE ORDER BY restaurant_id ASC');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE a restaurant by ID
exports.updateRestaurent = async (req, res) => {
  const { id } = req.params;
  const { name, address, phone, email } = req.body;

  console.log(id)
  console.log("body" , name, email, address, phone)
  try {
    const result = await pool.query(
      `UPDATE restaurents
       SET name = $1,
           address = $2,
           phone = $3,
           email = $4,
           updated_at = CURRENT_TIMESTAMP
       WHERE restaurant_id = $5
       RETURNING *`,
      [name, address, phone, email, id]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE a restaurant by ID
exports.deleteRestaurent = async (req, res) => {
  const { restaurentId } = req.params;
    console.log(restaurentId)
  try {
    const result = await pool.query(
      'UPDATE restaurents SET is_deleted = true WHERE restaurent_id = $1',
      [restaurantId]
    );

    console.log(result)
    res.status(200).json({ message: 'Restaurent deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
