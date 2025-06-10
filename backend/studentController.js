const db = require('./db');

// Add student to class
exports.addStudent = (req, res) => {
  const { classId, student_name } = req.body;
  db.query('INSERT INTO students (class_id, name) VALUES (?, ?)', [classId, student_name], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Student added' });
  });
};

// Get students of a class
exports.getStudents = (req, res) => {
  const { classId } = req.params;
  db.query('SELECT * FROM students WHERE class_id = ?', [classId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};
