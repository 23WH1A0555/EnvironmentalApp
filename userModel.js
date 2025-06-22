// backend/models/userModel.js

const db = require('../db');  // Import the database connection from db.js

const User = {
  // Function to insert a new user into the database
  create: (userData, callback) => {
    const sql = 'INSERT INTO users (username, password, fullName, phone) VALUES (?, ?, ?, ?)';
    db.query(sql, [userData.username, userData.password, userData.fullName, userData.phone], callback);
  },

  // Function to find a user by their username
  findByUsername: (username, callback) => {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], callback);
  }
};

module.exports = User;
