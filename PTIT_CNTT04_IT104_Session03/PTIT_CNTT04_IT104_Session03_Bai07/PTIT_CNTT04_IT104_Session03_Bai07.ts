let str:string = "banana";
let word:string = "";
for(let char of str){
    if(!word.includes(char)) word+=char;
}
console.log(word);
