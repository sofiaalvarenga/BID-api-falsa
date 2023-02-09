const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this._id = faker.random.numeric(3);
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password(8);
    }
}

module.exports = {User};