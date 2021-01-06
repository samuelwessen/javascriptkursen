export function print(value) {
    console.log(value)
}

export const validate = (value, min = 2, callback) => {
    if(value.length < min)
        callback({statusCode: 4001, message: `uppfyller inte kravet på ${min} tecken.`})
    else
        callback({statusCode: 2001, message: `uppfyller kravet på ${min} tecken.`})
}

export const containNumbers = value => {
    return /\d/.test(value)
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}