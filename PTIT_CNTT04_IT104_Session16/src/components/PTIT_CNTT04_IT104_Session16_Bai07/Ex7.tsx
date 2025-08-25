import React, { Component } from 'react'
import Title from './Title'
import Product from './Product'

export default class Ex7 extends Component {
  render() {
    return (
      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"20px"
      }}>
        <div className="title">
            <Title></Title>
        </div> 
        <div className="product">
            <Product></Product>
        </div>
      </div>
    )
  }
}
