const connection = require('./connection');


class DB {
    constructor(connection) {
        this.connection=connection;
    }

    findAllDepts(){
        return this.connection.promise().query(
            "select department.id, department.name from department;"
        )
    }

    findAllRoles(){
        return this.connection.promise().query(
            "select role.id, role.title, department.name as department, role.salary from role left join department on role.department_id = department.id;"
        )
    }

    findAllEmployees(){
        return this.connection.promise().query(
            "select employee.id, employee.full_name, role.title, department.name as department, role.salary, manager.full_name as manager from employee left join role on employee.role_id = role.id left join department on role.department_id = department.id left join employee manager on manager.id = employee.manager_id;"
        )
    }

    createDept(dept){
        return this.connection.promise().query(
            "insert into department set ?", dept
        )
    } 

    createRole(role){
        return this.connection.promise().query(
            "insert into role set ?", role
        )
    } 

    createEmployee(employee){
        return this.connection.promise().query(
            "insert into employee set ?", employee
        )
    } 

    updateEmployee(update){
        return this.connection.promise().query(
            "UPDATE employee SET  WHERE ?", update
        )
    } 
}

module.exports = new DB(connection);