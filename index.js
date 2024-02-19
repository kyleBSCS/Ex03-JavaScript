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
    let newString = "";
    let i = pass.length - 1;
    
    while (i >= 0) {
        newString = newString + pass.charAt(i);
        i--;
    }

    return newString;
}

const convert = (name, pass1, pass2) => {
    let pass;

    if (validate(pass1, pass2)) pass = reverse(pass1);
    else pass = pass1;

    return user = {
        name: name,
        newpassword: pass
    }
}

// console.log(validate("helloworld","hello"))
// console.log(validate("hello","hello"))
// console.log(validate("hello1234","hello1234"))
// console.log(validate("Hello1234","Hello1234"))
// console.log(validate("HELLO1234","HELLO1234"))

// console.log(reverse("Hello1234"))

console.log(convert("John","Pass1234","Pass1234"))
console.log(convert("John","Pass123","Pass12345"))

