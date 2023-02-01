const inquirer = require('inquirer');



function chooseOption() {
    inquirer
    .prompt([
        {
            input: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add an role', 'add an employee', 'update an employee role'];
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