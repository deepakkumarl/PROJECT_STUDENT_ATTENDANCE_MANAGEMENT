const db = require('./db');

// Mark attendance
exports.markAttendance = (req, res) => {
  const { studentId, date, status } = req.body;
  db.query(
    'INSERT INTO attendance (student_id, date, status) VALUES (?, ?, ?)',
    [studentId, date, status],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'Attendance marked' });
    }
  );
};

// Get attendance by class and date
exports.getAttendanceByClassDate = (req, res) => {
  const { classId, date } = req.query;
  db.query(
    `SELECT a.id, s.name, a.status
     FROM attendance a
     JOIN students s ON a.student_id = s.id
     WHERE s.class_id = ? AND a.date = ?`,
    [classId, date],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.status(200).json(results);
    }
  );
};
