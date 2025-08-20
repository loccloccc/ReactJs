import React, { Component } from 'react'
type Product = {
       info : {id:string,
        name:string,
        price:number,
        quantity:number}
}
export default class Parent extends Component<Product> {
  render() {
    return (
      <div>
        <b>Du lieu trong component con :</b> <br />
        id : {this.props.info.id} <br />
        Product name : {this.props.info.name} <br />
        price : {(this.props.info.price).toLocaleString()} đ <br />
        Quantity : {this.props.info.quantity} <br />
      </div>
    )
  }
}
