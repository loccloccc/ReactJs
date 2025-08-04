function sumArr(arr=[]) {
    let sum = 0;
    for(let nums of arr){
        if(nums%2==0) sum += nums
    }
    return sum
}
console.log("ket qua : " , sumArr([1,2,3,4,5,6]));
