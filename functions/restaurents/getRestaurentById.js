const pool = require('../../database/database')

const getRestaurentById = async (req, res) => {
    const { restaurentId } = req.params;

    try {
        // Get restaurant details, avg rating, rating count, and price
        const restaurentResult = await pool.query(
            `SELECT r.*,
                COALESCE(ROUND(AVG(rr.stars)::numeric, 1), 0) AS avg_rating,
                COUNT(rr.stars) AS rating_count,
                (
                    SELECT MIN(mi.price)
                    FROM menu_items mi
                    WHERE mi.restaurent_id = r.restaurent_id
                ) AS price
            FROM restaurents r
            LEFT JOIN rating rr ON rr.restaurent_id = r.restaurent_id
            WHERE r.restaurent_id = $1
            GROUP BY r.restaurent_id;`,
            [restaurentId]
        );

        if (restaurentResult.rows.length === 0) {
            return res.status(404).json({ message: 'No restaurant found for this Id' });
        }

        // Get menu items for this restaurant
        const menuResult = await pool.query(
            'SELECT * FROM menu_items WHERE restaurent_id = $1',
            [restaurentId]
        );

        res.json({
            ...restaurentResult.rows[0],
            menu_items: menuResult.rows
        });
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = getRestaurentById;