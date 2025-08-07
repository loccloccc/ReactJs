var listInvoice = {
    invoiceId: "#INV001",
    order: [
        {
            orderId: "#ORD001",
            customerName: "Nguyen Van A",
            items: [
                {
                    product: {
                        readonlyId: "1",
                        name: "Ao so mi",
                        price: 500000
                    },
                    quantity: 2,
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
            deliveryAddress: "aaaa",
            isPaid: true
        },
        {
            orderId: "#ORD002",
            customerName: "Tran Thi B",
            items: [
                {
                    product: {
                        readonlyId: "1",
                        name: "Vay hoa",
                        price: 700000
                    },
                    quantity: 1,
                    note: "note : size M"
                },
            ],
            deliveryAddress: "aaaa",
            isPaid: false
        }
    ],
    createDate: new Date()
};
function calculateInvoiceTotal(invoice) {
    var total = 0;
    for (var _i = 0, _a = invoice.order; _i < _a.length; _i++) {
        var order = _a[_i];
        var totalOrder = 0;
        for (var _b = 0, _c = order.items; _b < _c.length; _b++) {
            var item = _c[_b];
            totalOrder += (item.product.price * item.quantity);
        }
        total += totalOrder;
    }
    return total;
}
function getUnpaidOrders(invoice) {
    var falseOrder = [];
    for (var _i = 0, _a = invoice.order; _i < _a.length; _i++) {
        var order = _a[_i];
        if (order.isPaid === false) {
            falseOrder.push(order);
        }
    }
    return falseOrder;
}
function printInvoice(invoice) {
    //let status = true ? "Da Thanh Toan" : "Chua Thanh Toan";
    console.log("Hoa Don : ".concat(invoice.invoiceId, " - Ngay tao : ").concat(invoice.createDate.getFullYear, "-").concat(invoice.createDate.getMonth, "-").concat(invoice.createDate.getDay));
    console.log("--------------------------");
    invoice.order.forEach(function (e) {
        console.log("Don hang : ".concat(e.orderId, " - ").concat(e.customerName));
        e.items.forEach(function (i) {
            var _a = i.product, name = _a.name, price = _a.price;
            var quantity = i.quantity;
            var total = price * quantity;
            console.log("-".concat(name, "x").concat(quantity, "--->").concat(total.toLocaleString(), "VND"));
        });
        if (e.isPaid === true)
            console.log("Trang Thai : Da Hoan Thanh");
        else
            console.log("Trang Thai : Chua Thanh Toan");
    });
    console.log("Tong cong hoa don : ".concat(calculateInvoiceTotal(listInvoice).toLocaleString()));
}
printInvoice(listInvoice);
