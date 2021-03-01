const Departments = require('./inq/departmentIQ');
const Empoyees = require('./inq/employeeIQ');
const Roles = require('./inq/rolesIQ');

const { prompt } = require('inquirer');
const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Threshmain',
    database: 'employee_tracker_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ${connection.threadId}`);

    start();
});

const viewEmployee = () => {

    connection.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

};

const addEmployee = () => {

    connection.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

}

const viewDepartment = () => {

    connection.query('SELECT * FROM department', (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

}

const addDepartment = () => {
    connection.query('INSERT ? INTO department', (err, result) => {
        if (err) throw err;

        console.table(result);

        start();
    });
}

const viewRoles = () => {

    connection.query('SELECT * FROM role', (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

}

const addRoles = () => {

    connection.query('SELECT * FROM ', (err, result) => {
        if (err) throw err;
        const newRole = Roles.addRole();
        connection.query('INSERT INTO role (title,salary,department_id) VALUES ?, [newRole]');

        start();
    });

}

const updateRoles = () => {

    connection.query('', (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

}

const start = () => {
    prompt([{
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
    }]).then(results => {

        let choice = results.choice;

        switch (choice) {
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
            console.log('GOODBYE');
            break;
        }
    });
}

