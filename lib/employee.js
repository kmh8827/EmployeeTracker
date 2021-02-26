const { promp } = require('inquirer');

promp([])

class Employee {
    constructor(first,last,role,manager) {
        this.first = first;
        this.last = last;
        this.role = role;
        this.manager = manager;
    };

    empFirst = () => {
        return this.first;
    }

    empLast = () => {
        return this.last;
    }

    empRole = () => {
        return this.role;
    }

    empMan = () => {
        return this.manager;
    }
}