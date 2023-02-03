const inquirer = require('inquirer');
const fb = require('express').Router();
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tracker_db'
    },
);

module.exports = function chooseOption() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add an role', 'add an employee', 'update an employee role'],
        },
    ])
    .then(({options}) => {
        switch (options) {
            case "view all departments":
              db.query("SELECT * FROM department", (err, result) => {
                if (err) {
                  console.log(err);
                }
                console.table(result);
                chooseOption();
              });
              break;
            case "view all roles":
              db.query("SELECT * FROM role", (err, result) => {
                if (err) {
                  console.log(err);
                }
                console.table(result);
                chooseOption();
              });
              break;
            case "view all employees":
              db.query("SELECT * FROM employee", (err, result) => {
                if (err) {
                  console.log(err);
                }
                console.table(result);
                chooseOption();
              });
              break;
            case "add a department":
              addDept();
              break;
            case "add an role":
              addRole();
              break;
            case "add an employee":
              addEmployee();
              break;
            case "update an employee role":
              updateEmployee();
              break;
            default:
              console.log("Invalid option selected.");
              chooseOption();
              break;
          }
          
        // if(options === "view all departments") {
        //   db.query('SELECT * FROM department',(err, result) => {
        //     if (err) {
        //       console.log(err);
        //     }
        //     console.table(result);
        //     chooseOption();
        //   });
        // }
        // if(options === "view all roles") {
        //     db.query('SELECT * FROM role',(err, result) => {
        //         if (err) {
        //           console.log(err);
        //         }
        //         console.table(result);
        //         chooseOption();
        //       });
        // }
        // if(options === "view all employees") {
        //     db.query('SELECT * FROM employee',(err, result) => {
        //         if (err) {
        //           console.log(err);
        //         }
        //         console.table(result);
        //         chooseOption();
        //       });
        // }
        // if(options === "add a department") {
        //     addDept();
        //         // const newDept = "Marketing";
        //         // db.query(`INSERT INTO department (department_name) VALUES (?)`,newDept,(err, result) => {
        //         //   if (err) {
        //         //     console.log(err);
        //         //   }
        //         //   console.table(result);
        //         // chooseOption();
        //         // });
        // }
        // if(options === "add an role") {
        //     addRole();
        //         // const newRole = "CopyWriter";
        //         // db.query(`INSERT INTO role (title) VALUES (?)`,newRole,(err, result) => {
        //         //   if (err) {
        //         //     console.log(err);
        //         //   }
        //         //   console.table(result);
        //         //   chooseOption();                });
        // }
        // if(options === "add an employee") {
        //     addEmployee();
        //         // const newEmployee = "Betty";
        //         // db.query(`INSERT INTO employee (first_name) VALUES (?)`,newRole,(err, result) => {
        //         //   if (err) {
        //         //     console.log(err);
        //         //   }
        //         //   console.table(result);
        //         //   chooseOption();                });
        // }
        // if(options === "update an employee role") {
        //     updateEmployee();
        //         // const id = 5;
        //         // db.query(`UPDATE employee SET (first_name='Fayven' last_name= 'Amelga' role_id = 5) where id = ?`,id,(err, result) => {
        //         //   if (err) {
        //         //     console.log(err);
        //         //   }
        //         //   console.table(result);
        //         //   chooseOption();                });
        // }
    });
};

function addDept() {
    inquirer
    .prompt ([
        {
            name: 'dept',
            message: 'Enter the name of the department.',
        }
    ])
    .then(({dept}) => {

    })

};

function addRole() {
    inquirer
    .prompt ([
        {
            name: 'role',
            message: 'Enter the name, salary, and department for the role.',
        }
    ])
    .then(({role}) => {

    })
};

function addEmployee() {
    inquirer
    .prompt ([
        {
            name: 'employee',
            message: 'Enter the employee’s first name, last name, role, and manager.',
        }
    ])
    .then(({employee}) => {

    })
};


function updateEmployee() {
    inquirer
    .prompt ([
        {
            name: 'update',
            message: 'Select an employee to update and their new role.',
        }
    ])
    .then(({update}) => {

    })
};