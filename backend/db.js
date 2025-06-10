const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hello', // Set your MySQL root password
  database: 'sam',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected successfully!');
});

module.exports = db;
