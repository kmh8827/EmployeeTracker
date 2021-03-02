const { prompt } = require('inquirer');
const mysql = require('mysql');
const Department = require('./lib/departmentCL');
const Employee = require('./lib/employeeCL');
const Role = require('./lib/rolesCL');

connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Threshmain',
    database: 'employee_tracker_db'
});

const addDep = () => {

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

const addEmp = () => {

  

}

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

        const newRole = {
            employee: results.employee,
            role: results.role
        };

        return newRole;

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

        const newRole = Role(role, salary, id);
        return newRole;
    })
}

const viewEmployee = () => {

    connection.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

};

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
            type: 'input',
            message: 'What is the employees role?',
        },
        {
            name: 'manager',
            type: 'input',
            message: 'Who is this employees manager?',
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

   
}

const viewDepartment = () => {

    connection.query('SELECT * FROM department', (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

}

const addDepartment = () => {
    const newDepartment = new Departments();

    connection.query('INSERT ? INTO department', [newDepartment], (err, result) => {
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
    const newRole = new Roles();

    connection.query('INSERT ? INTO role', [newRole], (err, result) => {
        if (err) throw err;
        console.table(result);

        start();
    });

}

const updateRoles = () => {
    const updateRoles = new Roles();

    connection.query('SELECT * FROM employee WHERE id = ? ', [newRole], (err, result) => {
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

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ${connection.threadId}`);

    start();
});