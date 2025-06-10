const db = require('./db');

// Create class
exports.createClass = (req, res) => {
  const { teacherId, class_name, total_students } = req.body;

  console.log('Incoming class creation:', req.body);

  // Update the query to use 'name' instead of 'class_name'
  db.query(
    'INSERT INTO classes (teacher_id, name, total_students) VALUES (?, ?, ?)',
    [teacherId, class_name, total_students], // Correctly mapping teacher_id and class_name
    (err, result) => {
      if (err) {
        console.error('SQL Error:', err);
        return res.status(500).json({ error: err.sqlMessage });
      }
      res.status(201).json({ message: 'Class created' });
    }
  );
};

// Get all classes of a teacher
exports.getClasses = (req, res) => {
  const { teacherId } = req.params;
  db.query('SELECT * FROM classes WHERE teacher_id = ?', [teacherId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};
