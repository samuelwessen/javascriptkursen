/* 
    VARIABLES
    en container/box för att lagra information i. Heap/Stack
    JS:     camelCase       var firstName
    C#:     Pascal          var FirstName
*/

// value                    // <= gör absolut inte så här
// var value                // <= undvik att göra så här
// let value                // <= gör så här för ett dynamiskt värde (R/W)
// const value              // <= gör så här för ett statiskt värde (R)

let firstName = "Hans"
firstName = "Anna"          // <= kan ändras men kan inte deklareras igen

const pi = 3.14         
pi = "3.1111"               // <= const kan inte skrivas över 


