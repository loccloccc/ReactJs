function flatten(arr) {
    let res = [];
    arr.forEach(value => {
        value.forEach(item => res.push(item));
    });
    return res.sort();
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
