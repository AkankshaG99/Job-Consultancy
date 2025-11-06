const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobsController');

router.get("/getAllJobs", jobController.getAllJobs )

module.exports = router;