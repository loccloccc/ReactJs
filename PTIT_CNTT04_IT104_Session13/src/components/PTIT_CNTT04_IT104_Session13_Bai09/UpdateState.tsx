import React, { Component } from 'react'
type NameState = {
    name:string
}
export default class UpdateState extends Component<object,NameState> {
  constructor(props:object){
    super(props)
    this.state ={
        name:"Rikkei Academy"
    }
  }
  handleChangeName=()=>{
    this.setState({name:"Rikkei Sort"})
  }
    render() {
    return (
      <div>
        <b>Ten Cong ty : {this.state.name}</b> <br />
        <button onClick={this.handleChangeName}>Change</button>
      </div>
    )
  }
}
