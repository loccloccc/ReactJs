function arr3<T>(arr:T[],value:T):T| undefined{
    for(const items of arr){
        if(items === value){
            return items;   
        }
    }
    return undefined;
}
console.log(arr3([1,2,3,4],4));
