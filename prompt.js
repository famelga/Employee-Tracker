const inquirer = require('inquirer');



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

        }
        if(response.options === "view all roles") {

        }
        if(response.options === "view all employees") {

        }
        if(response.options === "add a department") {

        }
        if(response.options === "add an role") {

        }
        if(response.options === "add an employee") {

        }
        if(response.options === "update an employee role") {

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
