const connection = require('./connection');

class DB {
    createEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employees SET ?", employee);
    }
    createRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role);
    }
    createDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }
    
}

module.exports = new DB(connection);