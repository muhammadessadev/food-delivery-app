# 🍔 Food Delivery App

A full-stack **Food Delivery Application** built with **React Native** (frontend) and **Node.js + Express + PostgreSQL** (backend).  
This app enables users to browse restaurants, view menus, add items to cart, place orders, and manage delivery details — with full CRUD operations for admin management.

---

## 🚀 Features
- 📱 **React Native Frontend** with modern and responsive UI.
- 🌐 **RESTful API** built using Node.js & Express
- 🗄 **PostgreSQL Database** for persistent data storage
- 🔐 **JWT Authentication** for secure login & registration
- 🛒 **Cart Management** (Add / Update / Remove items)
- 🛍 **Order Placement** & tracking system
- 🚚 **Delivery Agent Management**
- 🛠 Full **CRUD Operations** for admin panel
- ⚡ **Axios Integration** for API communication

---

## 🛠 Tech Stack
**Frontend:**
- React Native
- Expo
- Axios

**Backend:**
- Node.js
- Express.js
- PostgreSQL

**Other Tools:**
- Docker (optional)
- Postman
- Git

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/muhammadessadev/food-delivery-app.git
cd food-delivery-app
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

* Create a PostgreSQL database.
* Configure `.env` file with your DB credentials:

```env
DB_USER=root
DB_HOST=localhost
DB_NAME=food_delivery
DB_PASSWORD=root
DB_PORT=5432
JWT_SECRET=your_secret_key
```

* Start the backend:

```bash
node server.js
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

* Update API URL in `constants/endpoint.js`:

```javascript
export const API_URL = "http://192.168.X.X:3000"; // Replace with your machine's IP
```

* Start the app:

```bash
npx expo start
```

---

## 📋 API Endpoints (Example)

**Authentication**

* `POST /auth/register` — Register a new user
* `POST /auth/login` — Login user

**Restaurants**

* `GET /restaurants` — Get all restaurants
* `POST /restaurants` — Add a new restaurant

**Menu Items**

* `GET /restaurants/:id/menu` — Get menu for restaurant
* `POST /menu` — Add new menu item

**Cart**

* `GET /cart/:userId` — Get user's cart
* `POST /cart` — Add item to cart
* `PUT /cart/:id` — Update cart item
* `DELETE /cart/:id` — Remove cart item


---


## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 💡 Author

**Your Name** — [GitHub](https://github.com/muhammadessadev) |

```

