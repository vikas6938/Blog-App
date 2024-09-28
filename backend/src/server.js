// src/server.js

const express = require('express');  // Make sure express is imported properly
const cors = require('cors');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');
const path = require('path');

dotenv.config();  // Load environment variables

// Initialize app
const app = express();

// Middleware to parse incoming JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());  // Enable CORS

// Routes
app.use('/api', postRoutes);


// Database connection (ensure this is working correctly)
const dbConnection = require('./config/db');
dbConnection();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
