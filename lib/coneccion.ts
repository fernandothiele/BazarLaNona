import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0007',
  database: 'bazarprueba'
});

export default connection;

