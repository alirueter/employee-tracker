const inquirer = require('inquirer');
const db = require('./db');
const mysql = require('mysql2');
const cTable = require('console.table');
const connection = require('./db/connection');

//what do you want to do (actions within database.js)
function startApp() {
    inquirer.prompt({
        type: "list",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Exit"
        ],
        message: "What would you like to do?",
        name: "option"
    })
    .then(function(result) {
        console.log("You chose: ", result.option);

        switch (result.option) {
            case "View all departments":
            viewDepartments();
            break;

            case "View all roles":
            viewRoles();
            break;

            case "View all employees":
            viewEmployees();
            break;

            case "Add a department": 
            createDepartment();
            break;

            case "Add a role":
            createRole();
            break;

            case "Add an employee":
            createEmployee();
            break;

            case "Update an employee role":
            updateRole();
            break;

            default: 
            exit();
        }
    });
};

function viewDepartments() {
    let query = "SELECT * FROM department";
    connection.query(query,function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
};

function viewRoles() {
    let query = "SELECT * FROM role";
    connection.query(query,function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
};

function viewEmployees() {
    let query = "SELECT * FROM employees";
    connection.query(query,function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
};

function createEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "empFirstName"
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "empLastName"
        },
        {
            type: "input",
            message: "What is the employee's rold id number?",
            name: "roleId"
        },
        {
            type: "input",
            message: "If the employee has a manager, please enter their manager's name.",
            name: "managerName"
        }
    ])
    .then(function(answer){
        connection.query("INSERT INTO employees (first_name, last_name, role_id, manager) VALUES (?,?,?,?)", 
        [answer.empFirstName, answer.empLastName, answer.roleId, answer.managerName], 
        function(err, res) {
            if (err) throw err;
            console.table(res);
            startApp();
        });
    });
};

function createRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is name of the role?",
            name: "roleName"
        },
        {
            type: "input",
            message: "What is the salary of the role? (Please enter numbers only with no special characters.)",
            name: "salary"
        },
        {
            type: "input",
            message: "What is the department id number?",
            name: "deptId"
        }
    ])
    .then(function(answer){
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", 
        [answer.roleName, answer.salary, answer.deptId], 
        function(err, res) {
            if (err) throw err;
            console.table(res);
            startApp();
        });
    });
};

function createDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is the department name?",
        name: "deptName"
    })
    .then(function(answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName], function(err, res) {
            if (err) throw err;
            console.table(res);
            startApp();
        });
    });
};

function updateRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the first name of the employee you would like to update.",
            name: "empUpdate"
        },
        {
            type: "input",
            message: "Please enter the employee's new role id number.",
            name: "newRoleId"
        }
    ])
    .then(function(answer) {
        connection.query("UPDATE employees SET role_id = ? WHERE first_name = ?", 
        [answer.newRoleId, answer.empUpdate],
        function(err, res) {
            if (err) throw err;
            console.table(res);
            startApp();
        });
    });
};

function exit() {
    connection.end();
    process.exit();
};

module.exports = startApp();