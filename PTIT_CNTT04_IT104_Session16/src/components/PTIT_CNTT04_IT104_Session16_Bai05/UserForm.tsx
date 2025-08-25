import React, { Component } from "react";
type InitState = {
  userName: string;
  email: string;
  age:string;
  error: string;
  isCheck : boolean
};
export default class UserForm extends Component<object, InitState> {
  constructor(props: object) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      age: "",
      error: "",
      isCheck : false
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  send = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { userName, email, age } = this.state;
    if (userName === "") {
      this.setState({ error: "khong duoc de trong ten dang nhap" });
      return;
    }
    if (email === "" || !email.includes("@") || !email.endsWith(".com")) {
      this.setState({ error: "email khong hop le hoac khong duoc de trong" });
      return;
    }
    if (Number(age) < 0) {
      this.setState({ error: "tuoi khong hop le" });
      return;
    }
    this.setState({isCheck:true,error:""})
  };
  close = (e:React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
        userName:"",
        email:"",
        age:"",
        isCheck:false
    })
  }
  render() {
    return (
      <div>
        <form action="">
          <input type="text" placeholder="ten" onChange={this.handleChange} name="userName"/>
          <br />
          <input type="text" placeholder="email" onChange={this.handleChange} name="email"/>
          <br />
          <input type="text" placeholder="tuoi" onChange={this.handleChange} name="age"/>
          <br />
          <p style={{ color: "red" }}>{this.state.error}</p>
          <button type="button" onClick={this.send}>Gui</button>
          <button type="button" onClick={this.close}>Xoa tat ca</button>
        </form>
        {this.state.isCheck == true ? `Thong tin dang nhap
        Ho ten : ${this.state.userName}
        email : ${this.state.email}
        Tuoi : ${this.state.age}` : ""}
      </div>
    );
  }
}
