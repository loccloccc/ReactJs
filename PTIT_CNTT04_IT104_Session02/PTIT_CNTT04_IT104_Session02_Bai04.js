function checkElement(arr = [],element) {
    return arr.some((num) => num == element)
}
if (checkElement([1,2,3,4,5],6)) {
    console.log("true");
    
}else{
    console.log("false");
}