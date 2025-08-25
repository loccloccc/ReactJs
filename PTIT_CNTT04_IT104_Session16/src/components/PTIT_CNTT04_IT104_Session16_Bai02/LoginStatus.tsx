import React, { Component } from 'react'
type IsLoggedIn = {
    isLoggedIn:boolean
}
export default class LoginStatus extends Component<object,IsLoggedIn> {
    constructor(props:object){
        super(props)
        this.state  = {
            isLoggedIn : false
        }
      
    }
    onClick = () =>{
        this.setState({
            isLoggedIn:!this.state.isLoggedIn
        })
    }
  render() {
    return (
      <div>
        {this.state.isLoggedIn==false ? "Dang nhap de tiep tuc" : " Xin chao user"}
        <button onClick={this.onClick}>{this.state.isLoggedIn==false ?"Dang nhap":"Dang xuat"}</button>
      </div>
    )
  }
}
