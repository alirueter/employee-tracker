const inquirer = require('inquirer');
const db = require('./db');
const mysql = require('mysql2');
const cTable = require('console.table');

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
            quit();
        }
    });
};

//ask info you need
//handoff in same order you need in seed


module.exports = startApp();