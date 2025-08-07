var listOrder = {
    orderId: "#ORD001",
    customerName: "Nguyen Van A",
    items: [
        {
            product: {
                readonlyId: "1",
                name: "Ao so mi",
                price: 250000
            },
            quantity: 2
        },
        {
            product: {
                readonlyId: "2",
                name: "Quan Au",
                price: 400000
            },
            quantity: 1
        }
    ],
    note: "Giao sau 18h"
};
function calculateOrderTotal(order) {
    var total = order.items.reduce(function (sum, e) {
        return sum + e.product.price * e.quantity;
    }, 0);
    return total;
}
function printOrder(order) {
    console.log("Don hang ".concat(order.orderId, "  "));
    console.log("Khach hang : ".concat(order.customerName));
    console.log("San pham :");
    order.items.forEach(function (item, index) {
        var _a = item.product, name = _a.name, price = _a.price;
        var quantity = item.quantity;
        var total = price * quantity;
        console.log("- ".concat(name, " x ").concat(quantity, " -> ").concat(total.toLocaleString(), " VND"));
    });
    console.log("Tong cong : ".concat(calculateOrderTotal(listOrder).toLocaleString(), " VND"));
    console.log("Ghi chu : ".concat(order.note));
}
printOrder(listOrder);
