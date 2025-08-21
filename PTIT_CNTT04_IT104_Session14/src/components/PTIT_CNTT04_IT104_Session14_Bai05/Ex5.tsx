import React, { Component } from 'react'
type InitStae={
    product:{
        id:string,
        name:string,
        price:string,
        quantity:string
    }
}
export default class Demo extends Component<object,InitStae>{
    constructor(props:object){
        super(props)
        this.state = {
            product :{
                id:"",
                name:"",
                price:"",
                quantity:""
            }
        }
    }
  handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("gia tri khi nhap ", this.state.product);
    
  }
  handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target;
    this.setState({
        product:{...this.state.product,[name]:value}
    })
  }
    render() {
    return (
      <div>
        <p>Them san pham</p>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">Ma san pham :</label>
            <input type="text" name="id" id=""  placeholder='#101' onChange={this.handleChange}/><br />
            <label htmlFor="">Ten san pham :</label>
            <input type="text" name="name" id="" placeholder='cam va quyt' onChange={this.handleChange}/><br />
            <label htmlFor="">Gia :</label>
            <input type="text" placeholder='100.000 VND'onChange={this.handleChange} name='price'/><br />
            <label htmlFor="">So luong :</label>
            <input type="number" onChange={this.handleChange} name='quantity'/><br />
            <button>Dang ky</button>
        </form>
      </div>
    )
  }
}
