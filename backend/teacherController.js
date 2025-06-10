const db = require('./db');

// Register
exports.register = (req, res) => {
  const { username, password } = req.body;
  db.query('INSERT INTO teachers (username, password) VALUES (?, ?)', [username, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Teacher account created' });
  });
};

// Login
exports.login = (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM teachers WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    res.status(200).json({ message: 'Login successful', teacherId: results[0].id });
  });
};
