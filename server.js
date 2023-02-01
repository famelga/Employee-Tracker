const inquirer = require('inquirer');
const mysql = require('mysql2');

// const PORT = ;
// const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tracker_db'
    },
    console.log('Connected to the tracker_db.')
);