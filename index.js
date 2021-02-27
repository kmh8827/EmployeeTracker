const mysql = require('mysql');
const department = require('./inq/departmentIQ');
const employee = require('./inq/employeeIQ');
const roles = require('./inq/rolesIQ');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Threshmain',
    database: 'employee_tracker_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ${connection.threadId}`);
});

const start = () => {
    
    connection.end();
}