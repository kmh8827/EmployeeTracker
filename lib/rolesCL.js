class Role {
    constructor (role, salary, id) {
        this.role = role;
        this.salary = salary;
        this.id = id;
    }

    returnRole() {
        const Role = {
            role: this.role,
            salary: this.salary,
            id: this.id
        }

        return Role;
    }
}

module.exports = Role;