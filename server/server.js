const express = require('express');
require('dotenv').config();
const app= express();
const dbConfig = require('./config/dbConfig');
const port = process.env.PORT || 5000;
const usersRoute = require('./routes/usersRoute');
const authMiddleware = require('./middlewares/authMiddleware');
app.use(express.json());
app.use("api/users", usersRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));