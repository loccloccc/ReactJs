import React, { Component } from 'react'
type InitState = {
    progress:string ,
    flag:boolean
}
export default class Ex4 extends Component<object,InitState> {
    constructor(props:object){
        super(props)
        this.state={
            progress:"",
            flag:false
        }
    }
    handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        this.setState({flag:true})
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            progress:e.target.value,
            flag:false
        })
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <p>Tien do hoan thanh : {this.state.flag ? this.state.progress : ""} %</p>
            <input type="range" name="" id="" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
