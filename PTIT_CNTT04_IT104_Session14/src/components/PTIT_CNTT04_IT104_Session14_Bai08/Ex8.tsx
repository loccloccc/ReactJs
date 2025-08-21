import React, { Component } from 'react'
type InitState={
    logIn:{
        email:string,
        pass:string
    }
}
export default class Ex8 extends Component<object,InitState> {
    constructor(props:object){
        super(props)
        this.state={
            logIn:{
                email:"",
                pass:""
            }
        }
    }
  handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const dataInfo = JSON.parse(localStorage.getItem("infoList")||"[]");
    const {email,pass} = this.state.logIn;
    const check = dataInfo.some((i : typeof this.state.logIn) => i.email === email && i.pass === pass);
    if(!check){
        alert("email hoac mat khau khong dung");
        return;
    } 
    alert("dang nhap thanh cong");
  };
  handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = e.target;
    this.setState({
      logIn: { ...this.state.logIn, [name]: value },
    });
  }
    render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">Email</label><br />
            <input type="text" name="email" id="" onChange={this.handleChange}/><br />
            <label htmlFor="">Mat Khau</label><br />
            <input type="text" name="pass" id="" onChange={this.handleChange}/><br />
            <button>Dang nhap</button>
        </form>
      </div>
    )
  }
}
