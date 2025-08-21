import React, { Component} from 'react'
type InitState = {
    user :{
        email:string,
        pass:string
    }
}
export default class Contrll extends Component<object,InitState> {
    constructor(props:object){
        super(props)
        this.state = {
            user : {
                email : "",
                pass:" "
            }
        }
    }
    handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("gia tri khi nhap : " , this.state.user);
        //CLEAR 
        this.setState({
            user:{
                email:"",
                pass:""
            }
        })
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("gia tri name : " , e.target.name);
        const {name,value} = e.target;
        this.setState({
            user:{...this.state.user,[name]:value}
        })
        
    }
  render() {
    return (
      <div>
        Form dung ki thuat controll
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" onChange={this.handleChange} name='email' value={this.state.user.email}/><br />
            <label htmlFor="">Pass</label>
            <input type="text" onChange={this.handleChange} name='pass' value={this.state.user.pass}/><br />
            <button>LogIn</button>
        </form> 
      </div>
    )
  }
}
