const { promp } = require('inquirer');

promp([])

class Employee {
    constructor(first,last,role,manager) {
        this.first = first;
        this.last = last;
        this.role = role;
        this.manager = manager;
    };
}