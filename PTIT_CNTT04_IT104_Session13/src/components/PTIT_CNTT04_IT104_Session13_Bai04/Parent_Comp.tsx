import React, { Component } from 'react'
import Children_Comp from './Children_Comp'
type nameState={
    name:string,
}
export default class Parent_Comp extends Component< object, nameState> {
    constructor(props:object){
        super(props); 
        this.state = {name:"Duong Duc Loc"}
    }
    render() {
    return (
      <div>
        <b>Ho va ten ben component cha : {this.state.name}</b>
        <Children_Comp name = {this.state.name} ></Children_Comp>
      </div>
    )
  }
}
