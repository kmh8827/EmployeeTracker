const Department = require('../lib/departmentCL');
const { prompt } = require('inquirer');

class Departments {
    addDep = () => {

        prompt([
            {
                name: 'department',
                type: 'list',
                message: 'What department would you like to add?',
                choices: ['Engineering', 'Finance', 'Legal', 'Sales']
            }
        ]).then(results => {
            const { department } = results;

            const newDep = Department(department);
            return newDep;
        });
    }
}

module.exports = Departments;