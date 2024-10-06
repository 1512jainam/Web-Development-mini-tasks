const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bhattjainam@123',
    database: 'jainam2' 
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL server as ID ' + connection.threadId);
});

console.log('');

connection.query('CREATE DATABASE IF NOT EXISTS db1', (err, results) => {
    if (err) {throw err;}
    console.log('Database created or already exists');
});

const createTable = () => {
    const query = `CREATE TABLE IF NOT EXISTS tb1 (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(16))`;
    connection.query(query, (err, results) => {
        if (err) {throw err;}
    });
}

const insertData = (name) => {
    const query = `INSERT INTO tb1 (name) VALUES (?)`;
    connection.query(query,[name],(err,res)=>{
        if(err) {throw err;}
    });
}

const showAllData = () =>{
    const query = `select * from tb1`;
    connection.query(query,(err,res)=>{
        if(err) {throw err;}
        console.log(res);
    });
}

const updateData = (id,name) =>{
    const query = `UPDATE tb1 SET name = ? WHERE id = ?`;
    connection.query(query,[name,id],(err,res)=>{
        if(err) {throw err;}
    });
}

const dropTable = ()=>{
    const query =  `drop table if exists tb1`;
    connection.query(query,(err,res)=>{
        if(err) {throw err;}
    });
}

const deleteRow = (id) =>{
    const query = 'DELETE FROM tb1 WHERE id = (?)';
    connection.query(query,id,(err,res)=>{
        if(err) {{throw err;}}
        console.log(res);
    });
}

createTable();
insertData('jainam');
insertData('prince');
insertData('yuval');
insertData('sumit');
insertData('jigar');

showAllData();

updateData(1,'hello');

showAllData();

deleteRow(2);

connection.end((err) => {
    if (err) {
        console.error('Error closing connection: ' + err.stack);
        return;
    }
    console.log('Connection closed');
});