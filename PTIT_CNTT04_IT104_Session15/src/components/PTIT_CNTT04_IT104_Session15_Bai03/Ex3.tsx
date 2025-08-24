import React, { Component } from 'react'
type InitState = {
    date : string,
    flag:boolean
}
export default class Ex3 extends Component<object,InitState> {
    constructor(props:object){
        super(props)
        this.state = {
            date:"",
            flag:false
        }
    }
    handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        this.setState({flag:true})
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            date:e.target.value,
            flag:false
        })
    }
  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">ngay sinh :{this.state.flag ? this.state.date : ""} </label><br />
            <input type="date" name="" id="" onChange={this.handleChange}/><br />
            <button>Submit</button>
        </form>
      </>
    )
  }
}
