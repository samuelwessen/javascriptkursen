/* 
    DATA TYPES

    JS                  C#
    --------------------------------------------------------------------------------------------
    String              String                                  till för text
    Number              int,long,double,decimal, float, uint    heltal, decimaltal, stora tal
    Boolean             Boolean (bool)                          Sant/Falskt - True/False
    Object              object                                  objekt
    undefined           -----                                   odefinerat värde
    Symbol
    null                null                                    är ingenting

    I JS ÄR:
    Array, Object, Null = Object

*/


/* String */
var firstName = "Hans"
var firstName = 'Hans'
var firstName = `Hans` // <= shift + ´

var text = "Jag är \"bäst\" i hela världen och 'helt' underbar, it's wonderful."
var text = 'Jag är "bäst" i hela världen och \'helt\' underbar, it\'s wonderful'
var text = `Jag är "bäst" i hela världen och 'helt' underbar , it's wonderful.`



var firstName = 'Samuel'
var lastName = 'Wessen'
var address = 'Ringgatan 30E'
var city = 'Örebro'

var speach = 'Hej jag heter ' + firstName + ' ' + lastName + ' och bor på ' + address + ' i ' + city + '.'
var speach = ` Hej jag heter ${firstName} ${lastName} och bor på ${address} i ${city}.`
// C# var speach = $"{FirstName} {LastName}"

var modified = speach.length
var modified = speach.toLocaleUpperCase()
var modified = speach.toLocaleLowerCase()
var modified = speach.toLocaleLowerCase().indexOf("hej")
var modified = speach.concat(' ', text)
var modified = speach.trim()

console.log(speach)
console.log(modified)



/* Boolean */
//true/false , 1/0
var status = true
var status = false


/* Number */
var value = 1
var value = 1.1
var value = 123e-5
var value = 123e5
var value = 0.123456789012345678
var value = 9234567890123456

console.log(value)

/* 
    +   lägg till
    -   ta bort
    *   gångra
    /   dela
    %   hur mycket är kvar
    ++  öka med 1
    --  minska med 1

    =   lika med
    +=  lägg till (ersätter inte utan lägger till)
    -=  tar bort (ersätter inte utan tar bort)
    *=  gångrar (ersätter inte utan gångrar)
    /=
    %= 

    */


/* Null och Undifined */
var ref                 // <= undifined
var ref = null          // <= värdet är null men datatypen är object
var ref = undefined     // <= undifined 

console.log(typeof ref)
console.log(ref)


