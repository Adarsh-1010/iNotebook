const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "Adarshisagoodboy";

// Create a user using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    // Validation rules
    body("name", "Name must contain at least three characters").isLength({
      min: 3,
    }),
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if a user with the given email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "User with this email already exists" });
      }

      // Hash the password using bcrypt
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      // Create a JWT token for the user
      const data = {
        user: {
          id: user.id, // Store the user ID in the token
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);

      // Send the token back to the client
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
