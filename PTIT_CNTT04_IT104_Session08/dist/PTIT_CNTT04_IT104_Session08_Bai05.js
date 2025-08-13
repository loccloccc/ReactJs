function arr2(a) {
    let check = a.filter(i => i % 2 === 0);
    return check.length > 0 ? check : undefined;
}
console.log(arr2([2, 3, 4, 5, 6, 7]));
