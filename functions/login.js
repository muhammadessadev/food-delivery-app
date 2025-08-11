const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../database/database');

const login = async (req, res) => {
    const { username, password } = req.body;
console.log(username,password)
    try {
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (user.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        console.log(user.rows[0].password)
        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        console.log(validPassword)
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
  const payload = {
      userId: user.rows[0].id,
      username: user.rows[0].username,
      // add other user info/roles if needed
    };

    // Sign token, with expiry (e.g., 1 hour)
    const token = jwt.sign(payload, "SECRET_KEY", { expiresIn: '1h' });

    // Return token in response
    res.status(200).json({ message: 'Login successful', token });
      

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = login;