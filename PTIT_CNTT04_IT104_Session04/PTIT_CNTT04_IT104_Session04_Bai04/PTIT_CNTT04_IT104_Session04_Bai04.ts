function checkType(a : string | number):void {
    if(typeof a === "string") console.log(`do dai chuoi ${a.length}`);
    else {
        if (a%2==0) console.log("day la so chan");
        else console.log("day la so le");
    }
}
checkType("aaaaa");
checkType(10);