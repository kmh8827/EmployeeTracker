class Roles {
    constructor (title, salary, id) {
        this.title = title;
        this.salary = salary;
        this.id = id;
    }

    roleTitle() {
        return this.title;
    }

    roleSal() {
        return this.salary;
    }

    roleID() {
        return this.id;
    }
}

module.exports = Roles;