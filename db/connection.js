const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ali98rae",
    database: "employee"
});

connection.connect(function(err){
    if(err) {
        throw err;
    }
});

module.exports = connection;
