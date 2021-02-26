const Employee = require('../lib/employeeCL');
const { prompt } = require('inquirer');

let roles = [];
let managers = [];

const addEmployee = () => {

    prompt([
        {
            name: 'first',
            type: 'input',
            message: 'What is the employees first name?'
        },
        {
            name: 'last',
            type: 'input',
            message: 'What is the employees last name?'
        },
        {
            name: 'role',
            type: 'list',
            message: 'What is the employees role?',
            choices: roles
        },
        {
            name: 'manager',
            type: 'list',
            message: 'Who is this employees manager?',
            choices: managers
        }
    ]).then(results => {
        const { first, last, role, manager } = results;

        const newEmp = new Employee(first, last, role, manager);
        return newEmp;
    });

}