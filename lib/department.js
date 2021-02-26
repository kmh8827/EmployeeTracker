const { promp } = require('inquirer');

promp([])

class Department {

    constructor(name) {
        this.name = name;
    };

    depName = () => {
        return this.name;
    }

}