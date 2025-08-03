function graftArr(arr1 ,arr2 , index) {
    if(index<0 || index > arr1.length){
        console.log("vi tri khong hop le");
        return;
    }
    arr1.splice(index,0,...arr2)
    return arr1
}
console.log(graftArr([1,2,3,7,8],[4,5,6],3));
console.log(graftArr(['a', 'b' , 'e','f'], ['c','d'], 2));

