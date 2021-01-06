$(document).ready(function() {

    // motsvarar document.getElementByTagName / .getElementsByClassName .getElementById

    // //innerText    
    // $('div').text('Detta är texten jag vill lägga in via div')
    // $('#div-id').text('Detta är texten jag vill lägga in via id')
    // $('.div-class').text('Detta är texten jag vill lägga in via class')
    
    // // innerHTML
    // $('div').html('<h3>Detta är texten jag vill lägga in via div</h3>')
    // $('#div-id').html('<h3>Detta är texten jag vill lägga in via id</h3>')
    // $('.div-class').html('<h3>Detta är texten jag vill lägga in via class</h3>')

    // // classList
    // $('#div-id').addClass('text-blue')
    // $('#div-id').removeClass('text-blue')

    // // style
    // $('#div-id').css('color', 'red') 

    // addEventListener
    // $('#btnClick').click(() => {
    //     // $('#div-id').hide()
    //     $('#div-id').toggle()
    // })

    // $('#input-id').keyup((e) => {
    //     console.log(e.target.value)
    // })

    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });



    $('#regform').submit((e) => {
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