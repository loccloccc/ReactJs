function checkType(a) {
    if (typeof a === "string")
        console.log("do dai chuoi ".concat(a.length));
    else {
        if (a % 2 == 0)
            console.log("day la so chan");
        else
            console.log("day la so le");
    }
}
checkType("aaaaa");
checkType(10);
