const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const JWT_SECRET = process.env.JWT_SECRET || "change_this_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

const authController = {
  // Added async here
  async signup(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ message: "Name, email and password are required." });
      }

      const existing = await UserModel.findByEmail(email);
      if (existing) {
        return res.status(409).json({ message: "Email already registered." });
      }

      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);
      console.log(passwordHash)

      const user = await UserModel.createUser({
        name,
        email,
        password: passwordHash,
      });

      // Generate token
      const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );

      // Send response
      return res.status(201).json({
        message: "User created successfully",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
      });
    } catch (err) {
      console.error("Signup error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async login(req, res) {
    console.log(req.body, "rrrrrrrrr")
    try {
    const { email, password } = req.body;
    if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
    }
    
    
    const user = await UserModel.findByEmail(email);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    
    
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Password does not match' });
    
    
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    
    
    return res.json({ message: 'Login successful', token });
    } catch (err) {
    console.error('Login error', err);
    return res.status(500).json({ message: 'Internal server error' });
    }
    },

    async me(req, res) {
        try {
        // authMiddleware attaches userId to req
        const user = await UserModel.findById(req.userId);
        if (!user) return res.status(404).json({ message: 'User not found' });
        return res.json({ user });
        } catch (err) {
        console.error('Me error', err);
        return res.status(500).json({ message: 'Internal server error' });
        }
        },

        async contactUs(req, res) {
          try {
            const { name, email, phone, message } = req.body;
      
            if (!name || !email || !phone || !message) {
              return res.status(400).json({ message: "All fields are required" });
            }
      
            await UserModel.contactUs({ name, email, phone, message });
      
            return res.status(201).json({
              success: true,
              message: "Contact details submitted successfully",
            });
          } catch (error) {
            console.error("Error in contactUs:", error);
            return res.status(500).json({
              success: false,
              message: "Internal server error. Please try again later.",
            });
          }
        },
};


module.exports = authController;
