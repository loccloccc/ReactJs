function arr3(arr, value) {
    for (const items of arr) {
        if (items === value) {
            return items;
        }
    }
    return undefined;
}
console.log(arr3([1, 2, 3, 4], 4));
