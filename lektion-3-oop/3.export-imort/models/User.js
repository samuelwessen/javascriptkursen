export default class User {
    constructor(firstname, lastname, email) {
        this.firstName = firstname
        this.lastName = lastname
        this.email = email
    }

    get id() {
        return Date.now().toString()
    }
}