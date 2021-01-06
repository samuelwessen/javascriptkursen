/* 
    Javascript Events 
    
        Triggers:
        click, blur, focus, keydown, keyup, mouseclick dblclick etc.
        document = DOM - Document Object Model
        window = BOM - Browser Object Model
*/

// let counter = 0
// const array = []


// document.getElementById('firstname').addEventListener('keyup', (e) => {
//     if(e.target.value.length < 4) {
//         document.getElementById('results').innerText = 'För få tecken i ' + e.target.id
//         document.getElementById('add_btn').disabled = true
//     }
//     else {
//         document.getElementById('results').innerText = ''
//         document.getElementById('add_btn').disabled = false
//     }
// })

// document.getElementById('firstname').addEventListener('keyup', (e) => {
//     validateInputLength(e)
// })
// document.getElementById('lastname').addEventListener('keyup', (e) => {
//     validateInputLength(e)
// })

// function validateInputLength(e) {
//     if(e.target.value.length < 4) {
//         document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
//         document.getElementById('add_btn').disabled = true
//     }
//     else {
//         document.getElementById(`${e.target.id}-error`).innerText = ''
//         document.getElementById('add_btn').disabled = false
//     }
// }




// let inputs = document.getElementsByTagName('input')

// for (let input of inputs) {
//     input.addEventListener('keyup', (e) => {
//         if(e.target.value.length < 4) {
//             document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
//             document.getElementById('add_btn').disabled = true
//         }
//         else {
//             document.getElementById(`${e.target.id}-error`).innerText = ''
//             document.getElementById('add_btn').disabled = false
//         }
//     })
// } 


document.getElementById('regform').addEventListener('submit', (e) => {
    e.preventDefault()

    let errors = []

    for (let element of e.target.elements) {       
        switch(element.tagName) {
            case 'INPUT':
                errors.push(validateInput(element))
                break;
            case 'SELECT':
                errors.push(validateSelect(element))
                break;
        }        
    }
    
    if(!errors.includes(true))
     window.location.replace("success.php");
})

function validateInput(element) {
    

    if(element.required) {
        if(element.value.length < 2) {
            console.log('fältet uppfyller inte kravet på 2 tecken')
            return true
        }            
    }
   return false
}

const validateSelect = (element) => {
    if(element.required) {
        if(element.value === '') {
            console.log('Du måste ange en stad.')
            return true
        }            
    }
    return false
}