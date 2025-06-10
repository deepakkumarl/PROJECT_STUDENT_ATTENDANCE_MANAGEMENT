const express = require('express');
const router = express.Router();
const classController = require('./classController');

router.post('/', classController.createClass);
router.get('/:teacherId', classController.getClasses);

module.exports = router;
