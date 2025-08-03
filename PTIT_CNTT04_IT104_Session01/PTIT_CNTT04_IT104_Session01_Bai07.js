function sum (...arr){
    return arr.map(arr => arr.reduce((a,b) => a + b , 0))
}
let reslt = sum([1,2],[3,4,5],[6,7,8])
console.log(reslt);
