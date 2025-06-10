const express = require('express');
const router = express.Router();
const studentController = require('./studentController');

router.post('/', studentController.addStudent);
router.get('/:classId', studentController.getStudents);

module.exports = router;
