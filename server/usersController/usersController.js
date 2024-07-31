// usersController.js
const User = require('../model/model');

const registerUser = async (req, res) =>{
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Add other user-related methods here, such as login, logout, and retrieving user information


module.exports = {registerUser,};