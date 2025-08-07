type Product = {
    readonlyId : string,
    name:string,
    price:number
};
type Orderitem = {
    product:Product,
    quantity:number,
    note?:string
};
type Order = {
    orderId : string,
    customerName : string,
    items:Orderitem[],
    deliveryAddress:string,
    isPaid: boolean
}
type Invoice = {
    invoiceId : string,
    order : Order[],
    createDate:Date
}
let listInvoice : Invoice = {
    invoiceId:"#INV001",
    order:[
        {
            orderId:"#ORD001",
            customerName:"Nguyen Van A",
            items:[
                {
                    product:{
                        readonlyId : "1",
                        name:"Ao so mi",
                        price:500000
                    },
                    quantity:2,
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
            deliveryAddress:"aaaa",
            isPaid:true
        },
        {
            orderId:"#ORD002",
            customerName:"Tran Thi B",
            items:[
                {
                    product:{
                        readonlyId : "1",
                        name:"Vay hoa",
                        price:700000
                    },
                    quantity:1,
                    note:"note : size M"
                },
            ],
            deliveryAddress:"aaaa",
            isPaid:false
        }
    ],
    createDate:new Date()
}
function calculateInvoiceTotal(invoice: Invoice): number{
    let total = 0;
    for(let order of invoice.order){
        let totalOrder = 0;
        for(let item of order.items){
            totalOrder += (item.product.price*item.quantity)
        }
        total+=totalOrder;
    }
    return total;
}
function getUnpaidOrders(invoice: Invoice): Order[]{
    let falseOrder : Order[] = [];
    for(let order of invoice.order){
        if(order.isPaid===false){
            falseOrder.push(order);
        }
    }
    return falseOrder;
}
function printInvoice(invoice: Invoice): void{
    console.log(`Hoa Don : ${invoice.invoiceId} - Ngay tao : ${invoice.createDate.getFullYear}-${invoice.createDate.getMonth}-${invoice.createDate.getDay}`);
    console.log(`--------------------------`);
    invoice.order.forEach(e => {
        console.log(`Don hang : ${e.orderId} - ${e.customerName}`);
        e.items.forEach(i => {
            let {name,price} = i.product;
            let {quantity} = i;
            let total = price*quantity;
            console.log(`-${name}x${quantity}--->${total.toLocaleString()}VND`);
        })
        if(e.isPaid===true) console.log(`Trang Thai : Da Hoan Thanh`);
        else console.log("Trang Thai : Chua Thanh Toan");
    });
    console.log(`Tong cong hoa don : ${calculateInvoiceTotal(listInvoice).toLocaleString()}`);
}
printInvoice(listInvoice);