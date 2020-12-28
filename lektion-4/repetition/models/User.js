import { uuidv4 } from "../helpers/functions.js";

export default class User {
    constructor(firstname, lastname, email, password) {
        this.firstName = firstname
        this.lastName = lastname
        this.email = email
        this.password = password
    }

    get id() {
        return uuidv4()
    }

    get displayName() {
        return `${this.firstName} ${this.lastName}`
    }
    set displayName(value) {
        const values = value.split(' ')
        this.firstName = values[0]
        this.lastName = values[1]
    }

    register() {
        setTimeout(() => {
            return true
        }, 5000);
    }
}