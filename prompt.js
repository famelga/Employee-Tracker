const inquirer = require('inquirer');
const fb = require('express').Router();
const db = require('../config');



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
    .then((response) => {
        if(response.options === "view all departments") {
            app.get('/departments', (req, res) => {
                res.json(`${res.method} request received to view all departments.`);
            })
        }
        if(response.options === "view all roles") {
            app.get('/roles', (req, res) => {
                res.json(`${res.method} request received to view all departments.`);
            })
        }
        if(response.options === "view all employees") {
            app.get('/employees', (req, res) => {
                res.json(`${res.method} request received to view all departments.`);
            })
        }
        if(response.options === "add a department") {
            fb.post('/',(req,res)=> {
                const newDept = "Marketing";
                db.query(`INSERT INTO department (department_name) VALUES (?)`,newDept,(err, result) => {
                  if (err) {
                    console.log(err);
                  }
                  res.send("Department added successfully");
                });
              
              
              })
            
              module.exports = fb;
        }
        if(response.options === "add an role") {
            fb.post('/',(req,res)=> {
                const newRole = "CopyWriter";
                db.query(`INSERT INTO role (title) VALUES (?)`,newRole,(err, result) => {
                  if (err) {
                    console.log(err);
                  }
                  res.send("Role added successfully");
                });
              
              
              })
            
              module.exports = fb;
        }
        if(response.options === "add an employee") {
            fb.post('/',(req,res)=> {
                const newEmployee = "Betty";
                db.query(`INSERT INTO employee (first_name) VALUES (?)`,newRole,(err, result) => {
                  if (err) {
                    console.log(err);
                  }
                  res.send("Employee added successfully");
                });
              
              
              })
            
              module.exports = fb;
        }
        if(response.options === "update an employee role") {
            fb.put('/:role_id',(req,res)=> {
                const id = req.params.id;
                db.query(`UPDATE employee SET role_id = '21' where id = ?`,id,(err, result) => {
                  if (err) {
                    console.log(err);
                  }
                  res.send("Employee role updated");
                });
              
              })
              module.exports = fb;
        }
    });
};

// function viewDepts()

// function viewRoles()

// function viewEmployees()

// function addDept() {
//     inquirer
//     .prompt([
//         {
//             name: ,
//             message: ,
//         }
//     ])
// };

// function addRole() {
//     inquirer
//     .prompt([
//         {
//             name: ,
//             message: ,
//         }
//     ])
// };

// function addEmployee() {
//     inquirer
//     .prompt([
//         {
//             name: ,
//             message: ,
//         }
//     ])
// };

// function updateRole() {
    
// };

// chooseOption();

// var index = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Employee Tracker</title>
// </head>
// <body>
//     <div id="department" class=""></div>
//     <div id="role" class=""></div>
//     <div id="employee" class=""></div>
// </body>
// </html>`

// module.exports = chooseOption;
