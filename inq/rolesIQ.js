const { prompt } = require('inquirer');

let empList = [];
let choiceList = [];

const upEmployeeRole = () => {

    prompt([
        {
            name: 'employee',
            type: 'list',
            message: 'Which employee role would you like to update?',
            choices: empList
        },
        {
            name: 'role',
            type: 'list',
            message: 'What should their new role be?',
            choices: choiceList
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
        }
    ]).then(results => {
        return results.role;
    })
}