# 🔐 Authentication App (MERN Stack)

This is a full-stack authentication system built using the **MERN stack (MongoDB, Express, React, Node.js)**. It includes **user signup, login, and authentication handling**.

---

## 🚀 Features

✅ **User Authentication** (Signup/Login)  
✅ **JWT-based Authentication**  
✅ **Password Hashing (bcrypt.js)**  
✅ **Protected Routes**  
✅ **React Router for Navigation**

---

## 🛠️ Tech Stack

### **Frontend (Client)**

- React.js
- Tailwind CSS
- React Router

### **Backend (Server)**

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js (Password Hashing)

---

## 📂 Folder Structure

authentication/
│-- client/ # Frontend (React)
│-- server/ # Backend (Node.js + Express)
│-- .gitignore # Ignore unnecessary files
│-- README.md # Project documentation

## 📌 Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/farseent/UserAuthentication.git
cd authentication

### 2️⃣ Install Dependencies

#### For Server

cd server
npm install express cors bcrypt cookie-parser nodemon jsonwebtoken mongoose dotenv

#### For Client

cd server
npm install react-cookie react-router-dom react-toastify axios

## 🚀 Run the App

### Start the Backend Server

cd server
npm start

### Start the Frontend

cd client
npm start

## ⚙️ Environment Variables

Create a .env file in the server directory and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000

## 📜 License

This project is ISC Licensed. Feel free to use and modify it.

## 💡 Author

Developed by Farseen 🚀
https://github.com/farseent
