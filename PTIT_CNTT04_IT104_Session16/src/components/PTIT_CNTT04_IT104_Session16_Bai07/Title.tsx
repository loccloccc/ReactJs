import React, { Component } from "react";

type ProductState = {
  id: number;
  title: string;
  price: string;
  quantyti: number;
};

type Cart = {
  product2: ProductState[];
  isA: boolean;
};

export default class Title extends Component<object, Cart> {
  constructor(props: object) {
    super(props);
    this.state = {
      product2: [],
      isA: false,
    };
  }

  click = () => {
    this.setState({ isA: !this.state.isA });
  };
    componentDidMount() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      this.setState({ product2: JSON.parse(savedCart) });
    }
  }
  render() {

    return (
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
            Trang chủ
          </a>
          <a href="#" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
            Danh sách sản phẩm
          </a>
        </div>

        <div style={{ position: "relative" }}>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "22px",
              cursor: "pointer",
              color: "white",
              position: "relative",
            }}
            onClick={this.click}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          {this.state.isA && (
            <div
              style={{
                width: "350px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                position: "absolute",
                right: 0,
                top: "50px",
                backgroundColor: "#1a1a1a",
                color: "white",
                padding: "15px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
                zIndex: 10,
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>🛒 Giỏ hàng</h3>
              <hr style={{ borderColor: "#555" }} />

              <div>
                {this.state.product2.map((v, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "10px 0",
                      padding: "8px",
                      backgroundColor: "#2a2a2a",
                      borderRadius: "6px",
                    }}
                  >
                    <span>{v.title}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <button
                        style={{
                          border: "none",
                          background: "#444",
                          color: "white",
                          borderRadius: "4px",
                          padding: "2px 6px",
                        }}
                      >
                        +
                      </button>
                      <span>{v.quantyti}</span>
                      <button
                        style={{
                          border: "none",
                          background: "#444",
                          color: "white",
                          borderRadius: "4px",
                          padding: "2px 6px",
                          cursor: "pointer",
                        }}
                      >
                        -
                      </button>
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "tomato", cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>

              <hr style={{ borderColor: "#555" }} />
              <p style={{ textAlign: "right", fontWeight: "bold" }}>
                Tổng tiền: {this.state.product2.length > 0 ? this.state.product2.reduce((sum,value) => sum + value.price * value.quantyti,0).toLocaleString() : "0"} VND
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
