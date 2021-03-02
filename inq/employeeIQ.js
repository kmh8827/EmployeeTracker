const Employee = require('../lib/employeeCL');
const { prompt } = require('inquirer');

const addEmp = (roles, managers) => {

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
            type: 'input',
            message: 'What is the employees role?',
        },
        {
            name: 'manager',
            type: 'input',
            message: 'Who is this employees manager?',
        }
    ]).then(results => {
        const { first, last, role, manager } = results;

        const newEmp = new Employee(first, last, role, manager);
        return newEmp;
    });

}

module.exports = { addEmp };