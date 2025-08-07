var listProduct = {
    id: "1",
    name: "Ao so mi",
    price: 200,
    category: {
        id: "1",
        name: "Thoi Trang Nam"
    },
    discount: 0.1,
};
function getFinalprice(p) {
    var totalDiscount = p.discount !== undefined && p.discount !== null ? p.discount : 0;
    return p.price * (1 - totalDiscount);
}
function printProductInfo(product) {
    console.log("\n       Ten : ".concat(product.name, "\n       Gia goc : ").concat(product.price, "\n       Gia sau khi giam : ").concat(getFinalprice(product), "\n       Danh muc  : ").concat(product.category.name, " \n    "));
}
printProductInfo(listProduct);
