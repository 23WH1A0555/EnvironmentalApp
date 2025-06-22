import db from '../config/db.js';  // Your database configuration
import bcrypt from 'bcryptjs';

// Register a new user
export const registerUser = (req, res) => {
  const { username, password, fullName, phone } = req.body;

  // Ensure all fields are provided
  if (!username || !password || !fullName || !phone) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Hash the password before saving it
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ message: "Server error" });
    }

    // Insert user data into the users table
    const sql = 'INSERT INTO users (username, password, full_name, phone) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, hashedPassword, fullName, phone], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ message: "Server error" });
      }
      return res.status(201).json({ message: "User registered successfully" });
    });
  });
};
