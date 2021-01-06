/* arrays */

// const array = []
// array[0] = 12
// array[1] = 'Hans'
// array[2] = { firstName: 'Hans'}
// array[3] = ['C#','.Net']
// array[4] = true


// const names = []
//     // sätt in värde på en specifik position
//     names[0] = 'Hans'
//     // lägg till något i slutet av listan
//     names.push('Tommy')
//     // lägg till något i början av listan
//     names.unshift('Anki')
//     // lägg till något från en viss position i listan
//     names.splice(1, 0, 'Joakim', 'Hanna')

// console.log(names)

//     //ta bort ett värde från en specifik position
//     delete names[0]
//     //ta bort något i slutet av listan
//     names.pop()
//     //ta bort något i början av listan
//     names.shift()
//     // ta bort något från en viss position i listan
//     names.splice(1,1)

// console.log(names)

//     // ta bort alla värden innan en viss position och behåll resten
//     const namestokeep = names.slice(2)
// console.log(namestokeep)


// const names = ['Hans','Anki','Tommy','Hans','Joakim','Hanna']
    // // sorterat i stigande ordning (A-Z)
    // console.log(names.sort())
    // // sorterat i fallande ordning (Z-A)
    // console.log(names.sort().reverse())

    // names.forEach(name => {
    //     console.log('forEach: ' + name)
    // })

    // for (let name of names) {
    //     console.log('for of: ' + name)
    // }

    // for (let i=0; i < names.length; i++) {
    //     console.log('for: ' + names[i])
    // }

    // const filtered = names.filter(name => {
    //     return name === 'Hans'
    // })
    // console.log(filtered)

    // const mapped = names.map(name => {
    //     return name
    // })
    // console.log(mapped)

// const numbers = [300, 100, 100, 50];
    // const result = numbers.reduce((total, num) => {
    //     console.log(total, num)
    //     return total - num;
    // })
    // console.log(result)


/* OOP Objektorienterad Programmering */

// const user = new User('Hans','Mattin-Lassei','hans@domain.com','BytMig123')
// console.log(user)

// // encapsulation example (getters setters)
//     user.id = 123123123123123132
//     console.log(user.id)

//     user.displayName = 'Kalle Anka'
//     console.log(user.displayName)
//     console.log(user)

// inheritance example (extends)
const employee = new Employee('Hans','Mattin-Lassei','hans@domain.com','BytMig123')
console.log(employee)
console.log(employee.id)
console.log(employee.employeeId)

// // polymorphism example (override methods)
//     const employee = new Employee('Hans','Mattin-Lassei','hans@domain.com','BytMig123')
//     employee.register()


/* export - import */
import { uuidv4 } from "./helpers/functions.js";
import Employee from "./models/Employee.js";



