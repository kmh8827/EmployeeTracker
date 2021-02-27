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

class SQL = {
    const viewEmployee = () => {
        connection.query('SELECT * FROM EMPLOYEE', (err, result) => {

        });
    }

    const addEmployee = () => {

    }

    const viewDepartment = () => {

    }

    const addDepartment = () => {

    }

    const viewRoles = () => {

    }

    const addRoles = () => {

    }

    const updateRoles = () => {

    }
}

module.exports = SQL;