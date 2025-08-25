import React, { Component } from 'react'
type Init = {
    isDarkMode:boolean
}
export default class ThemeSwitcher extends Component<object,Init> {
    constructor(props:object){
        super(props)
        this.state={
            isDarkMode:false
        }
    }
    click = () => {
        this.setState({
            isDarkMode:!this.state.isDarkMode
        })
    }
  render() {
    return (
      <div style={{
        width:"600px",
        height:"500px",
        border:"1px solid red",
        backgroundColor:`${this.state.isDarkMode ? "white" : "black"}`,
        color:`${this.state.isDarkMode ? "black" : "white"}`
      }}>
        {this.state.isDarkMode ? "che do sang dang bat" : "Che do toi dang bat"} <br />
        <button onClick={this.click}>chuyen theme</button>
      </div>
    )
  }
}
