import Person from "./models/Person.js";
import User from "./models/User.js";
import { validate, validateEmail, print as write } from "./functions.js";

const person = new Person('H', 'Mattin-Lassei')
// write(person)

validate("BytMig123", 8, (res, error) => { 
    if(res.statusCode === 2001)
        console.log(res.message)
    if(res.statusCode === 4001)
        console.error(res.message)
})

console.log(validateEmail('hans.mattin-lassei@domain.com'))

const user = new User('Hans', 'Mattin-Lassei', 'hans@domain.com')
console.log(user.id)
setTimeout(function(){ console.log(user.id); }, 3000);