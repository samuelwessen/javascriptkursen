import Root from "./User.js";
import { uuidv4 } from "../helpers/functions.js";

export default class Employee extends Root {
    constructor(firstname, lastname, email, password) {
        super(firstname, lastname, email, password)
    }

    get employeeId() {     
        return uuidv4()
    }

    register() {

        // Denna kommer generera en evighetsloop och funkar ej

        console.log('Registrating the Employee. Please Wait.')

        let regStatus = 0

        while(regStatus !== 1) {        
            setTimeout(() => {
                if(super.register())
                    regStatus = 1
                else
                    console.log('.')
            }, 1000);
        }

        console.log('Completed')

    }
}