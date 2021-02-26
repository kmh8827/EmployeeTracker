const Roles = require('../lib/rolesCL')
const { prompt } = require('inquirer');

let employees = [];
let roles = [];

const updateEmployeeRole = () => {

    prompt([
        {
            name: 'employee',
            type: 'list',
            message: 'Which employee role would you like to update?',
            choices: employees
        },
        {
            name: 'role',
            type: 'list',
            message: 'What should their new role be?',
            choices: roles
        }
    ]).then(results => {
        return results.role;
    });
}

const addRole = () => {

    prompt([
        {
            name: 'role',
            type: 'input',
            message: 'What role would you like to add?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary for this role?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the department id for this role?'
        }
    ]).then(results => {
        const { role, salary, id } = results;

        const newRole = Roles(role, salary, id);
        return newRole;
    })
}