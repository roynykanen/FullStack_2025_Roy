const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;

const songRoutes = require('./routes/songRoutes');

app.use(bodyParser.json());

mongoose.connect(uri);

app.use('/api', songRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

/* Task 1: REST API Routes - Defined in routes/songRoutes.js */

/* Task 2: Database Queries - Using Mongoose in routes/songRoutes.js */

/* Task 3: Postman Testing - Test the routes using Postman */

/* Task 4: Error Handling - Implemented in routes/songRoutes.js */

/* Task 5: Documentation - See README.md for details */