const { faker } = require('@faker-js/faker');

class Company {
    constructor() {
        this._id = faker.random.numeric(3);
        this.name = faker.company.name();
        this.address = [
            {
                street: faker.address.street(),
                city: faker.address.city(),
                state: faker.address.state(),
                postalCode: faker.address.zipCode(),
                country: faker.address.country()
            }
        ]
    }
}

module.exports = {Company}