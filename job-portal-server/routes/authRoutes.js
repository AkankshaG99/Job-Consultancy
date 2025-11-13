const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require("../config/multerConfig")


// POST /api/auth/signup
router.post('/signup', authController.signup);


// POST /api/auth/login
router.post('/login', authController.login);


// GET /api/auth/me (protected)
router.get('/me', authMiddleware, authController.me);

router.post("/contactUs", authController.contactUs)
router.get("/getUserDetails", authController.userDetails)
router.post('/upload-resume', upload.single('resume'), authController.uploadResume);

module.exports = router;