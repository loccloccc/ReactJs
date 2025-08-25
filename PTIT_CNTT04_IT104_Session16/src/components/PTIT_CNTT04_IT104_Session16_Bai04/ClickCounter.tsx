import React, { Component } from 'react'
type InitState = {
    count:number
}
export default class ClickCounter extends Component<object,InitState> {
    constructor(props:object){
        super(props)
        this.state={
            count:0
        }
    }
    handleClick = () => {
        this.setState({
            count:this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
