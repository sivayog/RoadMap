export class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export function printName(user) {
    console.log(`${user.firstName} ${user.lastName}`);
}
