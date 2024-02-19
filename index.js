// NAME: Kyle Nathaniel P. Vinuya
// STUDENT NUMBER: 2022-69573
// SECTION: CMSC 100 - U3L
// DESCRIPTION: Exercie 3 | Javascript Basics (Password Validation)

// Validates the password based on the conditions specified
const validate = (pass1, pass2) => {
    if (pass1 !== pass2) return false;      // Checks if the passwords match
    if (pass1.length < 8) return false;     // Checks if the password is at least 8 characters long
    
    let conditions = [false, false, false]  // Checks if the passwords has at least one character that is..
    for (let i = 0; i < pass1.length; i++) {

        // uppercase
        if (pass1.charAt(i) === pass1.charAt(i).toUpperCase() && isNaN(pass1.charAt(i))) conditions[0] = true 
        
        // lowercase
        if (pass1.charAt(i) === pass1.charAt(i).toLowerCase() && isNaN(pass1.charAt(i))) conditions[1] = true;

        // a number
        if (!isNaN(Number(pass1.charAt(i)))) conditions[2] = true;
    }

    // Checks if all three conditions for the 3rd condition was met
    let finalCondition = true;
    conditions.forEach((element) => {if (element === false) finalCondition = false});

    if (finalCondition) return true;
    else return false;
}

// Reverses the string
const reverse = (pass) => {
    let newString = "";
    let i = pass.length - 1;
    
    // From the last char of the password to the first, concatenate to newString
    while (i >= 0) {
        newString = newString + pass.charAt(i);
        i--;
    }

    return newString;
}

// Returns an object with the name and password
const convert = (name, pass1, pass2) => {
    let pass;

    // Check if password is valid
    if (validate(pass1, pass2)) pass = reverse(pass1);
    else pass = pass1;

    return user = {
        name: name,
        newpassword: pass
    }
}

// TEST INPUTS FOR FUNCTION 1
// console.log(validate("helloworld","hello"))
// console.log(validate("hello","hello"))
// console.log(validate("hello1234","hello1234"))
// console.log(validate("Hello1234","Hello1234"))
// console.log(validate("HELLO1234","HELLO1234"))

// TEST INPUTS FOR FUNCTION 2
// console.log(reverse("Hello1234"))

// TEST INPUTS FOR FUNCTION 3
// console.log(convert("John","Pass1234","Pass1234"))
// console.log(convert("John","Pass123","Pass12345"))

