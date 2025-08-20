import React, { Component } from 'react'
type InputState = {
    name:string
}
export default class Input extends Component<object,InputState> {
    constructor(props:object){
        super(props)
        this.state = {
            name:""
        }
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({name:e.target.value})
    }
  render() {
    return (
      <div>
        <b>Du lieu :{this.state.name} </b>
        <br />
        <input
         type="text"
         placeholder="nhập công việc mới"
         onChange={this.handleChange}
          />
      </div>
    )
  }
}
