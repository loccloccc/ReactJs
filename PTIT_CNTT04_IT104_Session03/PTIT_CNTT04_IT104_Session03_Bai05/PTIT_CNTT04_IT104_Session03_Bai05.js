var firstName = "duong";
var lastName = "loc";
function changeLetters(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var fullName = changeLetters(firstName).concat(" ", changeLetters(lastName));
console.log(fullName);
