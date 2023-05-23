const database = require('../Database/db');
const users = require('../Model/Signup');
const { validationResult } = require('express-validator');

const passReset = async (req, res) => {
  try {
    const resetErr = validationResult(req);
    if (!resetErr.isEmpty()) {
      console.log(resetErr.errors[0].msg);
      return res.status(400).json({ errors: resetErr.array() });
    }

    const { number, newpassword } = req.body;

    const userData = await users.findOne({ number: number});
    if (!userData) {
      return res.status(404).json({ success: false, message: 'User not found' });
    } else {
      userData.password = newpassword;
      await userData.save();
      return res.status(200).json({ success: true, message: 'Password reset was successful' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = passReset;