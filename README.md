# User Management System 👥

This project demonstrates a user management system built with React on the client side and Node.js + Express on the server side. The application allows for CRUD (Create, Read, Update, Delete) operations on user data, including:

- **User Creation**: Adding new users to the database.
- **User Update**: Modifying existing user details.
- **User Deletion**: Soft deletion by updating user status.
- **User Retrieval**: Fetching and displaying user data.

---

## Installation and Setup ⚙️

### Prerequisites 📋

- Node.js (v12.x or later) 🟢
- npm (v6.x or later) 📦

### Client-Side Setup 🖥️

1. **Clone the Repository:**

    ```bash
   git clone https://github.com/Mustafabharmal/User-Management.git
    cd User-Management
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Application:**

    ```bash
    npm start
    ```

    The application will run on `http://localhost:5173`.

### Server-Side Setup 🌐

1. **Navigate to the Server Directory:**

    ```bash
    cd server
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Server:**

    ```bash
    node index.js
    ```

    The server will run on `http://localhost:3000`.

---

## Project Structure 📂

### Client-Side (React) 🌟

- **src/components:** Contains React components.
- **src/context:** Contains context providers for state management.
- **src/CSS:** Contains CSS modules for styling.
- **src/App.js:** Main application component.

### Server-Side (Node.js + Express) 🚀

- **index.js:** Main server file.
- **models/User.js:** User model schema.
- **routes/userRoutes.js:** User routes.
- **controllers/userController.js:** User controllers handling the logic for routes.

---

## Usage Instructions 📖

### User Operations 👤

1. **Add User:**
   - Navigate to the "Add User" page.
   - Fill in the user details and submit the form.

2. **Update User:**
   - Click on the "Edit" button for the respective user.
   - Modify the user details and save the changes.

3. **Delete User:**
   - Click on the "Delete" button for the respective user.
   - Confirm the deletion in the modal popup.

4. **View Users:**
   - Navigate to the "Users" page to view the list of users.

---

## Code Snippets 📝

### Client-Side Code (React) ⚛️

#### Handling Form Data 🖋️

```jsx
const [formData, setFormData] = useState({
    _id: "",
    name: "",
    email: "",
    role: "0",
    password: "",
    phoneno: "",
    status: 1,
    address: "",
    createdat: Date.now(),
    updatedat: Date.now(),
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
        const formattedValue = name.endsWith("at") ? new Date(value).toISOString() : value;
        return { ...prevData, [name]: formattedValue };
    });
};
```

#### Fetching Data 📡

```jsx
const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/users', { withCredentials: true });
        const transformedData = response.data.map(item => ({
            _id: item._id,
            name: item.name,
            email: item.email,
            phoneno: item.phoneno,
            address: `${item.address}`,
            role: item.role,
            status: item.status,
            createdat: item.createdat,
            updatedat: item.updatedat,
        }));
        setLoading(false);
        setDataTableValues(transformedData);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        setLoading(false);
    }
};

useEffect(() => {
    fetchData();
}, []);
```

### Server-Side Code (Node.js + Express) 🌐

#### User Model 📄

```javascript
const { ObjectId } = require("mongodb");

class User {
    constructor(formData) {
        this._id = new ObjectId(formData._id);
        this.name = formData.name || "";
        this.email = formData.email || "";
        this.role = formData.role || "0";
        this.password = formData.password || "";
        this.phoneno = formData.phoneno || "";
        this.status = formData.status || 1;
        this.address = formData.address || "";
        this.createdat = formData.createdat || Date.now();
        this.updatedat = formData.updatedat || Date.now();
    }
}

module.exports = User;
```

#### User Routes 🛤️

```javascript
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/add', userController.addUser);
router.put('/update/:id', userController.updateUser);
router.put('/delete/:id', userController.updateUserStatus);

module.exports = router;
```

---

## Conclusion 🎉

This project provides a basic yet comprehensive example of a user management system using modern web technologies. It demonstrates key concepts such as state management in React, server-side CRUD operations with Node.js and Express, and data modeling with MongoDB.

---

**Happy Coding!** 🚀
