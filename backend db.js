import mysql from 'mysql2';

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',      
  user: 'root',           
  password: 'root',           
  database: 'waste_management'  // Database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});

export default db;
