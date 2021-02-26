const { prompt } = require('inquirer');

const addDep = () => {

    prompt([
        {
            name: 'department',
            type: 'list',
            message: 'What department would you like to add?',
            choices: ['Engineering', 'Finance', 'Legal', 'Sales']
        }
    ]).then(results => {
        return results.department;
    });
}