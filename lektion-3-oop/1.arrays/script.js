/*
    Arrays 

    JS                  C#
    ------------------------------------------------------
    Array []              Array string[]
    Array []              List  List<string>()

*/


// const array = []
// console.log(typeof array)

//går att ha flera olika datatyper i en array - Bör dock inte göras
// array[0] = 'Samuel'
// array[1] = { firstName: 'Mikael'}
// array[2] = 123
// console.log(array)

// const names = ['Samuel', 'Mikael', 'Daniel']
// console.log(names)
// console.log(names.length)
// console.log(names.indexOf('Daniel'))


// const people = [
//     { firstName: 'Samuel', lastName: 'Wessen' },
//     { firstName: 'Daniel', lastName: 'Wessen' },
//     { firstName: 'Mikael', lastName: 'Wessen' },
//     { firstName: 'Kenneth', lastName: 'Wessen' }
// ]


    // /*  sök igenom med array.forEach */
    // people.forEach(person => {
    //     if(person.firstName ==='Daniel')
    //     console.log(person)
    // })

    // /* sök igenom, med for of */
    // for (let person of people) {
    //     if(person.firstName === 'Daniel')
    //     console.log(person)
    // }

    // /* sök igenom med en vanlig for-loop */
    // for(let i=0; i < people.length; i++) {
    //     if(people[i].firstName === 'Daniel')
    //     console.log(people[i])
    // }

    // /* filtrera ut sakuer och ting med .filter() */
    // let wessens = people.filter(person => {
    //     return person.lastName === 'Wessen'
    // })
    // console.log(wessens)


    // /* mappa upp en specifik property till en ny array .map() */
    // let firstnames = people.map(person => {
    //     return person.firstName
    // })
    // console.log(firstnames)



    // const names = []

    // /* .push()          - lägg till i slutet av listan med .push( */
    // names.push('Samuel')
    // names.push('Mikael')
    // console.log(names)

    // /* .pop()          - tar bort något i slutet av listan med .pop( */
    // names.pop()
    // console.log(names)

    // /* .unshift()          - lägg till i början av listan med .unshift( */
    //     names.unshift('Daniel')        
    //     console.log(names)

    // /* .shift()          - ta bort något i början av listan med .shift( */
    //     names.shift()        
    //     console.log(names)

    // /* delete              - ta bort något från en specifik position med delete */
    // delete names[0]
    // console.log(names)


    const names = ['Samuel', 'Mikael', 'Daniel', 'Kenneth', 'Maud', 'Johanna']

    // /* .sort() sorterar något i stigande ordning dvs A-Z 0-9 */
    // names.sort()
    // console.log(names)

    // /* .reverse() ändra ordningen på listan med . reverse */
    // names.reverse()
    // console.log(names)

    // /* .sortera sorterar något i fallande ordning dvs Z-A 9-0 */
    // names.sort()
    // names.reverse()
    // console.log(names)

    // /* nestla olika metoder med varandra */
    // names.sort().reverse()
    // console.log(names)


    // /* .splice() */
    // console.log(names)

    // // lägg till ett värde på en specifik posistion
    // names.splice(1,0, 'Maud')
    // console.log(names)

    // ta bort ett värde från en scecifik position
    // names.splice(1,2,)
    // console.log(names)


    // /* .slice() */
    // const names2 = names.slice()
    // console.log(names2)

    // const names3 = names.slice(2)
    // console.log(names3)

    // const names4 = names.slice(2,4)
    // console.log(names4)

   