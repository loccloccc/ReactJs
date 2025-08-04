const products = [
  { name: "A", price: 100, discount: 0.1, quantity: 2 },
  {
    name: "B",
    price: 200,
    discount: 0.2,
    quantity: 1,
    bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 },
  },
  {
    name: "C",
    price: 300,
    discount: 0,
    quantity: 3,
    bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 },
  },
];
let totalbeforeDiscount = (products = []) => {
  let sum = 0;
  products.forEach((e) => (sum += e.price * e.quantity));
  return sum;
};
let totalAfterDiscount = (products = []) => {
  let sum = 0;

  products.forEach((e) => {
    let unitPrice = e.price;
    unitPrice *= (1 - e.discount);
    if ("bulkDiscount" in e && e.quantity >= e.bulkDiscount.minQuantity) {
      unitPrice *= (1 - e.bulkDiscount.extraDiscount);
    }
    sum += unitPrice * e.quantity;
  });
  return sum;
};
let details = [];
let getOrderSummary = (products = [])=>{
    products.forEach(e => {
        details.push([
            {
                name : e.name,
                finalPrice : e.price * (1 - e.discount),
                quantity : e.quantity,
                subtotal : e.price * (1 - e.discount) * e.quantity 
            }
        ])
    })
    return details
} 
let productsAfter = {
    totalbeforeDiscount : totalbeforeDiscount(products),
    totalAfterDiscount : totalAfterDiscount(products),
    details : details
}
console.log(productsAfter);


