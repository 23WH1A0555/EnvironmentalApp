import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import db from './config/db.js'; // db imported

// ✅ Use db so the warning goes away
db.query('SELECT 1', (err, result) => {
  if (err) {
    console.error('Test query failed:', err);
  } else {
    console.log('Database test query successful:', result);
  }
});

const app = express();
const PORT = 5000;

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
app.use(authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
