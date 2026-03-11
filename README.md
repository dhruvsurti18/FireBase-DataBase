# **INVENTORY TRACKING SYSTEM**

A simple **Inventory Tracking System** built using **React (Vite), Redux Toolkit, Material UI, and Firebase Realtime Database**.
This application allows users to **add, edit, delete, and view products** stored in Firebase.

---

# **🚀 FEATURES**

* Add new products to the inventory
* Edit existing product details
* Delete products from the inventory
* View all products in a table layout
* Firebase Realtime Database integration
* Material UI for clean and professional UI

---

# **🛠 TECHNOLOGIES USED**

* React (Vite)
* Redux Toolkit
* React Redux
* Firebase Realtime Database
* Material UI
* JavaScript (ES6)

---

# **📂 PROJECT STRUCTURE**

```
src
│
├── app
│   └── store.js
│
├── components
│   ├── ProductForm.jsx
│   ├── ProductList.jsx
│   └── ProductItem.jsx
│
├── features
│   └── products
│       └── productSlice.js
│
├── firebase
│   └── firebase.js
│
├── App.jsx
└── main.jsx
```

---

# **⚙️ INSTALLATION**

Clone the repository

```
git clone https://github.com/your-username/inventory-tracker.git
```

Navigate to the project directory

```
cd inventory-tracker
```

Install dependencies

```
npm install
```

Start the development server

```
npm run dev
```

---

# **🔥 FIREBASE SETUP**

1. Go to Firebase Console
2. Create a new project
3. Enable **Realtime Database**
4. Set database rules to test mode

Example rules:

```
{
 "rules": {
   ".read": true,
   ".write": true
 }
}
```

Add your Firebase configuration inside:

```
src/firebase/firebase.js
```

---

# **📊 FUNCTIONALITY**

### Add Product

Users can add a product with name, category, price, and stock.

### Edit Product

Users can edit product details directly in the table.

### Delete Product

Users can remove products from the inventory.

### View Products

All products are fetched from Firebase and displayed in a table.

---

# **📌 FUTURE IMPROVEMENTS**

* Search products
* Filter by category
* Sort by price
* Authentication system

---

# **👨‍💻 AUTHOR**

Developed by **Dhruv Surti**

---

# **⭐ SUPPORT**

If you like this project, please consider giving it a **star on GitHub**.
