const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_db'
});

db.connect((err) => {
  if (err) {
    console.error('Could not connect to MySQL:', err);
    process.exit(1); // Exit process if unable to connect to MySQL
  }
  console.log('Connected to MySQL');
});

// Endpoint to register students
app.post('/api/register-student', (req, res) => {
  const { username, department, password } = req.body;

  if (!username || !department || !password) {
    console.error('Validation Error: Please fill all fields');
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  const sql = 'INSERT INTO students (username, department, password) VALUES (?, ?, ?)';
  db.query(sql, [username, department, password], (err, results) => {
    if (err) {
      console.error('Error inserting data into students:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'Student registered successfully' });
  });
});

// Endpoint to register employees
app.post('/api/register-employee', (req, res) => {
  const { username, department, password } = req.body;

  if (!username || !department || !password) {
    console.error('Validation Error: Please fill all fields');
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  const sql = 'INSERT INTO employees (username, department, password) VALUES (?, ?, ?)';
  db.query(sql, [username, department, password], (err, results) => {
    if (err) {
      console.error('Error inserting data into employees:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'Employee registered successfully' });
  });
});

// Endpoint for student login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.error('Validation Error: Please provide username and password');
    return res.status(400).json({ error: 'Please provide username and password' });
  }

  const sql = 'SELECT * FROM students WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  });
});

// Endpoint for employee login
app.post('/api/login-employee', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.error('Validation Error: Please provide username and password');
    return res.status(400).json({ error: 'Please provide username and password' });
  }

  const sql = 'SELECT * FROM employees WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  });
});

// Endpoint to handle login and store other user information
app.post('/api/login-others', (req, res) => {
  const { username, address, type } = req.body;

  if (!username || !address || !type) {
    console.error('Validation Error: Please fill all fields');
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  const sql = 'INSERT INTO others (username, address, type) VALUES (?, ?, ?)';
  db.query(sql, [username, address, type], (err, results) => {
    if (err) {
      console.error('Error inserting data into others:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'User logged in and data stored successfully' });
  });
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
