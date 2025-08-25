import React, { Component } from "react";

type Product2 = {
  id: number;
  title: string;
  price: number;
  quantyti: number;
};

type ProductState = {
  products: Product2[];
  cart: Product2[];
  showCart: boolean;
};

export default class Product extends Component<object, ProductState> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: [
        { id: 1, title: "iPhone 16", price: 1000000,quantyti:5 },
        { id: 2, title: "Samsung Galaxy", price: 2000000 , quantyti:5},
        { id: 3, title: "Oppo A9", price: 1500000  , quantyti:5},
        { id: 4, title: "Xiaomi Mi 12", price: 1800000 , quantyti:5},
        { id: 5, title: "Xiaomi Mi 13", price: 1800000 , quantyti:5},
        { id: 6, title: "Xiaomi Mi 14", price: 1800000 , quantyti:5},
        { id: 7, title: "Xiaomi Mi 15", price: 1800000 , quantyti:5},
        { id: 8, title: "Xiaomi Mi 16", price: 1800000 , quantyti:5},
        { id: 9, title: "Xiaomi Mi 17", price: 1800000 , quantyti:5},
        { id: 10, title: "Xiaomi Mi 18", price: 1800000 , quantyti:5},
      ],
      cart: [],
      showCart: false,
    };
  }
  handleAddToCart = (p: Product2) => {
  const exist = this.state.cart.find((item) => item.id === p.id);

  let updatedCart;
  if (exist) {
    updatedCart = this.state.cart.map((item) =>
      item.id === p.id ? { ...item, quantyti: item.quantyti + 1 } : item
    );
  } else {
    updatedCart = [...this.state.cart, { ...p, quantyti: 1 }];
  }

  this.setState({ cart: updatedCart });
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

  render() {

    return (
      <div style={{ padding: "20px" }}>
        {/* Danh sách sản phẩm */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {this.state.products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ccc",
                width: "200px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>{p.title}</p>
              <p>{p.price.toLocaleString()} đ</p>
              <button onClick={() => this.handleAddToCart(p)}>
                Thêm vào giỏ hàng
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
