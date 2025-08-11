const pool = require('../../database/database');

const getRestaurentsByCategoryId = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const query = `
      SELECT
        r.*,
        COALESCE(ROUND(AVG(rr.stars)::numeric, 1), 0) AS avg_rating,
        COUNT(rr.stars) AS rating_count,
        (
          SELECT MIN(mi.price)
          FROM menu_items mi
          WHERE mi.restaurent_id = r.restaurent_id
        ) AS price
      FROM restaurents r
      LEFT JOIN rating rr ON rr.restaurent_id = r.restaurent_id
      WHERE r.category_id = $1
      GROUP BY r.restaurent_id
    `;

    const result = await pool.query(query, [categoryId]); 

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No restaurents found for this category' });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getRestaurentsByCategoryId;
