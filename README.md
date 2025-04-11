# 🌟 React + Spring Boot CRUD with MongoDB

## 🚀 Overview
This is a full-stack CRUD (Create, Read, Update, Delete) application built with **React.js (Vite)** for the frontend and **Spring Boot** for the backend,
using **MongoDB** as the database. The project follows a structured architecture for clean code and maintainability.

---

## 🎨 Features
- ✅ **Full CRUD operations** (Create, Read, Update, Delete)
- 🚀 **RESTful API** with Spring Boot
- 🎨 **User-friendly UI** with React and Comman CSS
- 🍃 **MongoDB Integration** for NoSQL storage
- 📡 **Axios for API calls**
- 📌 **React Router** for navigation
- 🌍 **Easily deployable on cloud platforms**

---

## 🛠️ Technologies Used
### **Frontend (React + Vite)**
- ⚛️ **React.js**
- ⚡ **Vite.js** (for faster builds)
- 🌐 **Axios** (for API requests)
- 🎨 **Comman CSS** (for styling)
- 🔄 **React Router** (for navigation)

### **Backend (Spring Boot)**
- ☕ **Spring Boot (REST API)**
- 📄 **Spring Data MongoDB (for database interactions)**
- 🍃 **MongoDB (NoSQL Database)**
- 🛠️ **Lombok (to reduce boilerplate code)**

---

## 🔧 Setup & Installation
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/amanverma09/react-springboot-crud.git
cd react-springboot-crud
```

### **2️⃣ Setup Backend (Spring Boot with MongoDB)**
```sh
cd backend
mvn clean install
mvn spring-boot:run
```
🔹 Ensure MongoDB is installed and running locally or configure a **MongoDB Atlas** cluster.
🔹 Update `application.properties` with your MongoDB URI:
```properties
spring.data.mongodb.uri=mongodb://localhost:27017/your-database-name
```

### **3️⃣ Setup Frontend (React + Vite)**
```sh
cd frontend
npm install
npm run dev
```
🔹 The React app will be available at `http://localhost:5173/`.

---

## 🎯 API Endpoints
| Method | Endpoint         | Description          |
|--------|-----------------|----------------------|
| GET    | `/api/users`    | Get all users       |
| POST   | `/api/users`    | Create a new user   |
| PUT    | `/api/users/{id}` | Update user by ID  |
| DELETE | `/api/users/{id}` | Delete user by ID  |

---

## 🚀 Deployment
### **Frontend Deployment (Netlify/Vercel)**
```sh
npm run build
```
Upload the `dist/` folder to **Netlify** or **Vercel**.

### **Backend Deployment (Render/Railway/Heroku)**
1. Add your **MongoDB database credentials** to `application.properties`.
2. Package the backend as a JAR:
```sh
mvn clean package
```
3. Deploy the `target/*.jar` file on **Render/Railway/Heroku**.

---

## 🎉 Contributing
Feel free to fork the repository, make changes, and submit pull requests. Contributions are always welcome! 😊

---

## 📜 License
This project is licensed under the **MIT License**. 

---

## 🙌 Acknowledgments
Thanks to the open-source community for providing amazing tools and frameworks! 💙

