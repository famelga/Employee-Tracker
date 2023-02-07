const { response } = require('express');
const inquirer = require('inquirer');
const fb = require('express').Router();
const mysql = require('mysql2');

// const Database = require('./database');
// const db = new Database();

// db.query("SELECT * FROM department")
//   .then((result) => {
//     console.table(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'password',
//         database: 'tracker_db'
//     },
// );

// var deptTable = (connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
  
//   connection.query("SELECT * FROM department", function (err, result, fields) {
//     if (err) throw err;
//     var departmentName = result;
//   });

// var deptTable = connection.query("SELECT * FROM department");


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
                db.query(`INSERT INTO department (department_name) VALUES (?)`, dept, (err, result) => {
                    if (err) {
                      console.log(err);
                    }
                    console.table(result);
                    console.log(dept);
                  });
    });

};

function addRole() {
    inquirer
    .prompt ([
        {
            name: 'name',
            message: 'Enter the name for the role.',
        },
        {
            name: 'salary',
            message: 'Enter the salary for the role.',
        }, 
        {
            name: 'department',
            message: 'Enter the department for the role.',
        },
    ])
    .then((response) => {

        db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [response.title, response.salary, response.department], (err, result) => {
            if (err) {
              console.log(err);
            }
            console.table(result);
            console.log({response});
          });
        })
};

function addEmployee() {
    inquirer
    .prompt ([
        {
            name: 'firstName',
            message: 'Enter the employees first name.',
        },
        {
            name: 'lastName',
            message: 'Enter the employees last name.',
        }, 
        {
            name: 'role',
            message: 'Enter the employees role.',
        },
        {
            name: 'manager',
            message: 'Enter the employees manager.',
        },
    ])
    .then((response) => {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [response.firstName, response.lastName, response.role, response.manager], (err, result) => {
            if (err) {
              console.log(err);
            }
            console.table(result);
            console.log(response);
          });
    })
};


function updateEmployee() {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'update',
            message: 'Select an employee to update.',
        },
        {
            name: role,
            message: 'Enter employees new role.',
        },
    ])
    .then(({update}) => {

    })
};