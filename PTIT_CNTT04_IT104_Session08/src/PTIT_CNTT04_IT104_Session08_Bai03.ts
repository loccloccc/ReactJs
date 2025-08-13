function reverseArray<T>(arr:T[]):void{
    for(let i = arr.length ; i >= 0 ; i--){
        console.log(arr[i]);
    }
}
reverseArray([1,2,3,4]);
reverseArray(["a","b","c"]);