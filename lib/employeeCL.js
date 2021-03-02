class Employee {
    constructor(first,last,role,manager) {
        this.first = first;
        this.last = last;
        this.role = role;
        this.manager = manager;
    };

    emp() {
        
        newEmployee = {
            first_name: this.first,
            last_name: this.last,
            role: this.role,
            manager: this.manager,
        };

        return newEmployee;
    }
}

module.exports = Employee;