const Departments = require('../inq/departmentIQ');
const Employees = require('../inq/employeeIQ');
const Roles = require('../inq/rolesIQ');

const viewEmployee = () => {

    connection.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        console.table(result);

    });

};

const addEmployee = () => {
    new Promise(() => {
        const newEmployee = Employees.addEmp();
    }).then((result) => {
        console.log(result);
        connection.query('INSERT ? INTO employee FROM employee', [result], (err, result) => {
            if (err) throw err;
            console.table(result);

        });
    });
}

const viewDepartment = () => {

    connection.query('SELECT * FROM department', (err, result) => {
        if (err) throw err;
        console.table(result);

    });

}

const addDepartment = () => {
    const newDepartment = new Departments();

    connection.query('INSERT ? INTO department', [newDepartment], (err, result) => {
        if (err) throw err;

        console.table(result);

    });
}

const viewRoles = () => {

    connection.query('SELECT * FROM role', (err, result) => {
        if (err) throw err;
        console.table(result);

    });

}

const addRoles = () => {
    const newRole = new Roles();

    connection.query('INSERT ? INTO role', [newRole], (err, result) => {
        if (err) throw err;
        console.table(result);

    });

}

const updateRoles = () => {
    const updateRoles = new Roles();

    connection.query('SELECT * FROM employee WHERE id = ? ', [newRole], (err, result) => {
        if (err) throw err;
        console.table(result);

    });

}

module.exports = { viewEmployee, addEmployee, viewDepartment, addDepartment, viewRoles, addRoles, updateRoles }