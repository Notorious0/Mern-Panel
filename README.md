# Teacher-Student Matching Panel

This project is a scheduling panel system designed for schools, where teachers and students can be matched for one-on-one sessions without overlapping time slots. Users can log in as a teacher or student and access dedicated features, including a matching interface that ensures schedule compatibility.

## 🚀 Technologies Used

- **Frontend:** React, Redux Toolkit
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## 🎯 Features

- 🧑‍🏫 Add and manage teachers
- 🧑‍🎓 Add and manage students
- ⏰ Conflict detection based on time and day
- 🔄 Smart teacher-student matching system
- 🧭 Landing page with three options:
  - Teacher Login
  - Student Login
  - One-on-One Matching Panel

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone 
   cd yourproject
   ```

2. **Install dependencies for both client and server:**
   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. **Create a `.env` file in the server directory and add your MongoDB URI:**
   ```
   MONGO_URI=---
   PORT=5000
   ```

4. **Run the development servers:**

   - For the backend:
     ```bash
     cd server
     npm run dev
     ```

   - For the frontend:
     ```bash
     cd client
     npm start
     ```

## 📸 Usage

When the app is launched, users will see a main screen with three options:

1. **Teacher Login:** Manage available hours and view matched students.
2. **Student Login:** Choose available time slots for matching.
3. **Matching Panel:** Automatically or manually match teachers with students based on available times.

## 🤝 Contributing

Feel free to fork this repository, create a new branch, and submit a pull request for any improvements or features you'd like to add!


