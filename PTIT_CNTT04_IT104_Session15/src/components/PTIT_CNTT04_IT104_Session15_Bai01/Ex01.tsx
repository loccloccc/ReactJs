import React, { Component } from 'react'
type InitState = {
    email:string
}
export default class Ex01 extends Component<object,InitState> {

  constructor(props:object){
    super(props)
    this.state={
        email:""
    }
  }
  handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(this.state.email);
    
  }
  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
        email:e.target.value
    })
  }

    render() {
    return (
      <>
        <h2>Form</h2>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">Email</label><br />
            <input type="text" name="email" id="" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </>
    )
  }
}
