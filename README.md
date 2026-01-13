# 📚 BookNest — MERN E-Commerce Book Application

**BookNest** is a full-stack e-commerce web application for buying and browsing books built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.

The goal of this project is to provide a modern, responsive, and dynamic bookstore experience — with user authentication, book listings, cart functionality, and more.


## 🚀 Features

### 👤 User Features
- 📌 User Registration & Login (JWT Authentication)
- 📚 Browse Books by Categories
- 🔍 Search & Filter Books
- 🛒 Add to Cart & Checkout Flow
- 🔐 Protected User Routes

### 🛠️ Admin Features
- ➕ Add New Books
- ✏️ Edit / Update Book Details
- ❌ Delete Books
- 👥 Manage Users
- 📦 Manage Orders
- 🔐 Protected Admin Routes

### ⚙️ System Features
- 📦 RESTful APIs
- 📁 Clean Frontend & Backend Architecture
- 🌐 Deployed on Render
- 🔒 Secure Environment Variables


## 🧱 Tech Stack

**Frontend**
- React
- React Router
- Axios

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas
- Mongoose ODM


🚀 **Deployed on Render**

- 🔗 **Live Website:**  
  https://e-commerce-frontend-w1bh.onrender.com

## 🛠 Installation & Setup

1️⃣ Clone the repo
git clone https://github.com/Shivraj2615/E-Commerce.git
cd E-Commerce

2️⃣ Setup Backend
cd backend
npm install

Create a .env file:
PORT=5000
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<your_jwt_secret>

Start the backend:
nodemon server.js


3️⃣ Setup Frontend
cd ../frontend
npm install

Create a .env file:
VITE_API_URL=http://localhost:5000

Start the frontend:
npm start

👨‍💻 Author
Shivraj Jagdale
GitHub: https://github.com/Shivraj2615