function checkEndString(str,strEnd){
    return str.endsWith(strEnd)
}
let str = prompt("nhap chuoi :")
let strEnd = prompt("nhap chuoi cuoi")
if(checkEndString(str,strEnd)) console.log("true");
else console.log("false");
