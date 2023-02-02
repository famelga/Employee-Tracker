const inquirer = require('inquirer');
const mysql = require('mysql2');
const chooseOption = require('./prompt');



const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

async function startDb() {
const db = await mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tracker_db'
    },
);

await db.connect();
console.log('Connected to the database.');
};
async function init() {
    await startDb();
chooseOption();
};




init();