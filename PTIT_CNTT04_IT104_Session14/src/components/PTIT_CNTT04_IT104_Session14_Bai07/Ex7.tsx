import React, { Component } from "react";
type InitState = {
  info: {
    name: string;
    email: string;
    pass: string;
    telephone: string;
  };
};
export default class Ex7 extends Component<object, InitState> {
  constructor(props: object) {
    super(props);
    this.state = {
      info: {
        name: "",
        email: "",
        pass: "",
        telephone: "",
      },
    };
  }
  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state.info);
    const {name,email,pass} = this.state.info;
    if(!name.trim() || !email.trim() || !pass.trim()){
        alert("khong duoc de trong");
        return;
    } 
    
    if(!email.includes("@") && !email.endsWith("gmail.com") ){
        alert("email khong dung dinh dang");
        return;
    }
    const dataInfo = JSON.parse(localStorage.getItem("infoList") || "[]");
    const checkEmail = dataInfo.some((i: typeof this.state.info) => i.email === email);
    if(checkEmail){
        alert("email da ton tai");
        return;
    }
    dataInfo.push(this.state.info);
    localStorage.setItem("infoList", JSON.stringify(dataInfo));
    alert("Dang ki tai khoan thanh cong");
    this.setState({
      info: {
        name: "",
        email: "",
        pass: "",
        telephone: "",
      },
    });
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      info: { ...this.state.info, [name]: value },
    });
  };
  render() {
    return (
      <>
        Dang ki tai khoan
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Ten sinh vien</label>
          <br />
          <input type="text" name="name" id="" onChange={this.handleChange} />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input type="text" name="email" id="" onChange={this.handleChange} />
          <br />
          <label htmlFor="">Mat khau</label>
          <br />
          <input type="text" name="pass" id="" onChange={this.handleChange} />
          <br />
          <label htmlFor="">So dien thoai</label>
          <br />
          <input
            type="text"
            name="telephone"
            id=""
            onChange={this.handleChange}
          />
          <br />
          <button>Dang ki</button>
        </form>
      </>
    );
  }
}
