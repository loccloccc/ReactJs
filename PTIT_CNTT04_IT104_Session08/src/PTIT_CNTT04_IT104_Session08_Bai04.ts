function arr<T,U>(a:T,b:U):void{
    let arrPush:[T,U][] = [];
    arrPush.push([a,b]);
    console.log(arrPush);
    
}
arr(3,"loc");