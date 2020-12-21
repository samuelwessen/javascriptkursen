/* 
    DOM - document object model
*/

// document.body.innerText = "<h1>Detta är en rubrik</h1>"
// document.body.innerHTML = "<h1>Detta är en rubrik</h1>"

document.getElementById('results').innerText = "Hejsan";            // <- vanligaste sättet
document.getElementById('results').innerHTML = "<h1>Hejsan</h1>";
console.log(document.getElementById('results').innerText)

// Detta fungerar på ett input element
var name = document.getElementsByTagName('input')[0].value
var name = document.getElementById('name').value
var name = document.getElementsByName('name')[0].value
var name = document.getElementsByClassName('input-text')[0].value

// Detta fungerar på alla andra element
var last = document.getElementsByTagName('div')[0].innerText
var last = document.getElementById('results').innerText
var last = document.getElementsByClassName('div-text')[0].innerText

var last = document.querySelector('#results').innerText = "Kalle id"
var last = document.querySelector('.div-text').innerText = "Kalle class"
var last = document.querySelector('div').innerText = "Kalle div"

var last = document.querySelectorAll('.div-text')
var last = document.querySelectorAll('div')

// console.log(name)
// console.log(last)