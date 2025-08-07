type Product = {
    readonlyId : string,
    name:string,
    price:number
};
type Orderitem = {
    product:Product,
    quantity:number
};
type Order = {
    orderId : string,
    customerName : string,
    items:Orderitem[],
    note?:string
}
let listOrder : Order = {
    orderId:"#ORD001",
    customerName:"Nguyen Van A",
    items:[
        {
            product:{
                readonlyId : "1",
                name:"Ao so mi",
                price:250000
            },
            quantity:2
        },
        {
            product:{
                readonlyId : "2",
                name:"Quan Au",
                price:400000
            },
            quantity:1
        }
    ],
    note:"Giao sau 18h"
}
function calculateOrderTotal(order: Order): number{
    let total = order.items.reduce((sum,e) =>{
        return sum + e.product.price * e.quantity;
    },0);
    return total;
}
function printOrder(order: Order): void{
    console.log(`Don hang ${order.orderId}  `);
    console.log(`Khach hang : ${order.customerName}`);
    console.log(`San pham :`);
    order.items.forEach((item)=>{
        let {name,price} = item.product;
        let {quantity} = item;
        let total = price*quantity;
        console.log(`- ${name} x ${quantity} -> ${total.toLocaleString()} VND`);
        
    })
    console.log(`Tong cong : ${calculateOrderTotal(listOrder).toLocaleString()} VND`);
    console.log(`Ghi chu : ${order.note}`);
    
    
    
}
printOrder(listOrder);
