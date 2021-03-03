const { prompt } = require('inquirer');
const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Threshmain',
    database: 'employee_tracker_db'
});

const addRoles = () => {

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

        connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [role, salary, id], (err, result) => {
            if (err) throw err;

            start();
        });

    })
}

const viewEmployee = () => {

    let query = 'SELECT employee.first_name, employee.last_name, role.title FROM employee ';
    query = query + 'INNER JOIN role ON department_id WHERE department_id = role_id';

    connection.query(query, (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

};

const addEmployee = () => {

    connection.query('SELECT first_name, last_name, role_id FROM employee ', (err, result) => {
        if (err) throw err;
        let managers = (JSON.parse(JSON.stringify(result)));

        managers = managers.map(function (obj) {
            return obj.role_id + ' ' + obj.first_name + ' ' + obj.last_name;
        });

        connection.query('SELECT title, salary, department_id FROM role ', (err, result) => {
            if (err) throw err;
            let roles = (JSON.parse(JSON.stringify(result)));

            roles = roles.map(function (obj) {
                return obj.department_id + ' ' + obj.title + ' ' + obj.salary;
            });

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
                let { first, last, role, manager } = results;
                role = parseInt(role);
                manager = parseInt(manager);

                connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                    [first, last, role, manager],
                    (err, result) => {
                        if (err) throw err;

                        start();
                    });
            });


        });

    });
}

const viewDepartment = () => {

    connection.query('SELECT name FROM department', (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

}

const addDepartment = () => {
    prompt([
        {
            name: 'department',
            type: 'input',
            message: 'What department would you like to add?'
        }
    ]).then(results => {
        const { department } = results;

        connection.query('INSERT INTO department (name) VALUES (?)', [department], (err, result) => {
            if (err) throw err;

            start();
        });
    });
}

const viewRoles = () => {

    connection.query('SELECT title, salary FROM role', (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

}

const updateRoles = () => {

    connection.query('SELECT first_name, last_name FROM employee', (err, result) => {
        if (err) throw err;
        let employees = (JSON.parse(JSON.stringify(result)));

        employees = employees.map(function (obj) {
            return obj.first_name + ' ' + obj.last_name;
        });

        connection.query('SELECT department_id, title FROM role', (err, result) => {
            if (err) throw err;
            let roles = (JSON.parse(JSON.stringify(result)));

            roles = roles.map(function (obj) {
                return obj.department_id + ',' + obj.title;
            });

            prompt([
                {
                    name: 'employee',
                    type: 'list',
                    message: 'Which employee would you like to update?',
                    choices: employees
                },
                {
                    name: 'role',
                    type: 'list',
                    message: 'What should their new role be?',
                    choices: roles
                }
            ]).then(results => {
                let { role, employee } = results;
                role = parseInt(role);
                employee = employee.split(' ');
                connection.query('UPDATE employee SET role_id = (?) WHERE first_name = (?) AND last_name = (?) ', [role, employee[0], employee[1]], (err, result) => {
                    if (err) throw err;
                    console.table(result);

                    start();
                });

            });
        });
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

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ${connection.threadId}`);
    let query = 'SELECT employee.first_name, employee.last_name, role.title, role.salary, role.department_id FROM employee ';
    query = query + 'INNER JOIN role ON department_id WHERE department_id = role_id';
    connection.query(query, (err, result) => {
        if (err) throw err;

        console.table(result);
        start();
    });

});