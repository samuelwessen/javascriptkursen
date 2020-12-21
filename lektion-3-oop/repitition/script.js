/* 
    Data Types

    JS                  C#
    String              String
    Number              int, long, double, float
    Boolean             bool (Boolean)
    Object              object, null 


    JS
    ARRAY, OBJECT, NUll = Object
*/

// let datatype = 1
// console.log(typeof datatype)


/* String */
// var stringVarable = ""
// var stringVarable = ''
// var stringVarable = ``  // <= shift + ´

// var stringFirstname = 'Samuel'
// var greeting = 'Hej jag heter ' + stringFirstname + '.'
// var greeting = `Hej jag heter ${stringFirstname}.`
// console.log(greeting)

// console.log(greeting.length)
// console.log(greeting.toLocaleLowerCase())
// console.log(greeting.toUpperCase())
// console.log(greeting.indexOf('Samuel'))
// console.log(greeting.concat(' Jag bor i örebro'))


/* Number */
// var value = 1
// var value = 1.1
// var value = 1e-5
// var value = 1e5
// var value = 0.123451232
// console.log(value)


/* Boolean */
// var status = true
// console.log(status)


/* Object */
// var objectValue = {}

// let person1 = {
//     firstName: 'Samuel',
//     lastName: 'wessen',
//     age: 34,
//     skills: ['C#', 'Javascript', 'HTML och CSS'],
//     adress: {
//         adressLine: 'Ringgatan 30E',
//         zipcode: '70342',
//         city: 'örebro'
//     },
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(person1.fullName())
// console.log(person1.skills)
// console.log(person1.skills[0])
// console.log(person1.adress)


// /* Convert to JSON */
// let json = JSON.stringify(person1)
// console.log(json)

// /* Convert from JSON */
// let person2 = JSON.parse(json)
// console.log(person2)


/* Classes */
    // class Adress {
    //     constructor(adressLine, zipCode, city) {
    //         this.adressLine = adressLine,
    //         this.zipCode = zipCode,
    //         this.city = city
    //     }
    // }




    // class Person {
    //     constructor(firstName = '', lastName = '', age = 0, skills, adress = new Adress()) {
    //         this.firstName = firstName
    //         this.lastName = lastName
    //         this.age = age
    //         this.skills = skills
    //         this.adress = adress
    //     }

    //     fullName() {
    //         return `${this.firstName} ${this.lastName}`
    //     }        
    // }

    // let person1 = new Person()
    // let person2 = new Person ('Samuel', 'wessen', 34 ['C#', 'Javacript', 'HTML och CSS'], new Adress('Ringgatan 30E', '70342', 'Örebro'))
    // console.log(person2)
