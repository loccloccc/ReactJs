function flatten<T>(arr:T[][]):T[]{
    let res:T[] = [];
    arr.forEach(value =>{
        value.forEach(item => res.push(item));
    });
    return res.sort();
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
