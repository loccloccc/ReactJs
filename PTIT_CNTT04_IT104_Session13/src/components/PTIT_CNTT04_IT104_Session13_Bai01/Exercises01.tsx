import React, { Component } from 'react'
type nameState={
    name:string
}
export default class Exercises01 extends Component<object,nameState>{
  constructor(props:object){
    super(props)
    this.state = {
        name:"Duong Duc Loc"
    }
  }
    render() {
    return (
      <div>
        <b>Ho va ten : {this.state.name}</b>
      </div>
    )
  }
}
