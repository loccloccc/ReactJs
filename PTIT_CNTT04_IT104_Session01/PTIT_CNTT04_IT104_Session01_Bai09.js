function graft(arr1 , arr2){
    arr1.splice(arr1.length,0,...arr2)
    return arr1.sort()
}
let reslt =  graft([1, 2, 3, 5, 9], [4, 6, 7, 8]);
console.log(reslt);
