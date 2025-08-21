import React, { Component } from 'react'
type InitState = {
    sex:string
}
export default class Ex6 extends Component<object,InitState> {
    constructor(props:object){
        super(props)
        this.state = {
            sex : ""
        }
    }
    handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(this.state.sex);
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("gioi tinh : " , e.target.value);
        this.setState({sex:e.target.value})
    }
  render() {
    return (
      <div>
        <p>Gioi tinh : {this.state.sex}</p>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="radio" name="sex" id="" onChange={this.handleChange} value={"nam"}/>
            <label htmlFor="">Nam</label><br />
            <input type="radio" name="sex" id="" onChange={this.handleChange} value={"nu"}/>
            <label htmlFor="">Nu</label><br />
            <input type="radio" name="sex" id="" onChange={this.handleChange} value={"khac"}/>
            <label htmlFor="">Khac</label> <br />
            <button>Submit</button>  
        </form>
      </div>
    )
  }
}
