// NAME: Kyle Nathaniel P. Vinuya
// STUDENT NUMBER: 2022-69573
// SECTION: CMSC 100 - U3L
// DESCRIPTION: Exercie 3 | Javascript Basics (Password Validation)

const validate = (pass1, pass2) => {
    if (pass1 !== pass2) return false;
    if (pass1.length < 8) return false;
    
    let conditions = [false, false, false]
    for (let i = 0; i < pass1.length; i++) {
        if (pass1.charAt(i) === pass1.charAt(i).toUpperCase() && isNaN(pass1.charAt(i))) conditions[0] = true
        if (pass1.charAt(i) === pass1.charAt(i).toLowerCase() && isNaN(pass1.charAt(i))) conditions[1] = true;
        if (!isNaN(Number(pass1.charAt(i)))) conditions[2] = true;
    }

    let finalCondition = true;
    conditions.forEach((element) => {if (element === false) finalCondition = false});

    if (finalCondition) return true;
    else return false;
}

const reverse = (pass) => {

}

const convert = (name, pass1, pass2) => {

}

console.log(validate("helloworld","hello"))
console.log(validate("hello","hello"))
console.log(validate("hello1234","hello1234"))
console.log(validate("Hello1234","Hello1234"))
console.log(validate("HELLO1234","HELLO1234"))