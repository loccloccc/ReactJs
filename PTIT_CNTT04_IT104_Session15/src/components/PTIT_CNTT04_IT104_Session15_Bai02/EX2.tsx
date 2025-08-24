import React, { Component } from 'react'
type InitState = {
    nameColor : string
    flag:boolean
}
export default class EX2 extends Component<object,InitState> {
    constructor(props:object){
        super(props)
        this.state = {
            nameColor : "",
            flag:false
        }
    }
    handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({flag:true})
    } 
    handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            nameColor : e.target.value,
            flag:false
        })
    }
  render() {
    return (
      <>
       <h2>Color : {this.state.flag ? this.state.nameColor : ""}</h2>
       <form action="" onSubmit={this.handleSubmit}>
            <input type="color" name="" id=""  onChange={this.handleChange}/><br />
            <button>Submit</button>
        </form> 
      </>
    )
  }
}
