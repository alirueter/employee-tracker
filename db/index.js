const connection = require('./connection');
const inquirer = require('inquirer');

class DB {
    // createEmployee(employee) {
    //     return this.connection.promise().query("INSERT INTO employees SET ?", employee);
    // };
    // createRole(role) {
    //     return this.connection.promise().query("INSERT INTO role SET ?", role);
    // };
    // createDepartment(department) {
    //     inquirer.prompt({
    //         type: "input",
    //         message: "What is the department name?",
    //         name: "deptName"
    //     })
    //     .then(function(answer) {
    //         return this.connection.promise().query("INSERT INTO department SET ?", department);
    //     })
        
    // };
    // viewDepartments() {
    //     return this.connection.promise().query("SELECT * FROM department");
    // }
    // viewRoles() {
    //     return this.connection.promise().query("SELECT * FROM role"); 
    // }
    // viewEmployees() {
    //     return this.connection.promise().query("SELECT * FROM employees");
    // }
    // updateRole(role_id, first_name){
    //     return this.connection.promise().query("UPDATE employees SET role_id = ? WHERE first_name = ?", role_id, first_name);
    // }
}

module.exports = new DB(connection);