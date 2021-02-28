const Departments = require('./inq/departmentIQ');
const Empoyees = require('./inq/employeeIQ');
const Roles = require('./inq/rolesIQ');

const mysql = require('mysql');

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

class SQL {
    viewEmployee = () => {
        connection.query('SELECT * FROM employee', (err, result) => {
            if (err) throw err;
            console.table(result);
        });
    }

    addEmployee = () => {

    }

    viewDepartment = () => {
        connection.query('SELECT * FROM department', (err, result) => {
            if (err) throw err;
            console.table(result);
        });
    }

    addDepartment = () => {

    }

    viewRoles = () => {
        connection.query('SELECT * FROM role', (err, result) => {
            if (err) throw err;
            console.table(result);
        });
    }

    addRoles = () => {

    }

    updateRoles = () => {

    }
}

module.exports = SQL;