const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const teacherRoutes = require('./teacherRoutes');
const classRoutes = require('./classRoutes');
const studentRoutes = require('./studentRoutes');
const attendanceRoutes = require('./attendanceRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/teachers', teacherRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/attendance', attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
