let input = prompt("moi ban nhap so : ");
let number = Number(input)
console.log(number);
let check = (number) => {
    if(Number.isInteger(number)){
        if(number%2==0){
            console.log(`${number} is an even number`);
        }else{
            console.log(`${number} is old`);
        }
    }else{
        console.log(`${input} not is number`);
    }
}
check(number)

