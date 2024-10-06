const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: 'Bhattjainam@123',    
  database: 'jainam'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL server as ID ' + connection.threadId);
});

connection.query('CREATE DATABASE IF NOT EXISTS jainam', (err, results) => {
  if (err) throw err;
  console.log('Database created or already exists');
});

connection.query(`CREATE TABLE IF NOT EXISTS my_table (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
)`, (err, results) => {
  if (err) throw err;
  console.log('Table created or already exists');
});


connection.query('INSERT INTO my_table (name) VALUES (?)', ['Jainam bhatt'], (err, results) => {
  if (err) throw err;
  console.log('Record inserted:', results);
});

connection.query('UPDATE my_table SET name = ? WHERE id = ?', ['JAINAM', 1], (err, results) => {
  if (err) throw err;
  console.log('Record updated:', results);
});

connection.end((err) => {
  if (err) {
    console.error('Error closing connection: ' + err.stack);
    return;
  }
  console.log('Connection closed');
});
