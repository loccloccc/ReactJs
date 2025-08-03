function check(arr) {
    let obj = {}
    for(let str of arr){
        let key = str.split('').sort().join('')
        if(!obj[key]){
            obj[key] = []
        }
        obj[key].push(str);
    }
    console.log(obj);
}
let input = ["eat", "tea", "tan", "ate", "nat", "bat"]
//console.log(check(input));
check(input)
