const express = require('express');
const router = express.Router();
const attendanceController = require('./attendanceController');

router.post('/', attendanceController.markAttendance);
router.get('/', attendanceController.getAttendanceByClassDate);

module.exports = router;
