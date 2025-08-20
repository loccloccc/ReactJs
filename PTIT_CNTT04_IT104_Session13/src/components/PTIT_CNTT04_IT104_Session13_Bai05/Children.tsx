import React, { Component } from 'react'
import Parent from './Parent'

type Product = {
    info:{
        id:string,
        name:string,
        price:number,
        quantity:number
    }
}
export default class Children extends Component<object,Product> {
    constructor(props:object){
        super(props)
        this.state = {
            info : {   id:"1",
                name:"Duong Duc Loc",
                price:12000,
                quantity:6
            }
        }
    }
  render() {
    return (
      <div>
        <Parent info = {this.state.info}></Parent>
      </div>
    )
  }
}
