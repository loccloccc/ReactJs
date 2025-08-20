import React, { Component } from 'react'
type NameParent = {
    name : string
}
export default class Children_Comp extends Component<NameParent> {
  render() {
    return (
      <div>
        <b>Ho va ten ben component con : {this.props.name}</b>
      </div>
    )
  }
}

