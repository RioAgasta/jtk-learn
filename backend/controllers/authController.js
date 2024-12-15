const { User } = require('../models');
const bcrypt = require('bcrypt');  // or 'bcryptjs'
const jwt = require('jsonwebtoken');

// Login controller function
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create and sign the JWT token
    const token = jwt.sign(
      { userId: user.id_user, role: user.role },  // Use user.id_user as the payload
      process.env.JWT_SECRET, // Secret key from environment variable
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Send the token in the response or store in a cookie
    // Optionally store the JWT in an HttpOnly cookie for more secure handling on the client-side
    res.cookie('token', token, {
      httpOnly: true, // Prevents JS access to the cookie
      secure: process.env.NODE_ENV === 'production', // Set cookie to be sent only over HTTPS in production
      maxAge: 3600000 // Set cookie expiration to match token expiration (1 hour)
    });

    // Send response with the token (if you're not using cookies)
    res.json({ token }); // You can send the token in the response body
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Logout function (clear JWT token from cookies)
const logout = (req, res) => {
  try {
    // Clear the JWT token from cookies
    res.clearCookie('token'); // Assuming 'token' is the name of your cookie

    // Send a response indicating successful logout
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during logout' });
  }
};

module.exports = { login, logout };
