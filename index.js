const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Basic Auth & Middleware
const welcome = require('./functions/welcome');
const signup = require('./functions/signup');
const login = require('./functions/login');
const authentication = require('./functions/authentication');
const loggin = require('./middleware/loggin');

// Categories
const getCategories = require('./functions/categories/getCategories');
const getRestaurentsByCategoryId = require('./functions/restaurents/getRestaurentsByCategoryId');
const getRestaurentById = require('./functions/restaurents/getRestaurentById');

// Cart Functions
const addCartItem = require('./functions/cart/addCartItems');
const getCartItemsByUserId=require('./functions/cart/getCartItemsbyUserId')
const deleteCart=require('./functions/cart/clearCart')
const deleteCartItem = require('./functions/cart/deleteCartItem');

// Menu Items
const getMenuItemById = require('./functions/menu_items/getMenuItemById');

// Orders
const {
  createOrder,
  getOrdersByRestaurentId,
  updateOrderById,
  deleteOrderById,
} = require('./functions/order');

// Routes
app.get('/', welcome);
app.post('/signup', signup);
app.post('/login', login);

// Categories
app.get('/categories', loggin, getCategories);
app.get('/categories/:categoryId/Restaurents', loggin, getRestaurentsByCategoryId);

// Restaurents
app.get('/restaurents/:restaurentId', loggin, getRestaurentById);

// Menu Items
app.get('/menu-items/:id', loggin, getMenuItemById);


// Cart
            
app.post('/cart', loggin, addCartItem);
app.get('/cart/:userId', loggin, getCartItemsByUserId );
app.delete('/cart/:userId', loggin, deleteCart );
app.delete('/item/:userId', loggin , deleteCartItem);

// Orders
app.post('/orders', loggin, createOrder);
app.get('/orders/restaurent/:restaurent_id', loggin, getOrdersByRestaurentId);
app.put('/orders/:id', loggin, updateOrderById);
app.delete('/orders/:id', loggin, deleteOrderById);


//checkout
const addAddress = require('./functions/checkout/addAddress');
const getAddressByUserId = require('./functions/checkout/getAddressByUserId');
const placeOrder = require('./functions/checkout/placeOrder');


app.post('/checkout/address', addAddress);
app.get('/checkout/address/:userId', getAddressByUserId);
app.post('/checkout/place-order', placeOrder);


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
