type Category = {
    id : string,
    name:string
};
type Product = {
    id : string,
    name : string,
    price : number,
    category : Category,
    discount?:number
}
let listProduct : Product = {
        id : "1",
        name : "Ao so mi",
        price : 200,
        category : {
            id : "1",
            name : "Thoi Trang Nam"
        },
        discount:0.1,
}
function getFinalprice(p:Product):number{
   let totalDiscount = p.discount!==undefined && p.discount!==null ? p.discount : 0;
   return p.price * (1-totalDiscount);
}
function printProductInfo(product: Product): void{
    console.log(`
       Ten : ${product.name}
       Gia goc : ${product.price}
       Gia sau khi giam : ${getFinalprice(product)}
       Danh muc  : ${product.category.name} 
    `);
}
printProductInfo(listProduct);