// usersRoutes.js
const express = require('express');
const UsersController = require('../usersController/usersController');

const router = express.Router();

// Register a new user
router.post('/register', UsersController.registerUser);

// Add other user-related routes here

module.exports = router;