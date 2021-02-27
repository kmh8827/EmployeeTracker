const { prompt } = require('inquirer');
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

prompt(
    [
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                { name: 'View All Employees', value: 'viewEmp' },
                { name: 'Add Employees', value: 'addEmp' },
                { name: 'View Departments', value: 'viewDep' },
                { name: 'Add Departments', value: 'addDep' },
                { name: 'View All Roles', value: 'viewRol' },
                { name: 'Add Roles', value: 'addRol' },
                { name: 'Update Employee Roles', value: 'updRol' },
                { name: 'Exit Program', value: 'exit' }
            ]
        }
    ]).then(results => {
        switch (results.choices) {
            case 'viewEmp':
                viewEmployee();
                break;
            case 'addEmp':
                addEmployee();
                break;
            case 'viewDep':
                viewDepartment();
                break;
            case 'addDep':
                addDepartment();
                break;
            case 'viewRol':
                viewRoles();
                break;
            case 'addRol':
                addRoles();
                break;
            case 'updRol':
                updateRoles();
                break;
            case 'exit':
                connection.end();
                break;
        }
    });