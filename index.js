const { prompt } = require('inquirer');
const SQL = require('./lib/sql');

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
                exit();
                break;
        }
    });