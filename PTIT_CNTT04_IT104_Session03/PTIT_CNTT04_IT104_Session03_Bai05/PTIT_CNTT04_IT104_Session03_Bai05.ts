let firstName:string = "duong";
let lastName:string = "loc";
function changeLetters(str:string):string{
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let fullName = changeLetters(firstName).concat(" ",changeLetters(lastName));
console.log(fullName);
