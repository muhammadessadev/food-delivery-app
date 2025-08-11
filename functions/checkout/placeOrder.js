const pool = require('../../database/database');

const placeOrder = async (req, res) => {
  const { paymentMethod, address, country } = req.body;
  const userId = req.user?.id;

  if (!paymentMethod || !address || !country) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // 1. Insert or update user address and get address_id
    const addressResult = await client.query(
      `INSERT INTO user_addresses (user_id, address, country)
       VALUES ($1, $2, $3)
       ON CONFLICT (user_id) DO UPDATE SET address = $2, country = $3
       RETURNING address_id`,
      [userId, address, country]
    );
    const addressId = addressResult.rows[0].address_id;

    // 2. Fetch user's cart items
    const cartResult = await client.query(
      `SELECT * FROM cart_items WHERE user_id = $1`,
      [userId]
    );
    const cartItems = cartResult.rows;

    if (cartItems.length === 0) {
      await client.query('ROLLBACK');
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const subtotal = cartItems.reduce((acc, item) => acc + item.total_price, 0);
    const deliveryFee = 150;
    const total = subtotal + deliveryFee;

    // 3. Get restaurent_id from first cart item (assuming one restaurant per order)
    const restaurentId = cartItems[0].restaurent_id;

    // 4. Insert into orders
    const orderResult = await client.query(
      `INSERT INTO orders (user_id, restaurent_id, address_id, total_amount, delivery_fee, payment_method)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING order_id`,
      [userId, restaurentId, addressId, total, deliveryFee, paymentMethod]
    );

    const orderId = orderResult.rows[0].order_id;

    // 5. Insert each order item
    const insertItemsPromises = cartItems.map(item =>
      client.query(
        `INSERT INTO order_items (order_id, item_id, quantity)
         VALUES ($1, $2, $3)`,
        [orderId, item.menu_item_id, item.quantity]
      )
    );

    await Promise.all(insertItemsPromises);

    // 6. Clear user's cart
    await client.query(
      `DELETE FROM cart_items WHERE user_id = $1`,
      [userId]
    );

    await client.query('COMMIT');

    res.status(200).json({ message: 'Order placed successfully', orderId });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Order placement error:', error);
    res.status(500).json({ error: 'Failed to place order' });
  } finally {
    client.release();
  }
};

module.exports = placeOrder;
