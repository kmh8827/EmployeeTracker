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
                SQL.viewEmployee();
                break;
            case 'addEmp':
                SQL.addEmployee();
                break;
            case 'viewDep':
                SQL.viewDepartment();
                break;
            case 'addDep':
                SQL.addDepartment();
                break;
            case 'viewRol':
                SQL.viewRoles();
                break;
            case 'addRol':
                SQL.addRoles();
                break;
            case 'updRol':
                SQL.updateRoles();
                break;
            case 'exit':
                exit();
                break;
        }
    });