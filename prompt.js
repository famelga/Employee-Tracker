const inquirer = require('inquirer');
const db = require('./db/store');
require('console.table');


function chooseOption() {
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
                viewDepts();
              break;
            case "view all roles":
                viewRoles();
              break;
            case "view all employees":
                viewEmployees();
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
          
    });
};

function viewDepts() {
    db.findAllDepts()
    .then (([rows]) => {
        let depts = rows;
        console.table(depts);
    })
    .then (() => chooseOption());
}

function viewRoles() {
    db.findAllRoles()
    .then (([rows]) => {
        let roles = rows;
        console.table(roles);
    })
    .then (() => chooseOption());
}

function viewEmployees() {
    db.findAllEmployees()
    .then (([rows]) => {
        let employees = rows;
        console.table(employees);
    })
    .then (() => chooseOption());
}

function addDept() {
    inquirer
    .prompt ([
        {
            name: 'name',
            message: 'Enter the name of the department.',
        }
    ])
    .then(res => {
        let name = res;
        db.createDept(name)
        .then(() => console.log("Added department to the database."))
        .then(() => chooseOption())  
    });

};

function addRole() {
    db.findAllDepts()
    .then(([rows]) => {
        let depts = rows;
        const deptChoices=depts.map(({id, name}) => ({
            name: name,
            value: id 
        }))
        inquirer
        .prompt ([
            {
                name: 'title',
                message: 'Enter the title for the role.',
            },
            {
                name: 'salary',
                message: 'Enter the salary for the role.',
            }, 
            {
                type: 'list',
                name: 'department_id',
                message: 'Select the department name.',
                choices: deptChoices,
            },
        ])
        .then(role => {
            db.createRole(role)
            .then(() => console.log("Added role to the database."))
            .then(()=> chooseOption())
            })
    })
};

function addEmployee() {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        const roleChoices=roles.map(({id, title}) => ({
            name: title,
            value: id,
        }))
    inquirer
    .prompt ([
        {
            name: 'full_name',
            message: 'Enter the employees first name.',
        },
        // {
        //     name: 'last_name',
        //     message: 'Enter the employees last name.',
        // }, 
        {
            type: 'list',
            name: 'role_id',
            message: 'Select the employee role.',
            choices: roleChoices,
        },
        {
            name: 'manager_id',
            message: 'Enter the employees manager id.',
        },
    ])
    .then(employee => {
        db.createEmployee(employee)
        .then(() => console.log("Added employee to the database."))
        .then(()=> chooseOption())
        })
    })

};


function updateEmployee() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        const employeeChoices=employees.map(({full_name}) => ({
            name: full_name,
        }))
        db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        const roleChoices=roles.map(({id, title}) => ({
            name: title,
            value: id,
        }))
    
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'full_name',
            message: 'Select the employee.',
            choices: employeeChoices,
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Select the employees new role.',
            choices: roleChoices,
        },
        {
            name: 'manager_id',
            message: 'Enter the employees manager id.',
        },
    ])
    .then(update => {
        db.createEmployee(update)
        .then(() => console.log("Update employee to the database."))
        .then(()=> chooseOption())
    })
})
    })
};

chooseOption(); 