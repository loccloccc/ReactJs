function countString(str:string):number{
    let count = 0 ;
    for (let i = 0; i < str.length; i++) {
        if(isNaN(Number(str[i]))){
            count++;
        }
    }
    return str.length - count;
}
function checkPrime(a:number):boolean{
    if(a<2){
        return false;
    }
    for(let i = 2 ; i < a/2 ; i++){
        if(i%a==0){
            return false;
        }
    }
    return true;
}
function processInput(input: string | number | boolean):void{
    if(typeof input === "string"){
        if(Number(input)) console.log(input);
        else console.log(`${countString(input)} ky tu chu cai`);
    }else if (typeof input === "number"){
        if(checkPrime(input) == true) console.log("so nguyen to");
        else console.log("khong la so nguyen to");
    }else {
        if(input== true) console.log("Giá trị là true - tiến hành xử lý");
        else console.log("Giá trị là false - dừng xử lý");
    }
}
processInput(3);